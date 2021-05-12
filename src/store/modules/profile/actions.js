
import ApiService, { Profile } from '../../../apis'

export const fetchProfile = ({ commit }, username) => {
    let profile = { user: {}, isLoading: true }
    commit("SET_PROFILE", profile)
    return Profile.get(username).then((response) => {
        commit("SET_PROFILE", { user: response.data.profile, isLoading: false });
    })
}
// export const COPY_PROFILE = ({ commit }, user) => {
//     commit("SET_PROFILE", { user, isLoading: false })
// }