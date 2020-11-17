import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: " Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    {
        title: " KYC",
        path: "/kyc",
        icon: <FcIcons.FcViewDetails/>,
        cName: "nav-text"
    },
    {
        title: " Report",
        path: "/reports",
        icon: <FaIcons.FaBars/>,
        cName: "nav-text"
    },
    {
        title: " Contact Us",
        path: "/contactUs",
        icon: <RiIcons.RiContactsLine/>,
        cName: "nav-text"
    }
]