// dao/projectDao.js
import { client, dbName } from '../db/db.js';

const projectsCollection = 'projects';

class ProjectDao {
  static async createProject(project) {
    const database = client.db(dbName);
    const collection = database.collection(projectsCollection);
    const result = await collection.insertOne(project);
    return result.insertedId;
  }

  static async getProjectByName(projectName) {
    const database = client.db(dbName);
    const collection = database.collection(projectsCollection);
    return collection.findOne({ projectName });
  }
  static async getProjectsByCustomer(customerId) {
    const database = client.db(dbName);
    const collection = database.collection(projectsCollection);
    return collection.find({ customerId }).toArray();
  }
  // Add other project-related DAO methods here
}

export default ProjectDao;
