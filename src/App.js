import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App({ data }) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav paths={data.links} />
        <section className="app-content">
          <Switch>
            <Route path='/profile' render={() => <Profile posts={data.posts} />} />
            <Route path='/dialogs' render={() => <Dialogs users={data.users} messages={data.messages} />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/friends' render={() => <Friends friends={data.friends} />} />
            <Redirect from="/" to="/profile" />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;




