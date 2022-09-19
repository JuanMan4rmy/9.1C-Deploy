import React from "react";
import { Card } from "semantic-ui-react";
// import { faker } from "@faker-js/faker";
// import RatingStar from "./rating";
import staffList2 from "./StaffList2";

function CardComponent(staff, i) {
  return (
    <Card
      image={staff.image}
      header={staff.header}
      meta={staff.meta}
      description={staff.description}
      extra={staff.rating}
    />
  );
}

// const extra = (
//   <a href="/">
//     <RatingStar />
//   </a>
// );

// const CardProp = (props) => (
//   <Card
//     image={staffList[0].image}
//     header={staffList[0].header}
//     meta={staffList[0].meta}
//     description={staffList[0].description}
//     extra={extra}
//   />

//   <Card
//     image={staffList[0].image}
//     header={staffList[0].header}
//     meta={staffList[0].meta}
//     description={staffList[0].description}
//     extra={extra}
//   />

// );

const CardProp2 = (props) => {
  return <>{staffList2.map(CardComponent)}</>;
};

export default CardProp2;
