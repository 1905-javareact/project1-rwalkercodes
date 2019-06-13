import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './include/bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/signin.component';
import  NavComponent  from './components/nav.component'
import { store } from './da-store';
import { Provider } from 'react-redux';
import { HomeComponent } from './components/home.component';
import UsersComponent from './components/get.all.users.component';
import UserByIdComponent from './components/get.user.by.id.component';
import UpdateUserComponent from './components/update.users.component';
import ReimByIdComponent from './components/get.reim.by.user.id.component';
import getAllReimsComponent from './components/get.all.reims.component';
import submitReimbursement from './components/submit.reimbursement';
import updateReimComponent from './components/update.reim.component';

const App: React.FC = () => {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div className="App">
      <NavComponent/>
      <Switch>
        <Route path='/' exact component={LoginComponent}/>
        <Route path='/home' component={HomeComponent} />
        <Route exact path='/users' component={UsersComponent} />
        <Route exact path='/users/:id' component={UserByIdComponent} />
        <Route exact path='/users/edit/:id' component={UpdateUserComponent} />
        <Route exact path='/reimbursements/author/userId/:id' component={ReimByIdComponent}/>
        <Route exact path='/reimbursements' component={getAllReimsComponent}/>
        <Route exact path='/reimbursements/update/:id' component={updateReimComponent}/>
        <Route exact path='/reimbursements/submit' component={submitReimbursement}/>
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;