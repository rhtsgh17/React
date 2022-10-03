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
        <h1 className="font-bold place-self-center">Table User</h1>
        <div className="flex space-x-3">
          <Button
            onClick={() => {
              return navigate(`/Admin/Books/Add`, {
                replace: true,
              });
            }}
            title="Buku"
          >
            Add User
          </Button>
        </div>
      </div>

      <section className="w-full overflow-scroll">
        <div className="flex flex-row gap-5 w-fit pr-1 pb-2">
          {users?.map((users, index) => {
            return (
              <Card>
                <img
                  src="https://i.pinimg.com/236x/85/15/76/851576fbdffd3f95f3b5ee866b06d5c7.jpg"
                  alt=""
                />
                <div className="grid gap-4 py-2">
                  <div className="flex flex-col">
                    {" "}
                    <div className="flex flex-row justify-between">
                      <p className="font-bold uppercase">{users.judul_buku}</p>
                      <p className="text-orange-500 underline capitalize text-sm">
                        {users.nama_pengarang}
                      </p>
                    </div>
                    <p className="text-orange-500 font-thin text-[13px]">
                      Published by{" "}
                      <span className="underline">
                        {users.nama_penerbit_buku}
                      </span>{" "}
                      on {users.tahun_terbit_buku}
                    </p>
                  </div>

                  <div>
                    <p className="font-bold">Sinopsis</p>
                    <div className="overflow-y-auto h-[50px]">
                      <p className="text-stone-500 font-thin">
                        {users.sinopsis}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    title="Book Detail"
                    add=""
                    onClick={() => {
                      return navigate(`/Admin/Books/${users.id}/view`, {
                        replace: true,
                      });
                    }}
                  />
                  <div className="w-full flex-row flex">
                    <Button
                      title="Edit"
                      onClick={() => {
                        return navigate(`/Admin/Books/${users.id}/update`, {
                          replace: true,
                        });
                      }}
                    />
                    <Button
                      onClick={() => {
                        getUserDelete(users.id);
                      }}
                      title="Delete"
                    ></Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default User;