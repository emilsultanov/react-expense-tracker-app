import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);

	const positiveAmounts = amounts
		.filter((amount) => amount > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const negativeAmounts = amounts
		.filter((amount) => amount < 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p id="money-plus" className="money plus">
					+${positiveAmounts}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p id="money-minus" className="money minus">
					-${Math.abs(negativeAmounts)}
				</p>
			</div>
		</div>
	);
};
