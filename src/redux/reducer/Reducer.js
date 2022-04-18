import { ADD_FUND, WITHDRAW_FUND } from "../constants";
//  console.log(ADD_FUND);
/* const iState = {
    ammount : 100
} */
const rootReducer = (state , action) => {
    let data = state ;  
    //console.log('a',data,action,ADD_FUND);

    switch (action.type){
        case ADD_FUND:
            data += action.amount             
            break;
            case WITHDRAW_FUND:
                data -= action.amount 
                console.log('as',state);
            break;
        default:
    }
    return data 
}
export default rootReducer