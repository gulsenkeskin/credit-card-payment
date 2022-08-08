import './App.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Form, Field } from "react-final-form";
import { Container } from "@material-ui/core";
 
const useStyles = makeStyles((theme) => ({


}));

function App() {
  const classes = useStyles();

  function handleSubmit() { }
  function onSubmit() { }
  function validate() { }

  return (
    <div class="container">
      
       <Form
          spacing={2}
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="Is3D" />
              <div className="card-container">
                <div className="front">
                  <div className="image">
                    <img src="image/chip.png" alt="" />
                    <div>
                      <img src="image/visa.png" alt="" />
                      <img src="image/mastercard.png" alt="" />
                    </div>
                  </div>
                  <div className="card-number-box">################</div>
                  <div className="flexbox">
                    <div className="box">
                      <span>Kart sahibinin adı</span>
                      <div className="card-holder-name">ad soyad</div>
                    </div>
                    <div className="box">
                      <span>expires</span>
                      <div className="expiration">
                        <span className="exp-month">mm</span>
                        /
                        <span className="exp-year">yy</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="back">
                  <div className="stripe" />
                  <div className="box">
                    <span>cvv</span>
                    <div className="cvv-box" />
                    <img src="image/visa.png" alt="" />
                    <img src="image/mastercard.png" alt="" />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="inputBox">
                <span>kart numarası</span>
                <input type="text" maxLength={16} className="card-number-input" name="card-number" id="CardNumber" />
              </div>
              <div className="inputBox">
                <span>kart sahibinin adı</span>
                <input type="text" className="card-holder-input" maxLength={27} id="the-card-name-id" name="CardholderName" />
              </div>
              <div className="flexbox">
                <div className="inputBox">
                  <span>  AY</span>
                  <select name="ExpireMonth" id className="month-input">
                    <option value="month" selected disabled>ay</option>
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
                  <span>  YIL</span>
                  <select name="ExpireYear" id className="year-input">
                    <option value="year" selected disabled>yıl</option>
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
                  <span>güvenlik kodu (cvv)</span>
                  <input name="CardCode" type="text" maxLength={3} className="cvv-input" />
                </div>
              </div>
              <br />
              <input type="submit" defaultValue="ödemeyi tamamla" className="submit-btn" name="paymentButton" />
            </form>
          )}
        />
    </div>

  );
}

export default App;

