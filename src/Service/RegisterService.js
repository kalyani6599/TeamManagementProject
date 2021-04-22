import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

class RegisterService {
  signUp(user) {
    return axios.post(BASE_URL + "/user/add-user", user);
  }
  signIn(login) {
    return axios.post(BASE_URL + "/process/login", login);
  }
  getUser(emailId) {
    return axios.get(BASE_URL + "/user/by-email/" + emailId);
  }
}
export default new RegisterService();
