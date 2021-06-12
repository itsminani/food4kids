export const CREATE_FOOD = (state, newFood) => {
  console.log(newFood);
  state.foods.unshift(newFood);
};
export const CREATE_BAG = (state, newBag) => {
  console.log(newBag);
  state.bags.unshift(newBag);
};

export const SET_LISTED_FOODS = (state, listedFoods) => {
  state.foods = listedFoods;
};
export const SET_LISTED_BAGS = (state, listedBags) => {
  state.bags = listedBags;
};
export const UPDATE_BAG = (state, contents) => {
  state.bags.forEach( bag => {
    if (bag.id == contents.id){
      bag.contents = JSON.parse(contents.contents)
    }
  });
};
