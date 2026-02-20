# FixyLand

A luxury hotel website, featuring About Us and Booking pages with dynamic data fetching and appointment scheduling.

## Project Overview

The project consists of two main parts:
1.  **Frontend (React.js)**: A responsive client application showing hotel information, staff details, and booking forms.
2.  **Backend (Express.js)**: A RESTful API serving staff data, hotel listings, and handling appointment submissions.

### Key Features
-   **Pages**:
    -   **About Us**: Displays hotel information and a dynamic list of expert staff members fetched from the backend.
    -   **Booking**: Showcases luxury rooms (fetched from backend) and allows users to book appointments.
    -   **404 Not Found**: A custom error page for invalid routes.
-   **Dynamic Data**: Staff and Hotel data are seeded into MongoDB and served via API.
-   **Appointment Booking**: Users can submit booking requests which are validated and stored in the database.

## Technology Stack

-   **Frontend**: React.js, Tailwind CSS, React Router DOM, React Hook Form, Axios.
-   **Backend**: Node.js, Express.js, MongoDB (Mongoose), CORS, Helmet.

## Prerequisites

-   Node.js (v14 or higher)
-   MongoDB (Running locally or Atlas URI)

## Setup Instructions

### 1. Backend Setup

1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment Variables:
    -   Create a `.env` file in the `server` root (or use the existing one if provided).
    -   Ensure `MONGO_URI` is set (e.g., `mongodb://localhost:27017/fixyland`).
    -   Ensure `PORT` is set (default: 5000).
4.  Seed the Database:
    ```bash
    npm run seed
    ```
    *This populates the database with initial Staff and Hotel data.*
5.  Start the Server:
    ```bash
    npm run dev
    ```
    *The server should run on http://localhost:5000*

### 2. Frontend Setup

1.  Navigate to the client directory:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Client:
    ```bash
    npm run dev
    ```
    *The client should run on http://localhost:5173 (or similar)*

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/staff` | Fetch list of staff members (supports pagination, filtering). |
| **GET** | `/api/hotels` | Fetch list of hotels/rooms (supports pagination, sort, filter). |
| **POST** | `/api/appointments` | Create a new appointment. Requires JSON body with `firstName`, `lastName`, `email`, `phone`, `roomId`, `checkIn`, `checkOut`. |

## Demo Video
https://www.loom.com/share/bbfd1aa11eab4e1e8856b09cfab0b3b3
https://www.loom.com/share/b830b5299a42408fbddb1bd3dff852b0
