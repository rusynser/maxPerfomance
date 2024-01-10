// dao/taskDao.js
import { client, dbName } from '../db/db.js';

const tasksCollection = 'tasks';

class TaskDao {
  static async createTaskInProject(projectId, task) {
    const database = client.db(dbName);
    const collection = database.collection(tasksCollection);
    task.projectId = projectId; // Associate the task with the project
    const result = await collection.insertOne(task);
    return result.insertedId;
  }
  static async createTask(projectId, task) {
    const database = client.db(dbName);
    const collection = database.collection(tasksCollection);
    task.projectId = projectId;
    const result = await collection.insertOne(task);
    return result.insertedId;
  }

  static async assignResponsible(taskId, freelancerId) {
    const database = client.db(dbName);
    const collection = database.collection(tasksCollection);
    return collection.updateOne({ _id: taskId }, { $set: { responsibleFreelancerId: freelancerId } });
  }
  // Add other task-related DAO methods here
}

export default TaskDao;
