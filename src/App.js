
import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./components/HomePage/HomePage.js'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage.js'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.js'));
const NotFoundView = lazy(() => import('./views/NotFoundView.js'));


function App() {
  return (
    <>
      <Navigation></Navigation>
      <Suspense fallback={<h2>Loader</h2>}>
        <Switch>
          <Route path='/movies' exact> <MoviesPage />  </Route>
          <Route path='/movies/:movieId'
            render={props => {
              return <MovieDetailsPage {...props} />;
            }} />
          <Route path='/:movieId'
            render={props => {
              return <MovieDetailsPage {...props} />;
            }} />
          <Route path='/' exact ><HomePage /></Route>
          <Route > <NotFoundView /></Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
