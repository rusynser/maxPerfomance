import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ListOfTasks.css'; // Import your CSS styles as needed

const ListOfTasks = () => {
  const { projectId } = useParams(); // Get projectId from URL
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/tasks/${projectId}`);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        // Handle error, e.g., show an error message to the user
      }
      setIsLoading(false);
    };

    fetchTasks();
  }, [projectId]);

  if (isLoading) {
    return <div>Loading tasks...</div>; // Or any loading spinner
  }

  return (
    <div>
      <h2>Tasks for Project {projectId}</h2>
      <ul>



    {tasks.map(task => (
      <li key={task._id}>{task.taskName}</li>
    ))}
  </ul>
  <Link to={`/projects/${projectId}/create-task`}>Create New Task</Link>
</div>

);
};

export default ListOfTasks;
