import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";

function Pay(props) {
  const location = useLocation();
  var res = location.state;
  var data = res.data;
  var settings = data._settings;

  const url = res.formUrl;

  // function onSubmit() {
  //   return <Redirect to={url} />;
  // }

  return (
    <form
      name="form"
      action={url}
      method="post"
      target="_blank"
      // onSubmit={onSubmit}
    >
      <input type="hidden" name="pos_id" value={data.PosId ?? ""} />
      <input
        type="hidden"
        name="cc_holder_name"
        value={data.CCHolderName ?? ""}
      />
      <input type="hidden" name="cc_no" value={data.CCNo ?? ""} />
      <input type="hidden" name="expiry_month" value={data.ExpiryMonth ?? ""} />
      <input type="hidden" name="expiry_year" value={data.ExpiryYear ?? ""} />
      <input type="hidden" name="cvv" value={data.CCV ?? ""} />
      <input type="hidden" name="currency_id" value={data.CurrencyId ?? ""} />
      <input
        type="hidden"
        name="currency_code"
        value={data.CurrencyCode ?? ""}
      />
      <input type="hidden" name="campaign_id" value={data.CampaignId ?? ""} />
      <input
        type="hidden"
        name="allocation_id"
        value={data.AllocationId ?? ""}
      />
      <input
        type="hidden"
        name="installments_number"
        value={data.InstallmentsNumber ?? ""}
      />
      <input type="hidden" name="return_url" value={data.ReturnUrl ?? ""} />
      <input type="hidden" name="cancel_url" value={data.CancelUrl ?? ""} />
      <input type="hidden" name="invoice_id" value={data.InvoiceId ?? ""} />
      <input type="hidden" name="discount" value={data.Discount ?? ""} />
      <input type="hidden" name="coupon" value={data.Coupon ?? ""} />
      <input
        type="hidden"
        name="invoice_description"
        value={data.InvoiceDescription ?? ""}
      />
      <input type="hidden" name="total" value={data.Total ?? ""} />
      <input
        type="hidden"
        name="merchant_key"
        value={settings.merchantKey ?? ""}
      />
      <input type="hidden" name="app_id" value={settings.appID ?? ""} />
      <input type="hidden" name="app_secret" value={settings.appSecret ?? ""} />
      <input
        type="hidden"
        name="payable_amount"
        value={data.PayableAmount ?? ""}
      />
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
      <input type="hidden" name="name" value={data.Name ?? ""} />
      <input type="hidden" name="surname" value={data.SurName ?? ""} />
      <input type="hidden" name="hash_key" value={data.HashKey ?? ""} />
    </form>
  );
}

export default Pay;
