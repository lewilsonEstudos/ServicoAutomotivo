import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servicos: [],
  detalhe: {},
  loading: false,
};

export const counterSlice = createSlice({
  name: "servico",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setServicos: (state, action) => {
      state.servicos = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setServicos, setDetalhes, setLoading } = counterSlice.actions;

export default counterSlice.reducer;
