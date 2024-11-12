import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorServico from "../components/error";
import { getDetalhesServico } from "../store/slices/servico/actions";
import { useDispatch, useSelector } from "react-redux";

function Detalhes() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const servico = useSelector((state) => state.servico.detalhe);

  useEffect(() => {
    dispatch(getDetalhesServico(id));
  }, [dispatch, id]);

  if (!servico) {
    return <ErrorServico />;
  } else {
    return <Form isEdit />;
  }
}

export default Detalhes;
