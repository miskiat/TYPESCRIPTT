//function parameter
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

//function with params

//Array Mutation function

export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate([1, 20, 3], (v) => v * 10));

//function as types
type MutationFunction = (v: number) => number;
