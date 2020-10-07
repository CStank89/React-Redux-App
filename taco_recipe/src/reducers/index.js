import { getDefaultNormalizer } from "@testing-library/react";

const initalState = {
  recipes: [],
  loadingTacos: true,
  errorMessage: "",
};

export const FETCH_RECIPE = "FETCH_RECIPE";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_ERROR = "FETCH_RECIPE_SUCCESS";

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_RECIPE:
      return {
        ...state,
        loadingTacos: true,
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case FETCH_RECIPE_ERROR:
      return {
        ...state,
        loadingTacos: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
