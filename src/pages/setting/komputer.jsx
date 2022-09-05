import { Outlet,Link } from "react-router-dom";

export default function Komputer () {
    return(
        <div>
            <div> ini adalah komputer</div>
           <div className="space-x-5">
           <Link to="/setting/komputer/lenovo">Lenovo</Link>
           <Link to="/setting/komputer/apple">Apple</Link>{""}
           <Link to="/setting/komputer/asus">Asus</Link>
           </div>
            <div className="bg-orange-500 w-56 h-11">
                <Outlet/>
            </div>
        </div>
    )
    
}