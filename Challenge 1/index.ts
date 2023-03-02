import houses from "./houses";
interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
  // name: string;
  // planets: string | string[];
}

// function findHouses(houses: string): HouseWithID[];
// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[];
// function findHouses(houses: string |  House[]): HouseWithID[];
// function findHouses(
//   house: string | House[],
//   filter: (house: House) => boolean
// ): HouseWithID[];
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Miskiat")
);

console.log(findHouses(houses, ({ name }) => name === "Badmus"));
