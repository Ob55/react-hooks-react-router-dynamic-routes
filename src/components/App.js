import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesPage from "./components/MoviesPage";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "A River Runs Through It" },
    { id: 2, title: "Se7en" },
    { id: 3, title: "Inception" }
  ]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/movies">
            <MoviesPage movies={movies} />
          </Route>
          <Route exact path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
