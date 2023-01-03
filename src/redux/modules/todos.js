import { v4 as uuidv4 } from "uuid";

// 1. action item
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// 2. action creators
// action -> 객체 : type(어떤일) / payload (얼만큼 부여하는지)
// 추가버튼 눌러서 새로운 todo를 추가하는 것.
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
// 삭제버튼을 눌러서 원하는 것을 삭제하는 것. filter와 map
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
// 완료버튼을 눌러서 완료한 일로 내려 보내는 것.
// 취소버튼을 눌러서 해야할 일로 올려 보내는 것
// map을 이용.
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 3. initial State => reducer를 구성할 때
const initialState = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목4",
    contents: "내용4",
    isDone: true,
  },
];
// 4. reducer를 만들 것
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // ...state는 todos의 배열, action.payload = toto.객체
      return [...state, action.payload];
    case REMOVE_TODO:
      // 여기서 payload는 todo에 있는 id가 변수로 들어온다. dispatch를 통해서 들어온 값
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      // 다 훑어서 payload와 완료 혹은 취소 버튼이 일치를 하면 isDone을 반대로 바꿔준다.
      // 그게 아니면 return 해주기.
      state.map((item) => {
        // 완료 혹은 취소 버튼을 눌렀을 때, item 안의 id와 action 안에 payload가 같으면
        // isDone이 isDone이 아닌 것으로 리턴해라.
        // 완료가 완료가 아닌 것 = 완료가 취소인 것, 취소가 취소 아닌 것 = 취소가 완료인 것.
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

// 5. reducer를 export
