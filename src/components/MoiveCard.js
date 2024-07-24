/** @format */

import React from "react";
import { POSTER_IMG_URL } from "../utils/constants";
const MoiveCard = ({ path }) => {
  return (
    <div>
      <div className="w-48">
        <img src={POSTER_IMG_URL + path} />
      </div>
    </div>
  );
};

export default MoiveCard;
