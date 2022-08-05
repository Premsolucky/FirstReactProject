
import { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Components/Shop';
import Instructors from './Components/Instructors';
import Explore from './Components/Explore';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/shop" component={Shop} />
            <Route path = "/instructor" component={Instructors} />
            <Route path = "/explore" component={Explore} />            
            </Switch>        
      </>
    )
  }

}
export default App;
