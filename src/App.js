import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Temperature from "./component/Tempreture/Tempreture";
import Length from "./component/Length/Length";
import Volume from "./component/Volume/Volume";
function App() {
  return (
    <Routing>
    <div className="App">
    <Switch>
          
          <Route path="/temperature" component={Temperature}/>
       <Route path="/length" component={Length}/>
       <Route path="/volume" component={Volume}/>
        
      
    </Switch>
    </div>
    </Routing>
  );
}

export default App;
