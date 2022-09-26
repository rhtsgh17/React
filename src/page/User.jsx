import React from "react";
import axios from "axios";
import Button from "../komponen/button";
import Card from "../komponen/card";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(false);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://api-react-2.herokuapp.com/api/perpustakaan?kode=33333`
      );
      console.log("Response =>", response.data.data.data);

      setUsers(response.data.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };
  const getUserDelete = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=33333`
      );
      getUserHandle();
      setIsLoading(false);
      console.log(response.data.data.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, [page]);
  const navigate = useNavigate();

  console.log("Users =>", users);
  console.log("Page =>", page);
  return (
    <section>
      <div className="flex flex-row justify-between py-3">
        <h1 className="font-bold place-self-center">Home</h1>
        <div className="flex space-x-3">
          <Button
            onClick={() => {
              return navigate(`/Admin/Buku/Add`, {
                replace: true,
              });
            }}
            title="Buku"
          >
            Add User
          </Button>
        </div>
      </div>

      <section className="w-full flex justify-center">
        <Card>
          <Button
            title="Edit"
            onClick={() => {
              return navigate(`/Admin/Buku/${users.id}/update`, {
                replace: true,
              });
            }}
          />
          <Button
            title="Detail Buku"
            add=""
            onClick={() => {
              return navigate(`/Admin/Buku/${users.id}/view`, {
                replace: true,
              });
            }}
          />
          <Button
            onClick={() => {
              getUserDelete(users.id);
            }}
            title={isLoading ? "Deleting" : "Delete"}
          ></Button>
        </Card>
      </section>
    </section>
  );
};

export default User;