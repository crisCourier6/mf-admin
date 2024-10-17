import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import LoginView from "./views/accounts/LoginView";
import HomeView from "./views/HomeView";
import UserListView from "./views/accounts/UserListView";
import UserProfileView from "./views/accounts/UserProfileView";
import FoodListLocalView from "./views/food-profile/FoodListLocalView";
import FoodEditListView from "./views/food-edit/FoodEditListView";
import RoleListView from "./views/accounts/RoleListView";
import ArticleListView from "./views/expert-profile/ArticleListView";
import NotificationManagerView from "./views/notification/NotificationManagerView";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<LoginView />}/>
              <Route path="login">
                <Route index={true} element={<LoginView />}/>
              </Route>
              <Route path="home" element={<HomeView/>}></Route>
              <Route path="users" element={<UserListView/>}></Route>
              <Route path="food" element={<FoodListLocalView/>}></Route>
              <Route path="food-edit" element={<FoodEditListView/>}></Route>
              <Route path="roles" element={<RoleListView/>}></Route>
              <Route path="notifications" element={<NotificationManagerView/>}></Route>
              <Route path="account">
                <Route path=":id" element={<UserProfileView />}/>
              </Route>
              <Route path="articles" element={<ArticleListView/>}></Route>
             
          </Routes>
        
      </Router>
    </div>
    // <div className="App">
    //   FRONTEND PADRE
    //   <Suspense fallback={<div>Cargando...</div>}>
    //     <MiComponente />
    //   </Suspense>
    // </div>
  );
}

export default App;
