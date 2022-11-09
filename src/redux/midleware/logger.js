// export const logger = state => next=> action=> {
//     console.log(`memanggil ${action.type}`);
//     return next(action);
// }

export const logger = (state) => {
    return (next) => {
        return (action) => {
            console.log("memanggil action", action.type);
            if(action.type === 'change') {
                return next(action)
            }else{
                return
            }
           
        };
    };
};

export const test = (state) => {
    return (next) => {
        return (action) => {
            console.log("state", state);
            if(action.color !== 'purple') {
                action.color = 'purple'
                return next(action);
            }
            return next(action)
        };
    };
};