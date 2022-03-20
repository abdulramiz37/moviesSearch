import mystore from "../store"

const nameAction = (userData)=>{
    mystore.dispatch({
        type:"Name",
        payload:userData,
    });
}
export default nameAction;