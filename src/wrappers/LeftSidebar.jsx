import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const sidebarItems = [
  {icon:<FontAwesomeIcon icon={ faHouse} />,text:"home"},
   { icon: <FontAwesomeIcon icon={faMagnifyingGlass} />, text: "Search" },
   { icon: <FontAwesomeIcon icon={faArrowTrendUp} />, text: "Explore" },
  { icon: <FontAwesomeIcon icon={faMessage} />, text: "Messages" },
  { icon: <FontAwesomeIcon icon={faHeart} />, text: "Notification" },
  { icon: <FontAwesomeIcon icon={faSquarePlus}/>, text: "Create" },
  { icon:<FontAwesomeIcon icon={faUser}/> , text: "Profile" },
  { icon: <FontAwesomeIcon icon={faRightFromBracket} />, text: "Logout" },
];
const LeftSidebar = () => {
  const navigate = useNavigate();
const logoutHandler=async()=>{
  try {
    const res = await axios.get('http://localhost:3000/api/v1/user/logout',{withCredentials:true})

    if(res.data.success){
      navigate("/login");
        toast.success(res.data.message);
      
    }

    
  } catch (error) {
    toast.error(error.response.data.message)
  }
}

const sidebarHandler = (textType)=>{
  if(textType === 'Logout') logoutHandler();
}
  return (
    <div className="fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen">
      <div className="flex flex-col">
        <h1 className="my-8 pl-3 font-bold text-xl">Happy Time</h1>
        <div>
          {sidebarItems.map((item, index) => {
            return (
              <div onClick={()=>{sidebarHandler(item.text)}} key={index} className="flex items-center gap-3 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-3  ">
                {item.icon}
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
