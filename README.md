# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
#   M e d q u e u e 
 
 


myproject  

# MedQue

MedQue is a medical queue management system designed to streamline patient registration and management. Built with **React Native** for the frontend and **Golang (Fiber & GORM)** for the backend, MedQue aims to improve efficiency in medical facilities by digitizing patient registration and queue management.

## Features
- **User Registration**: Patients can register by providing their details.
- **Authentication System**: Secure login and authentication.
- **Queue Management**: Organizes and displays patients in a queue.
- **Database Integration**: Uses PostgreSQL for data storage.
- **API Communication**: Uses Axios for frontend-backend interaction.
- **CORS Handling**: Configured to allow cross-origin requests.

## Tech Stack
### Frontend
- React Native (Expo)
- Axios (for API calls)

### Backend
- Golang (Fiber framework)
- GORM (ORM for PostgreSQL)
- Gorilla Mux (Router)
- PostgreSQL (Database)

## Setup & Installation

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/medque.git
   cd medque/backend
   ```
2. Install dependencies:
   ```bash
   go mod tidy
   ```
3. Configure database connection in `db_conn.go`:
   ```go
   const conn_string = "user=postgres dbname=medque password=yourpassword host=localhost sslmode=disable"
   ```
4. Run the backend server:
   ```bash
   go run main.go
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd medque/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   expo start
   ```

## API Endpoints
### Authentication
- **`POST /register`** - Registers a new patient
- **`POST /login`** - Handles user login

### Queue Management
- **`GET /queue`** - Fetches the current patient queue
- **`POST /enqueue`** - Adds a patient to the queue
- **`DELETE /dequeue/:id`** - Removes a patient from the queue

## Troubleshooting
### Common Issues
1. **CORS errors**:
   - Ensure your backend has CORS middleware enabled.
2. **Database connection issues**:
   - Double-check your database credentials in `db_conn.go`.
3. **Expo not connecting to backend**:
   - Use your local IP instead of `localhost` when making API requests from a mobile device.

## Future Improvements
- Implement JWT authentication
- Add real-time queue updates with WebSockets
- Improve UI/UX with better animations
- Deploy backend to a cloud server

## License
This project is licensed under the MIT License.




