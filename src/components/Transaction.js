import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ id, text, amount }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	return (
		<li className={amount > 0 ? "plus" : "minus"}>
			{text}
			<span>
				{amount > 0 ? "+" : "-"}${Math.abs(amount)}
			</span>
			<button className="delete-btn" onClick={() => deleteTransaction(id)}>
				x
			</button>
		</li>
	);
};
