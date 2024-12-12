# Task Management System - Backend

This is the Node.js and Express-based backend for the Task Management System. It provides API endpoints for managing tasks, including creating, updating, retrieving, and deleting tasks.

## Features
- **Task Management**:
  - Retrieve all tasks.
  - Add new tasks.
  - Mark tasks as completed.
  - Delete tasks.
- **Data Storage**: Persistent task storage using MongoDB.

## API Endpoints
| Method | Endpoint          | Description                        |
|--------|-------------------|------------------------------------|
| GET    | /tasks            | Retrieve all tasks.               |
| POST   | /tasks            | Add a new task.                   |
| PUT    | /tasks/:id        | Update a task (mark as complete). |
| DELETE | /tasks/:id        | Delete a task.                    |

## Task Schema
- **id**: Unique identifier.
- **title**: Task title (string).
- **description**: Task description (optional string).
- **completed**: Task status (boolean, default: false).
- **created_at**: Timestamp of task creation.

## Built With
- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for handling API routes.
- **MongoDB**: Database for storing tasks.
- **Mongoose**: ODM for MongoDB.

## Setup Instructions

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or remotely.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <backend-repo-url>
   cd <backend-repo-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
 ```
PORT=5001
DB_URL=mongodb+srv://rayanalhassan2000:cY9hq6PMC5tm70Km@cluster0.wz8dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will run on `http://localhost:5001`.

## Folder Structure
- **routes**
  - **task.js**: Defines API endpoints for task management.
- **models**
  - **Task.js**: Task schema for MongoDB.
- **server.js**: Main entry point for the application.

## Usage
1. **Start the server**: Use `npm start`.
2. **Test API Endpoints**: Use tools like Postman or integrate with the frontend.

## Future Enhancements
- Add sorting/filtering options for tasks.
- Implement advanced validation for task inputs.

## License
This project is licensed under the MIT License.

## Authors
Rayan Al Hassan