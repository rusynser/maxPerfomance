import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ListOfProjects from "./pages/ListOfProjects";
import ListOfTasks from "./pages/ListOfTasks";
import TaskView from "./pages/TaskView";
import CreateTask from "./pages/CreateTask";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Set document title and meta description based on the current route
    const routeTitles = {
      '/': 'Home',
      '/login': 'Login',
      '/registration': 'Registration',
      // Add more routes and titles as needed
    };
    const title = routeTitles[pathname] || 'Default Title';
    document.title = title;

    // You can also set meta descriptions similarly
    // const metaDescription = routeDescriptions[pathname] || 'Default Description';
    // Update the metaDescriptionTag content here
  }, [pathname]);

  return (
    
      <Routes>
        <Route path="/" element={<ListOfProjects />} />
        <Route path="/projects/:projectId/tasks" element={<ListOfTasks />} />
        <Route path="/projects/:projectId/tasks/view/:taskId" element={<TaskView />} />
        <Route path="/projects/:projectId/create-task" element={<CreateTask />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

  );
}

export default App;
