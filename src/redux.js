// import {combineReducers, legacy_createStore as createStore} from "redux";


// //membuat state
// const initialState = {
//     value: 0,
//     status: "",
//   };
  
  
//   //membuat reducer => function untuk merubah value dari state redux
//   export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return {
//           ...state,
//           value: state.value + 1,
//           status: action.status,
//         };
//         case "DECREMENT":
//           return {
//             ...state,
//             value: state.value - 1,
//             status: action.status,
//           };
//       default:
//         return state;
//     }
//   };

//  export const increment = () => {
//     return {
//         type: "INCREMENT",
//         status: "berhasil di tambahkan",
//     };
//   };
//  export const decrement = () => {
//     return {
//         type: "DECREMENT",
//         status: "berhasil di kurangi",
//     }
//   };


//   const colorState = {
//     color : '#ff5733'
//   }

//  export const colorReducer = (state = colorState, action) => {
//     if (action.type === "change") {
//         return {
//             color: action.color,
//         };
//     }
//     if (action.type === "return") {
//         return {
//             color: "#ff5733",
//         };
//     }

//     return state;
//   }

//   const allReducers = combineReducers({
//    // eslint-disable-next-line no-undef
//    count:reducer,
//    color : colorReducer,
//   });

//  export  const store = createStore(
//     allReducers, /* preloadedState, */
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );