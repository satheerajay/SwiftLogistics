import axios from "axios";

const API_URL = "http://localhost:8003/api/user";

class UserService {
    async register(payload) {
        try {
            console.log("PAYLOAD", payload);
            const response = await axios.post(API_URL + "/register", payload);
            console.log("RESPONSE", response.data);
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error.response?.data || error.message);
            throw error;
        }
    }

    async login(payload) {
        try {
            console.log("PAYLOAD", payload);
            const response = await axios.post(API_URL + "/login", payload);
            console.log("RESPONSE", response.data);

            if (response.data.payload) {
                localStorage.setItem("user", JSON.stringify(response.data.payload));
            }

            return response.data;
        } catch (error) {
            console.error("Error during login:", error.response?.data || error.message);
            throw error;
        }
    }

    async forgetPassword(payload) {
        try {
            console.log("PAYLOAD", payload.email);
            const response = await axios.post(API_URL + "/forget-password?email=" + payload.email);
            console.log("RESPONSE", response.data);
            return response.data;
        } catch (error) {
            console.error("Error during password reset request:", error.response?.data || error.message);
            throw error;
        }
    }

    async resetPassword(payload, token) {
        try {
            console.log("PAYLOAD", payload);
            const response = await axios.put(API_URL + "/reset-password?token=" + token + "&newPassword=" + payload.password);
            console.log("RESPONSE", response.data);
            return response.data;
        } catch (error) {
            console.error("Error during password reset:", error.response?.data || error.message);
            throw error;
        }
    }

    logout() {
        localStorage.removeItem("user");
    }

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new UserService();
