import React, { useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";

function Pay() {
  const location = useLocation();
  var res = location.state;

  return(<iframe
    title="faturaOnizleme"
    width={"100%"}
    height={window.innerHeight}
    srcDoc={res}
  />)
}

export default Pay;
