import "./404.scss";
import { Link } from "react-router-dom";

function ErrorComponent() {
  return (
    <main className="error__container">
      <span className="error__404">404</span>
      <p className="error__oups">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__home">
        Retournez sur la page d’accueil
      </Link>
    </main>
  );
}

export default ErrorComponent;
