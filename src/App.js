import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Task1 from "./components/task-1/Task1";
import Task2 from "./components/task-2/Task2";
import Task3 from "./components/task-3/Task3";
import Task4 from "./components/task-4/Task4";
import Task5 from "./components/task-5/Task5";
import Task6 from "./components/task-6/Task6";
import Task7 from "./components/task-7/Task7";
import Task8 from "./components/task-8/Task8";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
          <Route path="task5" element={<Task5 />} />
          <Route path="task6" element={<Task6 />} />
          <Route path="task7" element={<Task7 />} />
          <Route path="task8" element={<Task8 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
