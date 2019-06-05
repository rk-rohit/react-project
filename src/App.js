import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      	<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/projects/:id" component={ProjectDetail} />
					<Route path="/signIn" component={SignIn} />
					<Route path="/signUp" component={SignUp} />
					<Route path="/createProject" component={CreateProject} />
				</Switch>
			</div>
		</BrowserRouter>
    );
  }  
}

export default App;
