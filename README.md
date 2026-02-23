# My Doctor (طبيبي)

A comprehensive full-stack application for connecting patients with doctors, featuring a mobile client built with Expo and a backend server built with Express and PostgreSQL.

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in for both patients and doctors.
- **Doctor Discovery**: Search and filter doctors based on specialization and location.
- **Profile Management**: Users can update their personal information and preferences.
- **Map Integration**: View doctor locations on a map for easier navigation.
- **Interactive UI**: Modern and responsive design tailored for mobile and web.

## 🛠 Tech Stack

### Client (Mobile & Web)

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Navigation**: React Navigation
- **UI Components**: React Native Elements
- **Styling**: Vanilla CSS and StyleSheet
- **API Client**: Axios
- **Form Handling**: Formik & Yup
- **Map Library**: React Native Maps

### Server (Backend)

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Security**: JWT (JSON Web Tokens) & Bcryptjs
- **Validation**: Express Validator
- **Logging**: Morgan

## ⚙️ Project Structure

```text
my-doctor/
├── client/          # Mobile/Web application (Expo)
├── server/          # Backend API (Express)
├── .gitignore       # Root level gitignore
└── README.md        # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd my-doctor
```

### 2. Backend Setup

1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and configure your database and JWT secret:
   ```env
   PORT=PORT_NUMBER
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASS=DATABASE_PASSWORD
   DB_HOST=localhost
   JWT_SECRET=YOUR_SECRET_KEY
   ```
4. Start the server:
   ```bash
   npm start
   ```

### 3. Frontend Setup

1. Navigate to the client folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your Google Maps API Key:
   ```env
   GOOGLE_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
   ```
4. Start the Expo app:
   ```bash
   npm start
   ```
