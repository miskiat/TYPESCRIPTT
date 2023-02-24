///Optional parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log("${quantity} ${ingredient}");
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "Flour");
