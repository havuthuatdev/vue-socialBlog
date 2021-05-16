
export const SET_USER = (state, payload) =>{
    state.user = payload;
    state.isAuthenticated = true;
    console.log(state.user);
}
// export const SET_AUTH = (state, payload) =>{
//     state.user = payload;

// }
// logout
export const PURGE_AUTH = (state) =>{
//     clearToken();
//     debugger;
//     
// console.log(state.isAuthenticated);
    state.user = {};
    state.isAuthenticated = false;
}