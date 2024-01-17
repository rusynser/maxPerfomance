// dao/userDao.js
import { client, dbName } from '../db/db.js';
import bcrypt from 'bcrypt';

const usersCollection = 'users';
const saltRounds = 10;

class UserDao {
  static async createUser(user) {
    const database = client.db(dbName);
    const collection = database.collection(usersCollection);

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    const result = await collection.insertOne(user);
    return result.insertedId;
  }

  static async getUserByEmailOrUsername(email, username) {
    const database = client.db(dbName);
    const collection = database.collection(usersCollection);
    return collection.findOne({ $or: [{ email }, { username }] });
  }

  static async verifyPassword(userId, candidatePassword) {
    const database = client.db(dbName);
    const collection = database.collection(usersCollection);
    const user = await collection.findOne({ _id: userId });

    if (!user) {
      return false; // User not found
    }

    return bcrypt.compare(candidatePassword, user.password);
  }

  // Add other user-related DAO methods here
}

export default UserDao;
