import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = [
  {
    id: 1,
    recieverName: "Rohan",
    recieverAddress: "India",
    senderName: "Sk",
    senderAddress: "Ckd",
    labourCharges: "200",
    expenses: "100",
    lastDate: "2021/06/30",
    date_created: "2021/06/20",
    workHour: "4",
    materials: ["material1", "material2", "material3", "material4"],
    paymentMode: "Cash",
    paid: true,
    paidOn: "2021/06/28",
  },
  {
    id: 2,
    recieverName: "John",
    recieverAddress: "India",
    senderName: "Sk",
    senderAddress: "Ckd",
    labourCharges: "200",
    expenses: "100",
    lastDate: "2021/06/19",
    date_created: "2021/06/18",
    workHour: "4",
    materials: ["material1", "material2", "material3", "material4"],
    paymentMode: "Cash",
    paid: false,
    paidOn: "",
  },
  {
    id: 3,
    recieverName: "Duke",
    recieverAddress: "India",
    senderName: "Sk",
    senderAddress: "Ckd",
    labourCharges: "200",
    expenses: "100",
    lastDate: "2021/06/19",
    date_created: "2021/06/10",
    workHour: "4",
    materials: ["material1", "material2", "material3", "material4"],
    paymentMode: "Cash",
    paid: true,
    paidOn: "2021/06/20",
  },
];

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
