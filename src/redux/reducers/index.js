import moment from "moment";

const rootReducer = (state, action) => {
  switch (action.type) {
    // SAVE INVOICE
    case "saveInvoice":
      return [...state, action.data];

    // TOGGLE PAID AND NOT PAID
    case "setPaid":
      return state.map((item) => {
        if (item.id === action.data) {
          item.paid = !item.paid;
          if (item.paid) {
            item.paidOn = moment().format("YYYY/MM/DD");
          } else {
            item.paidOn = "";
          }
        }
        return item;
      });

    // DELETE INVOICE
    case "deleteInvoice":
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
};

export default rootReducer;
