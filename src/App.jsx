import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import Navigation from './components/Navbar';
import Form from './components/Form';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Form}></Route>
                <Navigation />
            </Switch>
        </Router>
    );
}

export default App;
