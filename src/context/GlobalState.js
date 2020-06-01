import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// Initial state for begin::
const initialState = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};

// Context::
export const GlobalContext = createContext(initialState);

// Provider component::
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions::
	// 1 Delete transaction::
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: { id },
		});
	}

	// 2 Add transaction::
	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: { transaction },
		});
	}
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
