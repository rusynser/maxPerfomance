import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ListOfProjects from "./pages/ListOfProjects";
import ListOfTasks from "./pages/ListOfTasks";
import TaskView from "./pages/TaskView";
import CreateTask from "./pages/CreateTask";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login";
import Registration from "./pages/Registration"


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ListOfProjects />} />
      <Route path="/list-of-tasks" element={<ListOfTasks />} />
      <Route path="/task-view" element={<TaskView />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
export default App;
