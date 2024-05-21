import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      console.log("updateInvoice reducer called with:", action.payload);
      console.log(action.payload.id);
      
      const idToUpdate = Number(action.payload.id);
      const index = state.findIndex(
        (invoice) => invoice.id === idToUpdate
      );
      console.log(index);
      
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload.updatedInvoice,
        };
        console.log("Updated invoice:", state[index]);
      }
    },
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
