import { callApiService } from "../../dataSource/apiService"

export const UserService = {


    userLogin: (data) => {
        return callApiService.post("http://localhost:5000/users/login", data, { "Content-Type": "application/json" })
    },

    userRegister: (data) => {
        return callApiService.post("http://localhost:5000/users", data, { "Content-Type": "application/json" })
    },

    getAllUsers: () => {
        return callApiService.get("http://localhost:5000/users");
    },

    getUserAccount : ()=>{
        return callApiService.get("http://localhost:5000/users/account/home")
    },

    getUserDetails: (id) => {
        return callApiService.get(`http://localhost:5000/users/${id}`)
    },

    updateUserDetails: (id, data) => {
        return callApiService.patch(`http://localhost:5000/users/${id}`, data);
    },

    deleteUser: (id) => {
        return callApiService.delete(`http://localhost:5000/users/${id}`);
    }

}