import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

class PlayerService {
  getPlayerInfo() {
    return axios.get(BASE_URL + "/playerInfo");
  }
  getPlayerById(playerId) {
    return axios.get(BASE_URL + "/player/searchById/" + playerId);
  }
  addPlayer(id, player) {
    return axios.post(BASE_URL + "/player/" + id, player);
  }
  deletePlayer(playerId) {
    return axios.delete(BASE_URL + "/player/delete/" + playerId);
  }
  updatePlayer(playerId, player) {
    return axios.put(BASE_URL + "/player/update/" + playerId, player);
  }
  searchByFirstName(playerFirstName) {
    return axios.get(BASE_URL + "/player/searchByFirst/" + playerFirstName);
  }
  searchByLastName(playerLastName) {
    return axios.get(BASE_URL + "/player/searchByLast/" + playerLastName);
  }
  searchByteamName(teamName) {
    return axios.get(BASE_URL + "/player/searchByTeam/" + teamName);
  }
  searchByDescription(description) {
    return axios.get(BASE_URL + "/player/searchByDescription/" + description);
  }
  uploadPhoto(playerId) {
    return axios.put(BASE_URL + "/player/upload/" + playerId);
  }
  downloadPhoto(playerId) {
    return axios.get(BASE_URL + "/player/download/" + playerId);
  }
}
export default new PlayerService();
