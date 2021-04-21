import logo from './logo.svg';
import './App.css';
import Post from './pages/listing';
import SinglePost from './pages/post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
              <Route exact path='/' component={Post} />
              <Route path='/blog/:id' component={SinglePost} />
          </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
