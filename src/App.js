import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Appbar from "./component/Toolbar/Toolbar"

function App() {
  return (
    <Routing>
    <div className="App">
    <Switch>
          <Route path="/appbar" component={Appbar} />

      
    </Switch>
    </div>
    </Routing>
  );
}

export default App;
