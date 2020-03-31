import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Header} from './components/Header/Header';
import {HeaderSlider} from './components/HeaderSlider/HeaderSlider';
import {Schedule} from './pages/Schedule/Schedule';
import Homepage from './pages/Homepage/Homepage';
import Shows from './pages/Shows/Shows';
import Summary from './pages/Summary/Summary';
import Episodes from './pages/Episodes/Episodes';
import {Footer} from './components/Footer/Footer';

class App extends Component {
  state = {
    links: {
      homepage: '/',
      shows: '/shows',
      schedule: '/schedule',
    }
  }

  goToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header links={this.state.links} />
          <HeaderSlider />
          <main>
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path={this.state.links.shows} exact render={() => <Shows />} />
              <Route path={this.state.links.schedule} exact render={() => <Schedule />} />
              <Route path={`${this.state.links.shows}/:id`} exact render={() => <Summary />} />
              <Route path={`${this.state.links.shows}/:id/episodes`} exact component={Episodes} />
            </Switch>
          </main>
          <Footer />
          <img className='arrow-up' 
              src='./images/arrow.png' 
              alt='arrow-up'
              title='Go to top' 
             onClick={this.goToTop} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
