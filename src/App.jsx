import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from './Components/LoginPage/LoginPage';
import { Room } from './Components/Room/Room';
import './App.scss'

// A simple structure for this application. When User just gets to this
// site - he has to create new user name and then join the Main Room.

 export default function App() {
    return (
        <Router>
            <Route path='/foraClient/room'>
                <Room />
            </Route>
            <Route path='/foraClient' exact>
                <LoginPage />
            </Route>
        </Router>
    )
}