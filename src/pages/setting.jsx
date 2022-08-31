import { Outlet, Link } from "react-router-dom";


export default function Setting(){
    return(
            <div>
                <section className="space-x-5">
                    <Link to={"/setting/phone"}>phone</Link>
                    <Link to={"/setting/profile"}>profile</Link>
                    <Link to={"/setting/komputer"}>komputer</Link>
                </section>
                <section className="col-span-4 border">
                    <Outlet />
                </section>
            </div>
    );
}