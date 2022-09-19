import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { faker } from "@faker-js/faker";
import RatingStar from "./Rating";
import staffList from "./StaffList";

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

const CardProp = (props) => {
  return (
    <>
      {staffList.map(CardComponent)}

      {/* <Card
          image={staffList[0].image}
          header={staffList[0].header}
          meta={staffList[0].meta}
          description={staffList[0].description}
          extra={staffList[0].rating}
        />

        <Card
          image={staffList[1].image}
          header={staffList[1].header}
          meta={staffList[1].meta}
          description={staffList[1].description}
          extra={staffList[1].rating}
        />

        <Card
          image={staffList[2].image}
          header={staffList[2].header}
          meta={staffList[2].meta}
          description={staffList[2].description}
          extra={staffList[2].rating}
        /> */}
    </>
  );
};

export default CardProp;
