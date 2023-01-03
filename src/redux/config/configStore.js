import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

// 1. rootReducer를 만들 것이다. --> reducer들을 합칠 것이다.
// modules 밑에 있는 여러 파일을 return하는 값이다.
// 현재 : todos
const rootReducer = combineReducers({
  todos,
});

// 2. 이것을 이용해서 store를 만들 것이다.(main)
const store = createStore(rootReducer);
//
// 3. export를 한다. 그러면 다른 파일에서 사용할 수 있도록 import 가능하다.
export default store;
