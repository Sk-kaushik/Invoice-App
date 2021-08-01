export const saveInvoice = (data) => {
  return {
    type: "saveInvoice",
    data: data,
  };
};

export const setPaid = (id) => {
  console.log(id);
  return {
    type: "setPaid",
    data: id,
  };
};

export const deleteInvoice = (id) => {
  return {
    type: "deleteInvoice",
    data: id,
  };
};
