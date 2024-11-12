import { configureStore } from "@reduxjs/toolkit";
import servicoReducer from './slices/servico/reducer'

export const store = configureStore({
  reducer: {
    servico: servicoReducer
  },
});
