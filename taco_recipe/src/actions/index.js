import axios from "axios";

const apiUrl = "https://taco-randomizer.herokuapp.com/random/";

export const FETCH_RECIPE = "FETCH_RECIPE";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_ERROR = "FETCH_RECIPE_ERROR";

export const fetchRecipe = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_RECIPE });
    axios
      .get(apiUrl)
      .then((res) => {
        let data = Object.keys(res.data).map((item) => res.data[item].recipe);
        data = data[Math.ceil(Math.random())];
        dispatch({ type: FETCH_RECIPE_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_RECIPE_ERROR,
          playload: { message: "No tacos para ti mi amigo" },
        });
      });
  };
};
