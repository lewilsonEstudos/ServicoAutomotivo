import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-servicos";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteServico } from "../store/slices/servico/actions";
import { useState } from "react";

function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { servicos, loading } = useSelector((state) => state.servico);

  // Estado para a paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const removeServico = (servico) => dispatch(deleteServico(servico));

  const indexDeInicio = (paginaAtual - 1) * itensPorPagina;
  const indexDeFim = indexDeInicio + itensPorPagina;

  const servicosPaginaAtual = servicos.slice(indexDeInicio, indexDeFim);

  // Calcular o total de páginas
  const totalPaginas = Math.ceil(servicos.length / itensPorPagina);

  // Funções para navegação
  const irParaPaginaAnterior = () => {
    if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
  };

  const irParaProximaPagina = () => {
    if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
  };

  return (
    <div className="table-container">
      <table className="min-w-full bg-white dark:bg-gray-900">
        <thead className="table-header">
          <tr>
            {columns.servicos.map((column, i) => (
              <th key={i} className="table-cell">{column}</th>
            ))}
            <th className="table-cell">Editar</th>
            <th className="table-cell">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {servicosPaginaAtual.map((servico) => (
            <tr key={servico.id} className="table-row bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150">
              <td className="table-cell">{servico.id}</td>
              <td className="table-cell">{servico.veiculo}</td>
              <td className="table-cell">{servico.servico}</td>
              <td className="table-cell">{servico.telefone}</td>
              <td className="table-cell">{servico.mecanico}</td>
              <td className="table-cell">{servico.valor}</td>
              <td className="table-cell">
                <button className="edit-button" onClick={() => navigate(`/detalhes/${servico.id}`)}>
                  <FaEdit />
                </button>
              </td>
              <td className="table-cell">
                <button className="delete-button" onClick={() => removeServico(servico)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

<br/>

    <div class="inline-center rounded-md shadow-sm" role="group">
      <button type="button"  onClick={irParaPaginaAnterior}
              disabled={paginaAtual === 1}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        Anterior
      </button>
      <span>Página {paginaAtual} de {totalPaginas}</span>
      <button type="button" onClick={irParaProximaPagina}
              disabled={paginaAtual === totalPaginas}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        Próxima
      </button>
    </div>

   </div>
  );
}

export default Table;
