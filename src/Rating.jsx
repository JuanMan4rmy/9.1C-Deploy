import React from "react";
import { Rating } from "semantic-ui-react";

var min = 1;
var max = 5;
var rand = Math.floor(Math.random() * (max - min + 1)) + min;

const RatingStar = () => (
  <Rating icon="star" defaultRating={rand} maxRating={5} />
);

export default RatingStar;
