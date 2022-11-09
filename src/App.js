import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import User from "./page/User";
import UpdateUser from "./page/UpdateUser";
import DetailUser from "./page/detailUser";
import CreateUser from "./page/CreateUser";
import ProtectedRoute from "./routers/protectRoute";
import Login from "./page/Aut/login";
import Artikel from "./page/artikel";
import TambahArtikel from "./page/artikel/tambah";
import UpdateArtikel from "./page/artikel/updateArtikel";
import DetailArtikel from "./page/artikel/detailArtikel";
import { useSelector } from "react-redux";
import { Register } from "./page/Aut/register";
function App() {
  const color = useSelector((state) => state.color);
  const name = useSelector((state) => state?.authProses?.name);
  const email = useSelector((state) => state?.authProses?.email);
  console.log("color", color.color);

  return (
    <React.Fragment>
      {name}
      <br/>
      {email}
      <h1
        style={{
          backgroundColor: color.color,
        }}

        //  className={`bg-[${color.color}]`}
      >
        Belajar APi Postman
      </h1>

      <Routes>
        <Route path="/artikel/update/:slug" element={<UpdateArtikel />} />
        <Route path="/artikel/tambah" element={<TambahArtikel />} />
        <Route
          path="/artikel"
          element={
            <ProtectedRoute>
              <Artikel />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:id/detail"
          element={
            <ProtectedRoute>
              <DetailUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <ProtectedRoute>
              <CreateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/updateArtikel/:id"
          element={
            <ProtectedRoute>
              <updateArtikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/detailArtikel/:slug"
          element={
            <ProtectedRoute>
              <DetailArtikel />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/artikel" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
