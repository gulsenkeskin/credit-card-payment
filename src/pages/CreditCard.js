import "../App.css";
import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import { ApiURL } from "../Constants";
import { Http } from "../Common";
import { useHistory } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
// }));

function CreditCard() {
  const [state, setState] = useState({});
  const [cardType, setCardType] = useState("all");
  const [posData, setPosData] = useState({});

  const history = useHistory();

  const initialState = {
    cardNumber: "################",
    cardHolderName: "AD SOYAD",
    cardCode: "",
  };

  useEffect(() => {
    setState({
      cardNumber: "################",
      cardHolderName: "AD SOYAD",
      expireMonth: "MM",
      expireYear: "YY",
      cardCode: "",
    });
  }, []);

  // const classes = useStyles();

  function validate() {}

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (value === "") {
      changeValue(name, initialState[name]);
    } else {
      changeValue(name, value);
    }

    if (name === "cardNumber") {
      if (value === "4") {
        visaColor();
        changeCardLogo("visa");
      } else if (
        (value >= "51" && value <= "55") ||
        (value >= "22" && value <= "27")
      ) {
        masterColor();
        changeCardLogo("master");
      } else if (value === "" || value.length < 2) {
        defaultColor();
        changeCardLogo("all");
      }
    }
  }

  function changeValue(name, value) {
    setState({
      ...state,
      [name]: value,
    });
  }

  function changeCardLogo(cardType) {
    setCardType(cardType);
  }

  function cardLogo() {
    if (cardType === "master") {
      return masterLogo();
    } else if (cardType === "visa") {
      return visaLogo();
    } else {
      return (
        <div>
          {visaLogo()} {masterLogo()}
        </div>
      );
    }
  }

  function masterLogo() {
    return <img src={require("../image/mastercard.png")} alt="" />;
  }

  function visaLogo() {
    return <img src={require("../image/visa.png")} alt="" />;
  }

  function defaultColor() {
    let bgColor = "linear-gradient(45deg, #023047, grey)";
    document.querySelector(".front").style.background = bgColor;
    document.querySelector(".back").style.background = bgColor;
    document.querySelector(".submit-btn").style.background = bgColor;
  }

  function visaColor() {
    let bgColor = "linear-gradient(45deg, #023047, #219ebc)";
    document.querySelector(".front").style.background = bgColor;
    document.querySelector(".back").style.background = bgColor;
    document.querySelector(".submit-btn").style.background = bgColor;
  }
  function masterColor() {
    let bgColor = "linear-gradient(45deg, #dc2f02, #ffba08)";
    document.querySelector(".front").style.background = bgColor;
    document.querySelector(".back").style.background = bgColor;
    document.querySelector(".submit-btn").style.background = bgColor;
  }

  function cvvOnMouseEnter() {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  }

  function cvvOnMouseLeave() {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  }

  const handleSubmit = async (data, form) => {
    await Http.post(`${ApiURL}/index`, {
      ...state,
      is3D: 1,
      selectedPosData: posData,
    })
      .then((res) => {
        console.log("response", res);
        history.push("/pay", res.data);
      })
      .catch(function (error) {
        errorFnc(error);
      });
  };

  function errorFnc(error) {
    if (error.response) {
      console.log(error.response.data);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  }

  const cardNumberOnBlur = async () => {
    await Http.post(`${ApiURL}/checkBinCode`, {
      binCode: state.cardNumber,
    })
      .then((res) => {
        setPosData(res.data.postResponse.data[0]);
      })
      .catch(function (error) {
        errorFnc(error);
      });
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="front">
          <div className="image">
            <img src={require("../image/chip.png")} alt="" />
            <div>
              {cardLogo()}
              {/* <img src={require("../image/visa.png")} alt="" />
              <img src={require("../image/mastercard.png")} alt="" /> */}
            </div>
          </div>
          <div className="card-number-box">{state.cardNumber}</div>
          <div className="flexbox">
            <div className="box">
              <span>KART SAHİBİNİN ADI</span>
              <div className="card-holder-name">{state.cardHolderName}</div>
            </div>
            <div className="box">
              <span>EXPIRES</span>
              <div className="expiration">
                <span className="exp-month">{state.expireMonth}</span>/
                <span className="exp-year">{state.expireYear}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="stripe" />
          <div className="box">
            <span>CVV</span>
            <div className="cvv-box">{state.cardCode}</div>
            {cardLogo()}
            {/* <img src={require("../image/visa.png")} alt="" />
            <img src={require("../image/mastercard.png")} alt="" /> */}
          </div>
        </div>
      </div>
      <Form
        spacing={2}
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id="payment-form" name="form">
            <input type="hidden" name="Is3D" />
            <div className="inputBox">
              <span>KART NUMARASI</span>
              <input
                type="text"
                maxLength={16}
                className="card-number-input"
                name="cardNumber"
                id="CardNumber"
                onChange={handleInputChange}
                onBlur={cardNumberOnBlur}
              />
            </div>
            <div className="inputBox">
              <span>KART SAHİBİNİN ADI</span>
              <input
                type="text"
                className="card-holder-input"
                maxLength={27}
                id="the-card-name-id"
                name="cardHolderName"
                onChange={handleInputChange}
              />
            </div>
            <div className="flexbox">
              <div className="inputBox">
                <span>AY</span>
                <select
                  name="expireMonth"
                  className="month-input"
                  onChange={handleInputChange}
                  defaultValue="ay"
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="inputBox">
                <span>YIL</span>
                <select
                  name="expireYear"
                  className="year-input"
                  onChange={handleInputChange}
                  defaultValue="yıl"
                >
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                </select>
              </div>
              <div className="inputBox">
                <span>GÜVENLİK KODU(CVV)</span>
                <input
                  name="cardCode"
                  type="text"
                  maxLength={3}
                  className="cvv-input"
                  onChange={handleInputChange}
                  onMouseEnter={cvvOnMouseEnter}
                  onMouseLeave={cvvOnMouseLeave}
                />
              </div>
            </div>
            <br />
            <input
              type="submit"
              value="ÖDEMEYİ TAMAMLA"
              className="submit-btn"
              name="paymentButton"
            />
          </form>
        )}
      />
    </div>
  );
}

export default CreditCard;
