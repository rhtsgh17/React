import React, {useReducer} from "react";

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1,
            showText: state.showText,
        }
    }

    if (action.type === "toggleShowText") {
        return {
            count: state.count,
            showText: !state.showText,
        }
    }

    return state;
}

function Reducermateri() {
    const [state, dispatch] =useReducer(reducer, {
        count: 0,
        showText:true,
    });

    return (
        <div>
            <h1>{state.count}</h1>
            <button className="bg-rose-400 hover:bg-yellow-500 border border-lime-500 h-7 w-10 underline decoration-dotted mt-2 text-white font-bold" onClick={() => {
                    dispatch({
                        type: "INCREMENT"
                    });
                    dispatch({
                        type: "toggleShowText"
                    })
                    }}
                    
                >
                KLIK
            </button>

            {state.showText && <button className="border border-rose-400 bg-lime-500 ml-5 text-white">Halo Gaissss</button>}
        </div>
    )
}


export default Reducermateri;