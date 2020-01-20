import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import {NotificationContainer} from 'react-notifications';
import Navbar from "./components/navbar"
import CreateUser from "./components/createUser"
import CreateExercise from "./components/createExercise"
import ExerciseLists from "./components/exerciseLists"
import EditExercise from "./components/editExercise"


function App() {
  return (
          <Router >
            <Navbar />
            <br/>
            <Switch>
              {/* <Route  path="/" component={EmployeeList}></Route> */}
              <Route  path="/update/:id" component={EditExercise}></Route>
              <Route  path="/user" component={CreateUser}></Route>
              <Route  path="/create" component={CreateExercise}></Route>
              <Route  path="/" component={ExerciseLists}></Route>
            </Switch>
            <NotificationContainer></NotificationContainer>
          </Router>
  );
}

export default App;
