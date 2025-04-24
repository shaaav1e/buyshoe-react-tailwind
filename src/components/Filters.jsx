import React, { useState } from "react";
import Size from "./Size";
import Colors from "./Colors";
import Amount from "./Amount";
import BuyNow from "./BuyNow";

const Filters = () => {
  return (
    <div>
      <Size />
      <Colors />
      <Amount />
      <BuyNow />
    </div>
  );
};

export default Filters;
