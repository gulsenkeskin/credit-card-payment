import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Http } from "../Common";

function Pay(props) {
  //   const ls = localStorage.getItem("data");
  //   console.log(ls);

  const location = useLocation();

  function handleSubmit(e) {
  }

  function validate() {}

  var res = location.state;
  var data = res.data;
  var settings = data._settings;

  useEffect(() => {
  }, []);

  

  //   useEffect(() => {
  //     formSubmit();
  //   }, []);

  //   const formSubmit = async () => {
  //     await Http.post(`${res.formUrl}`, {
  //       pos_id: data.PosId,
  //       cc_holder_name: data.CCHolderName,
  //       cc_no: data.CCNo,
  //       expiry_month: data.ExpiryMonth,
  //       expiry_year: data.ExpiryYear,
  //       cvv: data.CCV,
  //       installments_number: data.InstallmentsNumber,
  //       return_url: data.ReturnUrl,
  //       cancel_url: data.CancelUrl,
  //       invoice_id: data.InvoiceId,
  //       total: data.Total,
  //       merchant_key: settings.merchantKey,
  //       app_id: settings.appID,
  //       app_secret: settings.appSecret,
  //       payable_amount: data.PayableAmount,
  //       items: [
  //         {
  //           name: "Siparis",
  //           price: 0.0,
  //           quantity: 1,
  //           description: data.InvoiceId,
  //         },
  //       ],
  //     })
  //       .then((res) => {})
  //       .catch(function (error) {
  //         if (error.response) {
  //           console.log(error.response.data);
  //         } else if (error.request) {
  //           console.log(error.request);
  //         } else {
  //           console.log(error.message);
  //         }
  //       });
  //   };



  return (
    <form
      name="form"
      action={res.formUrl}
      method="post"
      target="_blank"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="pos_id" value={data.PosId} />
      <input type="hidden" name="cc_holder_name" value={data.CCHolderName} />
      <input type="hidden" name="cc_no" value={data.CCNo} />
      <input type="hidden" name="expiry_month" value={data.ExpiryMonth} />
      <input type="hidden" name="expiry_year" value={data.ExpiryYear} />
      <input type="hidden" name="cvv" value={data.CCV} />
      <input type="hidden" name="currency_id" value={data.CurrencyId} />
      <input type="hidden" name="currency_code" value={data.CurrencyCode} />
      <input type="hidden" name="campaign_id" value={data.CampaignId} />
      <input type="hidden" name="allocation_id" value={data.AllocationId} />
      <input
        type="hidden"
        name="installments_number"
        value={data.InstallmentsNumber}
      />
      <input type="hidden" name="return_url" value={data.ReturnUrl} />
      <input type="hidden" name="cancel_url" value={data.CancelUrl} />
      <input type="hidden" name="invoice_id" value={data.InvoiceId} />
      <input type="hidden" name="discount" value={data.Discount} />
      <input type="hidden" name="coupon" value={data.Coupon} />
      <input
        type="hidden"
        name="invoice_description"
        value={data.InvoiceDescription}
      />
      <input type="hidden" name="total" value={data.Total} />
      <input type="hidden" name="merchant_key" value={settings.merchantKey} />
      <input type="hidden" name="app_id" value={settings.appID} />
      <input type="hidden" name="app_secret" value={settings.appSecret} />
      <input type="hidden" name="payable_amount" value={data.PayableAmount} />
      <input
        type="hidden"
        name="items"
        value={[
          {
            name: "Siparis",
            price: 0.0,
            quantity: 1,
            description: data.InvoiceId,
          },
        ]}
      />
      <input type="hidden" name="name" value={data.Name} />
      <input type="hidden" name="surname" value={data.SurName} />
      <input type="hidden" name="hash_key" value={data.HashKey} />
    </form>
  );
}

export default Pay;
