
import './App.css';
import Main from './components/Body/Main';
import { BrowserRouter, Switch ,Route} from "react-router-dom";
import { About } from './components/Body/About';
import Projects from './components/Body/Projects';
import contact from './components/Body/contact';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>

     <Switch>
       <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={contact}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
