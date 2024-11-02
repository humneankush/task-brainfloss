import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { RootState } from "./store.ts";
import { setUser } from "./store.ts/userSlice";
import SignIn from "./components/SignIn/SignIn";
import Admin from "./components/Admin/Admin";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import Invoices from "./components/Invoices/Invoices";
import User from "./components/User/User";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import UserManagement from "./components/UserManagement/UserManagement";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;

    try {
      const userData = await fetchUserData(token);
      dispatch(setUser(userData));
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  const fetchUserData = async (token: string) => {
    const response = await axios.get(
      "https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };
  
  return (
    <GoogleOAuthProvider clientId="google-client-id">
      <Router>
        {isLoggedIn && <Header />}
        <div className="container mt-5">
          {!isLoggedIn ? (
            <SignIn onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Routes>
              <Route path="/user" element={<UserDashboard />}>
                <Route path="invoices" element={<Invoices />} />
                <Route path="users" element={<User />} />
                <Route index element={<User />} />
              </Route>
              <Route path="/admin" element={<AdminDashboard />}>
                <Route path="admin-dashboard" element={<Admin />} />
                <Route path="user-management" element={<UserManagement />} />
                <Route index element={<Admin />} />
              </Route>
            </Routes>
          )}
          {user.role && (
            <div>
              {user.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <UserDashboard />
              )}
            </div>
          )}
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
