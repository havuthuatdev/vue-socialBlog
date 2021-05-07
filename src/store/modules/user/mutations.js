
export const SET_USER = (state, payload) =>{
    state.isAuthenticated = true;
    state.user = payload;
}
export const SET_AUTH = (state, payload) =>{
    state.user = payload;
    // state.errors = {};
    // setToken(state.user.token);
    // console.log(state.isAuthenticated);

}
// logout
export const PURGE_AUTH = (state) =>{
//     clearToken();
//     debugger;
//     
// console.log(state.isAuthenticated);
    state.user = {};
    state.isAuthenticated = false;
}