// import axios from 'axios'
// import User from ''
import ApiService, {Auth} from '../../../apis'
import { ID_TOKEN_KEY, setToken, getToken, clearToken } from '../../../apis/localStorage'
// export const getUser = ({ commit }) => {
//     // const user = await api.get("/user");
//     User.all().then((response) => {
//         commit("SET_USER", response.data);
//     })

// }
export const loginUser = ({ commit }, { email, password }) => {
    // clearToken();
    Auth.login({
        user: {
            email,
            password
        }, 
    }).then((response) => {
        if (response.data.user) {
            setToken(response.data.user.token);
            commit("SET_USER", response.data.user);
            ApiService.setHeader()
            // this.$router.push('Home');
        }
    }).catch((err) => {
        console.error(err);
        // throw err;
    })
}
export const registerUser = ({ commit }, { username, email, password }) => {
    Auth.register({
        user: {
            username,
            email,
            password
        }
    }).then((response) => {
        commit("SET_USER", response.data.user)
        ApiService.setHeader()
    }).catch((err) => {
        console.log(err);
    })
}
export const logout = ({commit}) => {
    clearToken();
    ApiService.setHeader();
    commit("PURGE_AUTH");
}

export const updateSetting = ({commit, state}, user) => {
    let { email, username, password, bio, image } = user;
    if (!password) {
        password = state.user.password
    }
    return Auth.updateProfile({ email, username, password, bio, image }).then(({data}) => {
        commit("SET_USER", data.user)
    }).catch((err) => {
        console.error(err);
        // throw err;
    })
}
export const checkAuth = ({commit}) => {
    return new Promise((resolve, reject) => {
        if (!getToken()) return resolve()
        ApiService.setHeader()
        Auth.get()
          .then(({ data }) => {
            commit("SET_USER", {
              ...data.user
            })
            resolve()
          })
      })
    // console.log("avbhs"+getToken());
    // if (getToken()) {
    //     setToken();
        // User.all().then((response) => {
        // debugger;

        //     console.log("nasjdb "+ response);
        //     commit("SET_AUTH", response.data.user);
            
        // }).catch((err) => {
        //     console.log(err);
        // })
    // } else {
    //     debugger;
    //     context.commit("PURGE_AUTH");
    // }
}