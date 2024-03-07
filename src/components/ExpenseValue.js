import { useSelector } from "react-redux";

const ExpenseValue = () => {
  const totalValue = useSelector(({ list: { data, searchTerm } }) =>
    data
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, item) => acc + item.cost, 0)
  );

  return <div className="items-value">Total: ${totalValue}</div>;
};

export default ExpenseValue;