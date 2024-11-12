import ServicoApi from "../../../services/servico-api";
import { setServicos, setDetalhes, setLoading } from "./reducer";
import Swal from "sweetalert2";

// Função genérica para exibir alertas de erro
const showAlert = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};

// Ação para obter todos os serviços
export const getAllServicos = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await ServicoApi.getAll();
    dispatch(setServicos(result));
  } catch (error) {
    showAlert("Erro", "Não foi possível carregar os serviços.", "error");
    console.error("Erro ao obter serviços:", error);
  }
  dispatch(setLoading(false));
};

// Ação para obter detalhes de um serviço específico
export const getDetalhesServico = (id) => async (dispatch) => {
  try {
    const result = await ServicoApi.getById(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    showAlert("Erro", "Não foi possível carregar os detalhes do serviço.", "error");
    console.error("Erro ao obter detalhes:", error);
  }
};

// Ação para editar um campo específico no formulário de serviço
export const editForm = (field, value) => (dispatch, getState) => {
  const servico = getState().servico.detalhe;
  dispatch(
    setDetalhes({
      ...servico,
      [field]: value,
    })
  );
};

// Ação para salvar ou editar um serviço
export const saveForm = (isEdit = false) => async (dispatch, getState) => {
  const servico = getState().servico.detalhe;
  const action = isEdit ? ServicoApi.update : ServicoApi.create;

  try {
    await action(servico);
    dispatch(getAllServicos());
    showAlert("Sucesso!", `Serviço ${isEdit ? "editado" : "cadastrado"} com sucesso.`, "success");
  } catch (error) {
    showAlert("Erro", `Não foi possível ${isEdit ? "editar" : "cadastrar"} o serviço.`, "error");
    console.error("Erro ao salvar o serviço:", error);
  }
};

// Ação para deletar um serviço com confirmação
export const deleteServico = (servico) => async (dispatch) => {
  const result = await Swal.fire({
    title: `Deseja excluir o serviço ${servico.veiculo}?`,
    text: "Após a exclusão, essa ação não poderá ser desfeita.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Confirmar Exclusão",
    confirmButtonColor: "#e3342f",
    cancelButtonText: "Cancelar",
  });

  if (result.isConfirmed) {
    try {
      await ServicoApi.remove(servico.id);
      dispatch(getAllServicos());
      showAlert("Sucesso!", `Serviço ${servico.veiculo} excluído com sucesso.`, "success");
    } catch (error) {
      showAlert("Erro", "Não foi possível excluir o serviço.", "error");
      console.error("Erro ao excluir o serviço:", error);
    }
  }
};
