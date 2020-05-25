import * as actionType from "./action";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  burgerCost: 400,
};

const INGREDIENT_PRICE_LIST = {
  salad: 100,
  bacon: 40,
  meat: 200,
  cheese: 180,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        burgerCost:
          state.burgerCost + INGREDIENT_PRICE_LIST[action.ingredientName],
      };
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        burgerCost:
          state.burgerCost - INGREDIENT_PRICE_LIST[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
