
import { Profile } from '../../../apis'

export const fetchProfile = ({ commit }, username) => {
    debugger;
    commit("SET_PROFILE", {profile})
    return Profile.get(username).then((response) => {
        commit("SET_PROFILE", { user: response.data.profile, isLoading: false });
        console.log(response);
    })
}
