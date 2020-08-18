import axios from 'axios';

/** API endpoints for user routes */

 const API_URL = 'http://localhost:3000';

class UserApi{
    static async getUsers(){
        let response = await axios.get(`${API_URL}/users`)
        return response.data
    }
    static async signUp(user){
        let response = await axios.post(`${API_URL}/users`, user)
        return response.data
    }
    static async deleteUser(id){
        let response = await axios.delete(`${API_URL}/users/${id}`)
        return response 
    }
    static async setActive(id, data){
        let response = await axios.put(`${API_URL}/users/${id}`, data)
        return response.data
    }
}
export default UserApi;