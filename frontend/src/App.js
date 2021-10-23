import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import InterestForm from './pages/InterestForm'
import Main from './pages/Main'
import { useState } from 'react'

function App() {
    const [ username, setUsername ] = useState('bob');

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/interest" exact component={InterestForm}/>
                    <Route path="/main" exact render={(props) => <Main {...props} username={username}/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
