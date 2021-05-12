import { sync } from "rimraf";

export const SET_PROFILE = (state, payload) => {
    const { user, isLoading } = payload
    state.user = user;
    state.isLoading = isLoading
}
