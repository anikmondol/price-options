import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <nav className="text-black bg-blue-200 p-6">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=" "></AiOutlineMenu>
                }
            
            </div>
            <ul className={`bg-blue-200 md:flex  absolute px-6 duration-1000 ${!open ? 'top-16' : '-top-60'} md:static`}>
            {
             routes.map(route => <Link key={routes.id} route={route}></Link>)   
            }
            </ul>
        </nav>
    );
};

export default NavBar;