import { Link } from "react-router-dom";

function ErrorServico() {
  return (
    <div className="error">
      <h2>Servico não encontrado.</h2>
      <h5>Não foi possível encontrar o servico buscado</h5>
      <br />
      <br />
      <Link to="/">Volte para pagina Inicial</Link>
    </div>
  );
}

export default ErrorServico;
