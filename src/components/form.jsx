import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editForm, saveForm } from "../store/slices/servico/actions";

function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const servico = useSelector((state) => state.servico.detalhe);

  const changeField = (field, value) => dispatch(editForm(field, value));

  const submitForm = () => dispatch(saveForm(isEdit)).then(() => navigate("/"));

  return (
    <div className="cadastro mt-10">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {isEdit ? "Editar Serviço" : "Cadastrar Serviço"}
        </h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="veiculo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Veículo
            </label>
            <input
              type="text"
              id="veiculo"
              onChange={(e) => changeField("veiculo", e.target.value)}
              placeholder="Informe o veículo."
              value={servico?.veiculo || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="servico"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Serviço
            </label>
            <input
              type="text"
              id="servico"
              onChange={(e) => changeField("servico", e.target.value)}
              placeholder="Serviço prestado."
              value={servico?.servico || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="telefone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              onChange={(e) => changeField("telefone", e.target.value)}
              placeholder="(xx) 9xxxx-xxxx"
              value={servico?.telefone || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mecanico"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mecânico
            </label>
            <input
              type="text"
              id="mecanico"
              onChange={(e) => changeField("mecanico", e.target.value)}
              placeholder="Mecânico a realizar o serviço"
              value={servico?.mecanico || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="valor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Valor
            </label>
            <input
              type="number"
              id="valor"
              onChange={(e) => changeField("valor", e.target.value)}
              placeholder="Valor do serviço"
              value={servico?.valor || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={submitForm}
          className="w-full sm:w-auto px-5 py-2.5 mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-150"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Form;
