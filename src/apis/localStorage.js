
// const ID_TOKEN_KEY = "id_token";

export const setToken = (jwt) => {
    // return api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    window.localStorage.setItem("ID_TOKEN_KEY", jwt);
}
export const getToken = () => {
    // return api.defaults.headers.common["Authorization"];
    return window.localStorage.getItem("ID_TOKEN_KEY");
}
export const clearToken = () => {
    // return delete api.defaults.headers.common["Authorization"];
    window.localStorage.removeItem("ID_TOKEN_KEY");
}