import { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)
    return (
        <div >
            <NavLink to={item.path} onClick={item.subNav && showSubnav} className={({isActive})=> (isActive ? "text-color2":"text-white")}>
                <div   className="flex justify-between py-1 duration-300">
                    <div className="flex self-center space-x-1 ">
                    <span>{item.icon}</span>
                    <p className="self-center text-sm ">{item.title}</p>
                </div>
                <div className="self-center">
                    {item.subNav && subnav 
                    ? item.icondown 
                    : item.subNav ? 
                    item.iconOpened :null }
                </div>
                </div>
            </NavLink>
            {
                subnav && item.subNav.map((item,index)=>{
                    return(
                        <NavLink to={item.path} key={index} className={({isActive})=> (isActive ? "text-white":"text-text")}>
                            <span className="flex px-3 py-1 space-x-1">
                                <span>{item.icon}</span>
                                <p className="text-sm" >{item.title}</p>
                            </span>
                        </NavLink>
                    )
                })
            }
        </div>
    );
};

export default SidebarMenu;