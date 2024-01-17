// app.js
import express from 'express';
import path from 'path';
import { connectToDatabase, closeDatabaseConnection } from './db/db.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { fileURLToPath } from 'url';
import cors from 'cors';

 
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
//app.use('/', express.static(path.join(__dirname, 'public')));
app.use(cors());

// Connect to the database
connectToDatabase()
  .then(() => {
    // Use the routes
    app.use('/users', userRoutes);
    app.use('/projects', projectRoutes);
    app.use('/tasks', taskRoutes);  // Make sure this line is included

    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    process.on('SIGINT', async () => {
      console.log('Received SIGINT. Closing the server and database connection...');

      server.close(async () => {
        await closeDatabaseConnection();
        console.log('Server and database connection closed. Exiting process.');
        process.exit(0);
      });
    });
  })
  .catch((error) => {
    console.error('Error starting the app:', error);
  });
