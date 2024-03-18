import { CHARACTERS_ACTION } from "../actions/charectersActions";
const initialState = {};
export default function charactersReducer(state = initialState, action: any) {
  switch (action.type) {
    case CHARACTERS_ACTION:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
}
