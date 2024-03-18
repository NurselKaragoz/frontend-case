import { axiosInstance } from "../../axios/axiosInstance";
export const CHARACTERS_ACTION = "CHARACTERS_ACTION";

export const getCharacters = (item: any) => ({
  type: CHARACTERS_ACTION,
  payload: item,
});

export const fetchCharecters = () => (dispatch: any) => {
  axiosInstance
    .get("/characters")

    .then(function (response) {
      console.log("character data =>", response.data);

      dispatch(getCharacters(response.data));
    })
    .catch(function (error) {
      console.log("character error", error);
    });
};
