import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/home/Home.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/contact/Contact.js";
import Profile from "./components/profile/Profile.js";
import About from "./components/about/About.js";
import Settings from "./components/profile/settings/Settings.js";
import HomePage from "./components/home/testFol/TestFile.js";
import App from "./App.js";
import { webItemsLoaderData } from "./components/home/data/Data.js";
import UserComments from "./components/userComments/UserComments.js";
import { Layout } from "antd";
import Dashboard from "./pages/users/dashboard/Dashboard.js";
import AdminLayout from "./layouts/admin/AdminLayout.js";
import Users from "./pages/users/users/Users.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="user-comments" element={<UserComments />} />
        <Route path="about-us" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/settings" element={<Settings />} />
      </Route>
      {/* <Route path="" element={<HomePage />} loader={webItemsLoaderData}/> */}
      <Route exact path="admin" component={Dashboard} element={<AdminLayout />}>
        <Route path="users" element={<Users />} />
        {/* <Route path="movies" element={<Movies />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="about-us" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/settings" element={<Settings />} /> */}
      </Route>
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
