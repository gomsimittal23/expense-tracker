import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";
  
export const addExpense = (data) => {
  // console.log(data);
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  // console.log(data, "Action");
  return {
    type: DELETE_EXPENSE,
    data,
  };
};