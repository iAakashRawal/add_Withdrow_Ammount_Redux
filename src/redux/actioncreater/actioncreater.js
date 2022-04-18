import { ADD_FUND, WITHDRAW_FUND } from "../constants";


export const addAmountf = (olddata)=>{ 
    //console.log(olddata)
    return {
        type:ADD_FUND,
        amount:olddata
    }
}
export const withDrawAmountf = (olddata)=>{ 
    console.log('wd',olddata);
    return {
        type:WITHDRAW_FUND,
        amount:olddata
    }
}
