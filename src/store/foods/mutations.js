export const CREATE_FOOD = (state, newFood) => {
  console.log(newFood);
  state.foods.unshift(newFood);
};

export const SET_LISTED_FOODS = (state, listedFoods) => {
  state.foods = listedFoods;
};
