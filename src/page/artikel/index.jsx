import React from "react";
import { getAllArtkl } from "../../api/artikel";
import Skeleton from "react-loading-skeleton";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import { deleteArtikel } from "../../api/artikel";
import Swal from 'sweetalert2';

export default function Artikel() {
  const [listArtikel, setListArtikel] = React.useState([]);
  const [isFetchArtikel, setIsFetchArtikel] = React.useState(false);
  const navigate = useNavigate();
  const getListArtikelHandle = async () => {
    try {
      setIsFetchArtikel(true);
      const response = await getAllArtkl();
      console.log("response =>", response.data);
      console.log("jalan lagi");
      setListArtikel(response.data.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchArtikel(false);
    }
  };

  console.log(listArtikel);
  React.useEffect(() => {
    getListArtikelHandle();
  }, []);
  return (
    
    <div>
        <Button title="Tambah" onClick={() => {
            return navigate('/tambah', {replace :true})
        }}/>
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border">
            <th>No</th>
            <th>Judul</th>
            <th>Thumbnail</th>
            <th>Artikel</th>
            <th>Penulis</th>
            <th>Dibuat</th>
            <th>Diupdate</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {isFetchArtikel ? (
            <tr>
              <td colSpan={9}>
                <Skeleton baseColor="red" highlightColor="blue" count={1} />
              </td>
            </tr>
          ) : (
            listArtikel.map((artikel, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{artikel?.judul}</td>

                  <td>
                    <img src={artikel?.thumbnail} className="w-10 h-10" />
                  </td>

                  <td className="-indent-8 truncte break-all">
                    {artikel?.artikel}
                  </td>
                  <td>{artikel?.user?.name}</td>
                  <td>{artikel?.created_at}</td>
                  <td>{artikel?.update_at}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => {
                        return navigate(`/artikel/${artikel.id}`);
                      }}
                      color="blue"
                      title={"edit"}
                    />
            <Button
                     onClick={
                      async() => {
                        console.log("delete jalan");
                        const response = await deleteArtikel(artikel.id)
                        console.log(response.data)
                        try {
                          if (response.data.status === "Fail") {
                            const Toast = Swal.mixin({
                              toast: true,
                              position: 'top-end',
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                              }
                            })
                            
                            Toast.fire({
                              icon: 'error',
                              title: 'Failed to Delete Article'
                            })
                          }
                          else {
                            const Toast = Swal.mixin({
                              toast: true,
                              position: 'top-end',
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                              }
                            })
                            
                            Toast.fire({
                              icon: 'success',
                              title: 'Delete'
                            })
                          }
                          getListArtikelHandle()
                        }
                        catch (err){
                          console.log(err);
                        }
                      }
                    }
                      color="red"
                      title={"delete"}
                    />
                     <Button
                      onClick={() => {
                        return navigate(`/artikel/detailArtikel/${artikel.slug}`)
                      }}
                      color="orange"
                      title={"view"}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
