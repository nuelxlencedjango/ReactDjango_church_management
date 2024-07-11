

import { HiOutlineAnnotation,HiOutlineCog,HiOutlineCube,HiOutlineShoppingBag,HiOutlineUsers, 
    HiOutlineDocumentText,HiOutlineQuestionMarkCircle,HiOutlineViewGrid  } from "react-icons/hi";
import { LuSunMedium } from "react-icons/lu";
import { FaWordpress } from "react-icons/fa";
import { SiObsstudio } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";
import { FaCalendarWeek } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { GoCheckCircleFill } from "react-icons/go";



    

export const DASHBOARD_SIDEBAR_LINKS =[
    {
        key:'Cell Management',
        label:'Cell Management',
        path:'/',
        icon: <HiOutlineViewGrid />
    }, 
    {
        key:'sunday service',
        label:'Sunday Service',
        path:'/sunday_service',
        icon: <LuSunMedium />
    },
    {
        key:'tuesday service',
        label:'Tuesday Service',
        path:'/tuesday_service',
        icon: <SiObsstudio />
    },
    {
        key:'cell meeting',
        label:'Cell Meeting',
        path:'/cell_meeting',
        icon: <HiOutlineCube />
    },
      {
        key:'membership',
        label:'Cell Members',
        path:'/cell_members',
        icon: <HiUserGroup />
    },
    {
        key:'weekly report',
        label:'Weekly Report',
        path:'/weekly_report',
        icon: <FaCalendarWeek />
    },
    {
        key:'add member',
        label:'Add Member',
        path:'/add_member',
        icon: <IoPersonAddSharp />
       

    },
   
    {
        key:'check attendance',
        label:'Check Attendance',
        path:'/check_attendance',
        icon: <GoCheckCircleFill />
    },
    {
        key:'profile',
        label:'Profile',
        path:'/profile',
        icon: <HiOutlineAnnotation />
    },

];



export const DASHBOARD_SIDEBAR_Bttom_LINKS =[
    {
        key:'settings',
        label:'Settings',
        path:'/settings',
        icon: <HiOutlineCog />
    },   {
        key:'support',
        label:'Help & support',
        path:'/support',
        icon: <HiOutlineQuestionMarkCircle />
    },
    

];


