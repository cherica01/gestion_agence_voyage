import BambooImage from "../images/Bamboo.jpeg";
import IkopaImage from "../images/Ikopa.jpeg";
import TsangaImage from "../images/Tsanga.jpg";
import AparthotelImage from "../images/Aparthotel.jpg";
import NHImage from "../images/NH.jpg";
import SN from "../images/SNI-Village.jpg";
import Maison from "../images/Maison.jpg";
import hotel from "../images/Hôtel.jpg";
import Sky from "../images/Sky.jpg";


export interface Hotel {
  id: number;
  name: string;
  stars: number;
  price: number;
  description: string;
  image: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Bamboo Lodge Comedy",
    stars: 2,
    price: 67000,
    description: "Un hôtel luxueux avec vue panoramique.",
    image: BambooImage,
  },
  {
    id: 2,
    name: "Ikopa Hôtel Madagascar",
    stars: 4,
    price: 146000,
    description: "Un hébergement confortable au cœur de la ville.",
    image: IkopaImage,
  },
  {
    id: 3,
    name: "Tsanga Tsanga Hôtel",
    stars: 5,
    price: 300000,
    description: "Un refuge paisible dans les montagnes.",
    image: TsangaImage,
  },
  {
    id: 4,
    name: "Aparthotel Madeline",
    stars: 4,
    price: 120000,
    description: "Un refuge paisible dans les montagnes.",
    image: AparthotelImage,
  },
  {
    id: 5,
    name: "NH(Njato Hotel) Deluxe",
    stars: 3,
    price: 100000,
    description: "Un refuge paisible dans les montagnes.",
    image: NHImage,
  },
  {
    id: 6,
    name: "SNI Village Ambohitratrimo ",
    stars: 3,
    price: 70000,
    description: "Un refuge paisible dans les montagnes.",
    image: SN,
  },
  {
    id: 7,
    name: "Maison d ' hôtes Three",
    stars: 1,
    price: 30000,
    description: "Un refuge paisible dans les montagnes.",
    image: Maison,
  },
  {
    id: 8,
    name: "hOTEL lA Ribaudiere ",
    stars: 5,
    price: 120000,
    description: "Un refuge paisible dans les montagnes.",
    image: hotel,
  },
  {
    id: 9,
    name: "Sky blue Hotel ESPACE ",
    stars: 3,
    price: 130000,
    description: "Un refuge paisible dans les montagnes.",
    image: Sky,
  },
];
