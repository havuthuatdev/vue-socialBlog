export const setToken = (jwt) => {
    window.localStorage.setItem("ID_TOKEN_KEY", jwt);
}
export const getToken = () => {
    return window.localStorage.getItem("ID_TOKEN_KEY");
}
export const clearToken = () => {
    window.localStorage.removeItem("ID_TOKEN_KEY");
}