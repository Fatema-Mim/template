import {  AiFillPieChart } from "react-icons/ai";
import { FaRegNewspaper} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const SidebarData = [
    {
      title: "Reporting Cycle",
      path: "/",
      icon: <AiFillPieChart className="w-5 h-5" />,
    },
    {
      title: "About Us",
      path: 'aboutUs',
      icon: <FaRegNewspaper className="w-5" />,
      iconOpened: <IoIosArrowForward className="w-3" />,
      icondown: <IoIosArrowDown className="w-3" />,

      subNav: [
        {
          title: "All Course",
          path: "course/list",
          icon: <FaRegNewspaper className="w-4" />,
        },
        {
          title: "Add Course",
          path: "addCourse",
          icon: <FaRegNewspaper className="w-4" />,
        },
      ],
    },
    
  ];
  return (
    <div className={`overflow-y-auto duration-200 px-4  space-y-1.5 `}>
      {SidebarData.map((item, index) => {
        return <SidebarMenu item={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;