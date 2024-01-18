import { client, dbName } from '../db/db.js';
import { ObjectId } from 'mongodb';

const tasksCollection = 'tasks';
const projectsCollection = 'projects'; 
// Assuming this is your projects collection
class TaskDao {
  // Method to create a task and add it to a project
  static async createTaskAndAddToProject(projectId, task) {
    const database = client.db(dbName);
    const tasksCol = database.collection(tasksCollection);
    const projectsCol = database.collection(projectsCollection);

    // Add projectId to the task
    task.projectId = new ObjectId(projectId);

    // Create the task
    const taskResult = await tasksCol.insertOne(task);
    const taskId = taskResult.insertedId;

    // Add the task ID to the project's tasks array
    await projectsCol.updateOne(
      { _id: new ObjectId(projectId) },
      { $push: { tasks: taskId } }
    );

    return taskId;
  }

  // Method to get tasks by project ID
  static async getTasksByProject(projectId) {
    const database = client.db(dbName);
    const collection = database.collection(tasksCollection);
    // Query using projectId as a string
    return collection.find({ projectId: projectId }).toArray();
}


  // Method to assign a responsible person to a task
  static async assignResponsible(taskId, freelancerId) {
    const database = client.db(dbName);
    const collection = database.collection(tasksCollection);
    return collection.updateOne(
      { _id: new ObjectId(taskId) },
      { $set: { responsibleFreelancerId: freelancerId } }
    );
  }
  static async createTask(taskData) {
  
      const database = client.db(dbName);
      const collection = database.collection(tasksCollection);
      const result=await collection.insertOne(taskData)
      return result.insertedId;
  }
      
  // Add other task-related DAO methods as needed
}

export default TaskDao;
