export interface Category {
  id: number;
  icon: any;
  catname: string;
  catpositions: string;
}
import {
  PenIcon,
  Code,
  Megaphone,
  Tv,
  Music,
  Building,
  HeartPulse,
  Database,
} from "lucide-react";

const categoryData: Category[] = [
  {
    id: 1,
    icon: "",
    catname: "Graphics & Design",
    catpositions: "357 Open position",
  },
  {
    id: 2,
    icon: Code,
    catname: "Code & Programing",
    catpositions: "312 Open position",
  },
  {
    id: 3,
    icon: Megaphone,
    catname: "Digital Marketing",
    catpositions: "297 Open position",
  },
  {
    id: 4,
    icon: Tv,
    catname: "Video & Animation",
    catpositions: "247 Open position",
  },
  {
    id: 5,
    icon: Music,
    catname: "Music & Audio",
    catpositions: "204 Open position",
  },
  {
    id: 6,
    icon: Building,
    catname: "Account & Finance",
    catpositions: "167 Open position",
  },
  {
    id: 7,
    icon: HeartPulse,
    catname: "Health & Care",
    catpositions: "125 Open position",
  },
  {
    id: 8,
    icon: Database,
    catname: "Data & Science",
    catpositions: "57 Open position",
  },
];
