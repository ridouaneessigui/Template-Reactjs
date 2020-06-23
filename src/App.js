import React ,{Component}from 'react';
import './App.css';
import Index from './Components/index'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
class  App extends Component {
  render(){
  return (
    <div className="App">
    <Router>
      <Navbar/>
     <Route  path='/' exact  component={Index}/>
     <Route path='/contact' component={Contact}/>
    </Router>
    </div>
  );
  }
}

export default App;
