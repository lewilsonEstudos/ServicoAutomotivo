import Table from "../components/table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllServicos } from "../store/slices/servico/actions";

function Initial() {
  const dispatch = useDispatch();

  //ciclo de vida do componente
  useEffect(() => {
    dispatch(getAllServicos());
  }, []);

  return <Table />;
}

export default Initial;
