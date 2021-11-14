import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {FirstStep} from './components/FirstStep'
import {ViewDataForShelter} from './components/ViewDataForShelter'
import {ViewWithCalendar} from './components/ViewWithCalendar';
import { PickUpDate } from './components/PickUpDate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Router>
      <Switch>
        {/* <Route path="/"><div>STRONA GŁÓWNA</div></Route> */}
        {/* <Route path="/"><FirstStep></FirstStep></Route> */}
        {/* <Route path="/"><ViewDataForShelter></ViewDataForShelter></Route> */}
        {/* <Route path="/"><ViewWithCalendar></ViewWithCalendar></Route> */}
        <Route path="/"><PickUpDate></PickUpDate></Route>
      </Switch>
    </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
