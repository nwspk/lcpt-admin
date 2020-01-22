import { postJSON } from "./http";
import config from "./config";

export default {
    // called when the user attempts to log in
    login: async ({ phone, code }) => {
        if (phone && code) {
            const { user } = await postJSON(`${config.api}/smsAuth/check`, {
                phone, code
            });
            localStorage.setItem('user', JSON.stringify(user))
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('user');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('user')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        return localStorage.getItem('user')
            ? Promise.resolve(JSON.parse(localStorage.getItem('user')))
            : Promise.reject();
    },
};
