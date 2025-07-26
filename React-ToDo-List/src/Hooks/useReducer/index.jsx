import { useReducer } from "react";

export const ReducerCamp = () => {
    
    const initialState = {
        count : 0,
    }

//   const reducer = (state , action) => {
//     if(action.type === "INCREMENT"){
//         return { count: state.count + 1}
//     }
//     if(action.type === "DECREMENT"){
//         return { count: state.count - 1}
//     }
//     if(action.type === "RESET"){
//         return { count: state.count = 0}
//     }
//   };
const reducer = (state , action) =>{
    switch (action.type) {
        case "INCREMENT":
           return { count: state.count + 1}  
    
        case "DECREMENT":
           return { count: state.count - 1}  
    
        case "RESET":
           return { count: state.count = 0}  
    
        default:
            return state;
    }
}



  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-12 text-5xl h-lvh flex flex-col justify-center items-center bg-gray-700">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        Reset
      </button>
    </div>
  );
};
