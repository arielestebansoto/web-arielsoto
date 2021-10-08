import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../../pages/Home'
import { About } from '../../pages/About';
import { Audiovisual } from '../../pages/Audiovisual';
import { NotFound } from '../../pages/NotFound';

export const App = () => 
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About} />
            <Route exact path='/audiovisual' component={Audiovisual} />
            <Route path='/notfound' component={NotFound} />
        </Switch>
    </BrowserRouter>