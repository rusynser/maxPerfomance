import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    taskName: '',
    solver: '',
    complexity: 0,
    description: '',
    state: 0,
    priority: 0,
    comment: '',
    time: 0
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/tasks/create-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...taskData, projectId })
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      await response.json();
      navigate(`/projects/${projectId}/tasks`);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="create-task-container">
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="taskName"
          value={taskData.taskName}
          onChange={handleChange}
          placeholder="Task Name"
          required
        />
        <input
          name="solver"
          value={taskData.solver}
          onChange={handleChange}
          placeholder="Solver"
          required
        />
        <input
          type="number"
          name="complexity"
          value={taskData.complexity}
          onChange={handleChange}
          placeholder="Complexity"
          required
        />
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="state"
          value={taskData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          type="number"
          name="priority"
          value={taskData.priority}
          onChange={handleChange}
          placeholder="Priority"
          required
        />
        <textarea
          name="comment"
          value={taskData.comment}
          onChange={handleChange}
          placeholder="Comment"
          required
        />
        <input
          type="number"
          name="time"
          value={taskData.time}
          onChange={handleChange}
          placeholder="Time"
          required
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
