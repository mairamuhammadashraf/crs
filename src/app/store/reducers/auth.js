const InitialState={
    data:{},
    error:false,
    errMsg:"",
    isFetching:false,
}


export default (state=InitialState,action) => {
    console.log(state,"this is state")
    switch(action.type){

        case "REGISTER_REQUEST":
        return {...state,isFetching:true}
        case "REGISTER_SUCCESS":
        return {...state,isFetching:false,data:action.data}
        case "REGISTER_FAIL":
        return {...state,isFetching:false,error:true,errMsg:action.error}
        default :
        return state
    }
}