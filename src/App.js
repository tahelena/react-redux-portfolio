import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSearch from "./components/ExpenseSearch";
import ExpenseValue from "./components/ExpenseValue";

const App = () => {
  return (
    <div className="container is-fluid">
      <ExpenseForm />
      <ExpenseSearch />
      <ExpenseList />

      <ExpenseValue />
    </div>
  );
};

export default App;
