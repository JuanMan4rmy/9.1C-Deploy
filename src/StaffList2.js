import { faker } from "@faker-js/faker";
import RatingStar from "./Rating";

const staffList2 = [
  {
    "image": faker.image.image(),
    "header": faker.name.fullName(),
    "meta": faker.name.jobTitle(),
    "description": faker.address.city(),
    "rating": RatingStar(),
  },
  {
    "image": faker.image.image(),
    "header": faker.name.fullName(),
    "meta": faker.name.jobTitle(),
    "description": faker.address.city(),
    "rating": RatingStar(),
  },
  {
    "image": faker.image.image(),
    "header": faker.name.fullName(),
    "meta": faker.name.jobTitle(),
    "description": faker.address.city(),
    "rating": RatingStar(),
  },
];

export default staffList2;
