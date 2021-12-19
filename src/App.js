import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componetnts/pages/home/Home';
import Navigation from './componetnts/Shared/Navigation';
import Details from './componetnts/pages/detailspage/Details';
import Channel from './componetnts/pages/channel/Channel';
import Login from './componetnts/pages/login/Login';
import Resister from './componetnts/pages/resister/Resister';
import UploadVideo from './componetnts/pages/uploadVideo/UploadVideo';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/details">
            <Details></Details>

          </Route>
          <Route path="/channel">
            <Channel></Channel>

          </Route>
          <Route path="/login">
            <Login></Login>

          </Route>
          <Route path="/resister">
            <Resister></Resister>

          </Route>
          <Route path="/upload">
            <UploadVideo></UploadVideo>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
