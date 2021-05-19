
export const SET_USER = (state, payload) =>{
    state.user = payload;
    state.isAuthenticated = true;
    console.log(state.user);
}
// logout
export const PURGE_AUTH = (state) =>{
    state.user = {};
    state.isAuthenticated = false;
}