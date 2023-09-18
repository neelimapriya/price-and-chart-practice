import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill,RiCloseCircleLine } from 'react-icons/ri';


const Navbar = () => {
    const [open, setOpen]=useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' },
      ];

    return (
        <nav className="text-black bg-yellow-200 p-6">
           <div className=" md:hidden" onClick={()=>setOpen(!open)}>
            {
                open===true? <RiCloseCircleLine className="text-2xl"></RiCloseCircleLine>: <RiMenu2Fill className="text-2xl"></RiMenu2Fill>
            }
            </div>
           <ul className={`md:flex absolute md:static ${open? 'top-12':'-top-60'} bg-yellow-200 px-6`}>
           {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;