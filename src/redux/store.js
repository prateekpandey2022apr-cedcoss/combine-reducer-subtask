import { createStore, combineReducers, applyMiddleware } from "redux";
import { addReducer } from "./addReducer";
import { clearReducer } from "./clearReducer";
import { divReducer } from "./divReducer";
import { mulReducer } from "./mulReducer";
import { subReducer } from "./subReducer";

const rootReducer = combineReducers({
  add: addReducer,
  sub: subReducer,
  mul: mulReducer,
  div: divReducer,
  clear: clearReducer,
});

const store = createStore(rootReducer);

export default store;
