const colorState = {
    color : '#ff5733'
  }

  export const colorReducer = (state = colorState, action) => {
    if (action.type === "change") {
        return {
            color: action.color,
        };
    }
    if (action.type === "return") {
        return {
            color: "#ff5733",
        };
    }

    return state;
  }