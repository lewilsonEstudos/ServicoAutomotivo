import http from "../config/http";

const pathIdentify = "/servicos";

/**
 * Carrega todos os servicos do banco.
 */
async function getAll() {
  const servicos = await http.get(pathIdentify);
  return servicos.data;

}
/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do servico na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`${pathIdentify}/${id}`);
  } catch {
    throw new Error("## Não foi possível deletar");
  }
}
/**
 * Faz a remoção do arquivo na api.
 * @param {servico} servico - objeto do servico (...deve ser definido na interface)
 */

/**
 * Faz o cadastro na api.
 * @param {servico} servico - objeto do servico (...deve ser definido na interface)
 */
async function create(servico) {
  try {
    await http.post(pathIdentify, servico);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(servico) {
  // poderiam usar o axios
  try {
    await http.patch(`${pathIdentify}/${servico.id}`, servico);
  } catch {
    throw new Error("## Não foi possível atualizar");
  }
}
/**
 * Para obter os dados do servico
 * @param {id} id - number
 */
async function getById(id) {
  // poderiam usar o axios
  try {
    return await http.get(`${pathIdentify}/${id}`);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}

export default {
  getAll,
  remove,
  create,
  update,
  getById,
};
