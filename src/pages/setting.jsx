import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";


export default function Setting(){
    let navigate = useNavigate();
    let location = useLocation();
    let path = location.pathname.split("/")[1];
    let cekPath = location.pathname.split("/")[2];
    console.log("Location = ", location.pathname);
    console.log("split =",location.pathname.split("/")) 
    console.log("location =>",path)
    return (
        <div className="flex">
          <section className="">
            <div className="flex items-center flex-col h-screen border-r-2 w-[200px] border-orange-700 gap-5">
              <Link to={`/${path}/phone`}>
                <span style={{color: cekPath === 'phone' ? 'red' : undefined}}>Phone</span>
              </Link>
              <Link to={`/${path}/profile`}>
                <span style={{color: cekPath === 'profile' ? 'red' : undefined}}>Profile</span>
              </Link>
              <Link to={`/${path}/komputer`}>
                <span style={{color: cekPath === 'komputer' ? 'red' : undefined}}>Komputer</span>
              </Link>
              
              <button className="border border-orange-500 rounded py-2 px-4 mt-3" onClick={() => {return navigate(-1)}}>Kembali</button>
            </div>
          </section>
          <section className="">
            <Outlet />
          </section>
        </div>
      );
    }