import houses from "./houses";
interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID {
  id: number;
  name: string;
  planets: string | string[];
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  house: House[],
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(
  imput: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return [];
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Miskiat")
);

console.log(findHouses(houses, ({ name }) => name === "Badmus"));
