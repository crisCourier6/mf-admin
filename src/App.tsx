import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginView from "./views/accounts/LoginView";
import HomeView from "./views/HomeView";
import UserListView from "./views/accounts/UserListView";
import UserProfileView from "./views/accounts/UserProfileView";
import FoodListLocalView from "./views/food-profile/FoodListLocalView";
import RoleListView from "./views/accounts/RoleListView";
import ArticleListView from "./views/expert-profile/ArticleListView";
import NotificationManagerView from "./views/notification/NotificationManagerView";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import FoodProfileView from "./views/food-profile/FoodProfileView";
import InvalidRoute from "./components/InvalidRoute";
import UserNotificationsView from "./views/notification/UserNotificationsView";
import FoodEditView from "./views/food-edit/FoodEditView";
import ScannerView from "./views/ScannerView";

function App() {
  return (
    <div className="App">
      <Router basename="/admin">
          <Routes>
              <Route path="/" element={<PublicRoute><LoginView /></PublicRoute>}/>
              <Route path="login">
                <Route index={true} element={<PublicRoute><LoginView/></PublicRoute>}/>
              </Route>
              <Route path="home" element={<ProtectedRoute><HomeView/></ProtectedRoute>}></Route>
              <Route path="users">
                <Route index={true} element={<ProtectedRoute><UserListView /></ProtectedRoute>}/>
                <Route path=":id" element={<ProtectedRoute><UserProfileView/></ProtectedRoute>}/>
                <Route path=":id/notifications" element={<ProtectedRoute><UserNotificationsView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="food">
                <Route index={true} element={<ProtectedRoute><FoodListLocalView/></ProtectedRoute>}></Route>
                <Route path=":id" element={<ProtectedRoute><FoodProfileView/></ProtectedRoute>}></Route>
                <Route path=":id/edit" element={<ProtectedRoute><FoodEditView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="roles" element={<ProtectedRoute><RoleListView/></ProtectedRoute>}></Route>
              <Route path="notifications" element={<ProtectedRoute><NotificationManagerView/></ProtectedRoute>}></Route>
              <Route path="account">
                <Route path=":id" element={<ProtectedRoute><UserProfileView /></ProtectedRoute>}/>
              </Route>
              <Route path="articles" element={<ProtectedRoute><ArticleListView/></ProtectedRoute>}></Route>
              <Route path="scan">
                <Route index={true} element={<ScannerView/>}></Route>
              </Route>
              <Route path="*" element={<InvalidRoute />} />
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
