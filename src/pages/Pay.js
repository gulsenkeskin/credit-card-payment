import React from "react";

function Pay() {
  const ls = localStorage.getItem("data");

  console.log(ls);
  return ls;
}

export default Pay;
