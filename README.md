# React Authentication App

A modern React frontend application with complete authentication flow using PocketBase backend. Features secure login/register functionality, protected routes, and a responsive dashboard interface.

## 🚀 Live Demo

- **Login Credentials for Testing:**
  - Email: `test@devpgs.app`
  - Password: `Test@1234!`

## 📱 Screenshots

### Login Page
<img width="1934" height="1021" alt="loginss" src="https://github.com/user-attachments/assets/1c7f0479-bb9d-461e-8ea3-fe0a771769a8" />

### Registration Page  
<img width="1926" height="1025" alt="registerss" src="https://github.com/user-attachments/assets/7ac4f415-0441-4719-a092-f8d837d03e6b" />

### Dashboard Page
<img width="1934" height="1021" alt="dashboardss" src="https://github.com/user-attachments/assets/429da3b3-34d4-4127-95ed-8e05ee696908" />


## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-auth-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Register.jsx
│   │   ├── Register.css
│   │   └── TermsModal.jsx
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   └── Common/
│       └── PrivateRoute.jsx
├── assets/
│   └── [image files]
├── App.jsx
└── main.jsx
```

## 🔧 Technologies Used

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Backend:** PocketBase (https://pb.devpgs.app)
- **Styling:** Pure CSS with modern design patterns
- **Authentication:** JWT tokens stored in localStorage

## ✨ Features

### Authentication
- ✅ **User Registration** - Create new accounts with email/password
- ✅ **User Login** - Secure authentication with PocketBase
- ✅ **Protected Routes** - Dashboard accessible only to authenticated users
- ✅ **Session Persistence** - Users stay logged in across browser reloads
- ✅ **Logout Functionality** - Clear session and redirect to login

### UI/UX
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Modern Interface** - Clean, professional dashboard design
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Loading States** - User feedback during authentication
- ✅ **Terms & Conditions Modal** - Displayed after successful login

### Dashboard Features
- ✅ **Welcome Message** - Personalized greeting with user email
- ✅ **Sidebar Navigation** - Professional layout with navigation icons
- ✅ **Search Functionality** - Search bar in header
- ✅ **Action Buttons** - "New Client" and "New Work Order" buttons
- ✅ **Image Gallery** - Display of logo/brand images in grid layout
- ✅ **User Menu** - Dropdown menu with logout option

## 🔒 Security Features

- JWT token authentication
- Protected route implementation
- Secure password handling
- Input validation and sanitization
- HTTPS API communication with PocketBase

## 🎯 Key Implementation Details

### Route Protection
```javascript
// PrivateRoute component checks authentication
const PrivateRoute = () => {
  const token = localStorage.getItem("pb_token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};
```

### State Management
- Authentication state managed through localStorage
- User session persistence across page reloads
- Automatic redirect based on authentication status

### PocketBase Integration
- **API Endpoint:** `https://pb.devpgs.app`
- **Authentication:** Email/password login
- **User Registration:** Email, username, password fields
- **Error Handling:** Comprehensive error messages for failed requests

## 🐛 Known Issues & Assumptions

### Assumptions Made
1. **PocketBase Configuration:** Assumed the PocketBase instance accepts standard user registration with `email`, `username`, `password`, and `passwordConfirm` fields
2. **Image Assets:** Assumed images are stored in `src/assets/` directory
3. **Browser Support:** Targeted modern browsers with ES6+ support
4. **Network:** Assumed stable internet connection for PocketBase API calls

### Issues Encountered & Solutions
1. **CORS Issues:** PocketBase instance properly configured for cross-origin requests
2. **Route Protection:** Implemented PrivateRoute wrapper to secure dashboard access
3. **Form Validation:** Added client-side validation to prevent invalid API calls
4. **Responsive Design:** Ensured mobile compatibility with CSS media queries

### Potential Improvements
- Add email verification flow
- Implement password reset functionality
- Add user profile management
- Include unit tests
- Add TypeScript for better type safety
- Implement proper error boundaries

## 📝 Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
}
```

## 🔍 Testing the App

1. **Registration Flow:**
   - Go to registration page
   - Fill in all required fields
   - Accept terms and conditions
   - Should redirect to login on success

2. **Login Flow:**
   - Use test credentials: `test@devpgs.app` / `Test@1234!`
   - Should display terms modal
   - Should redirect to dashboard after closing modal

3. **Dashboard Access:**
   - Should be inaccessible without authentication
   - Should display user email and welcome message
   - Should have functional logout in user menu

4. **Route Protection:**
   - Try accessing `/dashboard` without login
   - Should redirect to login page
   - Should persist session across browser reloads

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify PocketBase API is accessible
3. Ensure all dependencies are installed
4. Check network connectivity


**Note:** This application was built as part of a React frontend challenge, demonstrating authentication flow implementation, route protection, and modern UI design principles.

***
