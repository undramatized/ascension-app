import React from 'react'
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import Home from './components/Home';
import Scenes from './components/Scenes';
import Movie from './components/Movie';
import Credits from './components/Credits';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

const transitionStyles = {
  atEnter:{ opacity: 0 },
  atLeave:{ opacity: 0 },
  atActive:{ opacity: 1 }
}

const TransitionRoute = (props) => {
  return (
    <AnimatedRoute exact path={props.path}
      component={props.component}
      atEnter={transitionStyles.atEnter}
      atLeave={transitionStyles.atLeave}
      atActive={transitionStyles.atActive}
      mapStyles = {(styles) => ({
        opacity: styles.opacity
      })}
    />
  )
}

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/scenes">Scenes</Link>
      <TransitionRoute path="/" component={Home} />
      <TransitionRoute path="/scenes" component={Scenes} />
      <TransitionRoute path="/movie" component={Movie} />
      <TransitionRoute path="/credits" component={Credits} />
    </div>
  </Router>
)

export default AppRouter
