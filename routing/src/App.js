import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink

} from "react-router-dom";
import Civilizacion from "./components/Civilizacion";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
        </div>
        <hr/>
        <Switch>
          <Route path="/nosotros/:id" exact>
            <Civilizacion />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/contacto">
           <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
