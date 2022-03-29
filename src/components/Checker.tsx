import CheckLists from "./CheckLists";
import Toolbar from "./Toolbar";

function Checker() {
  return (
    <main className="check-main">
      <Toolbar />
      <CheckLists />
    </main>
  );
}

export default Checker;
