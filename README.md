
# Truck Ordering Application

This is a **React Native** application for managing truck orders. It provides an intuitive interface for users to register, log in, and create truck orders. Users can also monitor their order statuses and view detailed order information.

The app is backed by a **Laravel API**, available at [Truck Ordering System Backend](https://github.com/MOo207/truck-ordering-system-backend.git).

---

## Features

### User Features:
- **Authentication**: Users can register and log in with persistent session management.
- **Order Creation**: Users can create truck orders by specifying details like pickup and delivery locations, truck size, and weight.
- **Order History**: Users can view their past and current orders.
- **Order Details**: Users can view detailed information about individual orders.
- **Logout**: Users can securely log out.

### Admin Features (Backend):
- **Order Management**: Admins can view, update, and manage orders.
- **Notifications**: Admins receive notifications for new orders.

---

## File Structure

### Project Structure:
```
src/
├── api/
│   ├── apiClient.js         # Axios client for API communication
│   ├── auth.js              # Authentication API (login, register)
│   └── orders.js            # Order-related API (create, fetch orders)
├── components/
│   ├── Button.jsx           # Reusable Button component
│   ├── Input.jsx            # Reusable Input component
│   └── Loader.jsx           # Loader for async operations
├── context/
│   └── AuthContext.js       # Manages global authentication state
├── navigation/
│   └── AppNavigator.jsx     # Sets up navigation between screens
├── screens/
│   ├── LoginScreen.jsx      # Screen for user login
│   ├── RegisterScreen.jsx   # Screen for user registration
│   ├── DashboardScreen.jsx  # Screen showing user orders
│   ├── TruckRequestScreen.jsx # Screen for creating truck orders
│   └── OrderDetailsScreen.jsx # Screen to view order details
└── App.jsx                  # Root component wrapping context and navigation
```

---

## Backend Correspondence

The app interacts with the Laravel backend provided at: [Truck Ordering System Backend](https://github.com/MOo207/truck-ordering-system-backend.git).

### Backend Features:
1. **Authentication**:
   - Register and login endpoints with token-based authentication (Sanctum).
   - User credentials and tokens are securely stored.
2. **Orders Management**:
   - Endpoints to create, view, and update truck orders.
   - Includes fields like pickup location, delivery location, truck size, and weight.

---

## Installation

### 1. **Frontend (React Native)**

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

### 2. **Backend (Laravel)**

1. Clone the backend repository:
   ```bash
   git clone https://github.com/MOo207/truck-ordering-system-backend.git
   cd truck-ordering-system-backend
   ```

2. Follow the instructions in the backend's `README.md` to set up Laravel.

---

## How It Works

### Authentication Flow:
1. **Login**:
   - Users log in with email and password.
   - The app stores the authentication token in `AsyncStorage`.
   - Token is used for all subsequent API requests.
2. **Register**:
   - New users can register via the register screen.
   - Successful registration redirects users to the login screen.

### Order Flow:
1. **Order Creation**:
   - Users create orders by filling in details like pickup location, delivery location, and truck size.
2. **Dashboard**:
   - Users view their order history and monitor statuses.
3. **Order Details**:
   - Users can view detailed information about each order.

---

## Future Enhancements

1. **Admin Panel**:
   - Add a React Native or web-based admin interface for managing orders.
2. **Push Notifications**:
   - Integrate Firebase Cloud Messaging (FCM) for real-time notifications.
3. **Improved UX**:
   - Add animations and transitions for a smoother experience.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
