import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home"
function App() {
  return (
    <Routing>
    <div className="App">
    <Switch>
          <Route path="/home" component={Home} />
        
      
    </Switch>
    </div>
    </Routing>
  );
}

export default App;
