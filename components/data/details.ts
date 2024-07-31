import { StaticImageData } from "next/image";

import suitcase from "@/public/svg/Icon-3.svg";
import Users from "@/public/svg/Icon.svg";
import Building from "@/public/svg/Icon-2.svg";


export interface Details {
  id: number;
  data: string;
  name: string;
  icon: StaticImageData;
}

const Details: Details[] = [
  {
    id: 1,
    data: "1,75,324",
    name: "Live Jobs",
    icon: suitcase,
  },
  {
    id: 2,
    data: "9,753",
    name: "Companies",
    icon: Building,
  },
  {
    id: 3,
    data: "38,47,354",
    name: "Candidates",
    icon: Users,
  },
  {
    id: 4,
    data: "25,324",
    name: "New Jobs",
    icon: suitcase,
  },
];

export default Details;
