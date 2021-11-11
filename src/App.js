
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

import Container from './components/Container/Container';
import NotFoundView from './views/NotFoundView';


import Navigation from './components/Navigation/Navigation'
function App() {
  return (
    <>
      <Navigation></Navigation>

      <Switch>
        <Route path='/' exact >
          <HomePage />
        </Route>

        <Route path='/movies' exact>
          <MoviesPage />
        </Route>

        <Route path='/:movieId' exact
          render={props => {
            return <MovieDetailsPage {...props} />;
          }} />
        <Route path='/movies/:movieId' exact
          render={props => {
            return <MovieDetailsPage {...props} />;
          }} />


        <Route >
          <NotFoundView />
        </Route>
      </Switch>
    </>

  );
}

export default App;
