export const username = (state) => {
    return (state.user && state.user.username) || null
}
export const currentUser = (state) => {
    return (state.user);
}
export const isAuthenticated = (state) => {
    return state.isAuthenticated;
}