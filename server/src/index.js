// app.js
import express from 'express';
import path from 'path';
import { dbconnect, dbclose } from './db/db.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { fileURLToPath } from 'url';  // Added for converting import.meta.url to file path
const app = express();
const port = 3000;


const __filename = fileURLToPath(import.meta.url);  // Added to get the current file path
const __dirname = path.dirname(__filename); 

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
// Connect to the database
dbconnect()
  .then(() => {
    // Start your Express app after connecting to the database
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Use the routes
    app.use('/users', userRoutes);
    app.use('/projects', projectRoutes);
        app.use('/tasks', taskRoutes);

    // Listen for the process termination signal
    process.on('SIGINT', async () => {
      console.log('Received SIGINT. Closing the server and database connection...');

      // Close the Express server
      server.close(async () => {
        // Close the MongoDB client
        await dbclose();

        console.log('Server and database connection closed. Exiting process.');
        process.exit(0);
      });
    });
  })
  .catch((error) => {
    console.error('Error starting the app:', error);
  });
