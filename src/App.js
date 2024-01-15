import { BrowserRouter as Router } from "react-router-dom";
// import QuestionView from "./QuestionView";
// import BottomNav from "./BottomNav";
import RNG from "./RNG";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <QuestionView/>
        <BottomNav /> */}
        <RNG />
      </div>
    </Router>
  );
}

export default App;
