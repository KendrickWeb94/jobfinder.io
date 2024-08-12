export interface Category {
  id: number;
  catname: string;
  catpositions: string;
}

import {
  Pen,
  Megaphone,
  Tv,
  Music,
  Building,
  HeartPulse,
  Database,
} from "lucide-react";

const Category: Category[] = [
  {
    id: 1,
    name: "Graphics & Design",
    catpositions: "357 Open position",
  },
  {
    id: 2,
    atname: "Code & Programing",
    catpositions: "312 Open position",
  },
  {
    id: 3,
        catname: "Digital Marketing",
    catpositions: "297 Open position",
  },
  {
    id: 4,
    name: "Video & Animation",
    catpositions: "247 Open position",
  },
  {
    id: 5,
    catname: "Music & Audio",
    catpositions: "204 Open position",
  },
  {
    id: 6,
       catname: "Account & Finance",
    catpositions: "167 Open position",
  },
  {
    id: 7,
    
    catname: "Health & Care",
    catpositions: "125 Open position",
  },
  {
    id: 8,
       catname: "Data & Science",
    catpositions: "57 Open position",
  },
];
