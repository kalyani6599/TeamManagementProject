import Register from "./Container/Register";
import Login from "./Container/Login";
import Home from "./Container/Home";
import "./App.css";
import DownloadPlayerComponent from "./Container/DownloadPlayerComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPlayerComponent from "./Container/ListPlayerComponent";
import AddPlayerComponent from "./Container/AddPlayerComponent";
import UploadPhotoComponent from "./Container/UploadPhotoComponent";
import ViewPlayerComponent from "./Container/ViewPlayerComponent";
import UpdatePlayerComponent from "./Container/UpdatePlayerComponent";
import TeamSearchList from "./Container/TeamSearchList";
import DescriptionSearchList from "./Container/DescriptionSearchList";
import Statistics from "./Component/Statistics";
import Profile from "./Container/Profile";
function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Switch>
          <Route path="/" exact={true} component={Register} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/home/:emailId" exact={true} component={Home} />
          <Route
            path="/playerInfo"
            exact={true}
            component={ListPlayerComponent}
          />
          <Route
            path="/add-player"
            exact={true}
            component={AddPlayerComponent}
          />
          <Route
            path="/upload-photo/:playerId"
            exact={true}
            component={UploadPhotoComponent}
          />
          <Route
            path="/view-player/:playerId"
            exact={true}
            component={ViewPlayerComponent}
          />
          <Route
            path="/update-player/:playerId"
            exact={true}
            component={UpdatePlayerComponent}
          />
          <Route
            path="/search-by-team/:teamName"
            exact={true}
            component={TeamSearchList}
          />
          <Route
            path="/search-by-firstname/:playerFirstName"
            exact={true}
            component={TeamSearchList}
          />
          <Route
            path="/search-by-lastname/:playerLastName"
            exact={true}
            component={TeamSearchList}
          />
          <Route
            path="/search-by-description/:description"
            exact={true}
            component={DescriptionSearchList}
          />
          <Route
            path="/download-player/:playerId"
            exact={true}
            component={DownloadPlayerComponent}
          />
          <Route path="/show-statistic" exact={true} component={Statistics} />
          <Route
            path="/show-profile/:emailId"
            exact={true}
            component={Profile}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
