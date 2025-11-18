import React from 'react';
import {Sidebar,SidebarItem,SidebarItemGroup,SidebarItems,SidebarLogo } from 'flowbite-react';
import {HiChartPie,HiViewBoards,HiInbox,HiUser,HiShoppingBag,HiArrowSmRight,HiTable, HiOutlineCloudUpload,} from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import userImg from "../assets/profile.jpg"
import { AuthContext } from '../contects/AuthProvider';
import { useContext } from 'react';

const SideBar = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className="bg-gray-100 rounded">
      <Sidebar.Logo 
      href="/" 
      img={user?.photoURL} 
      imgAlt="">
        <p>
          {
            user?.displayName || "Demo User"
          }
        </p>
      </Sidebar.Logo>
        
      <SidebarItems>
        <SidebarItemGroup > 
         
          <SidebarItem href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="!justify-start  pl-3 text-left w-full">
            Upload Books
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/manage" icon={HiInbox} className="!justify-start  pl-3 text-left w-full">
            Manage Books
          </SidebarItem>
          <SidebarItem href="#" icon={HiUser} className="!justify-start  pl-3 text-left w-full">
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={HiShoppingBag} className="!justify-start  pl-3 text-left w-full">
            Products
          </SidebarItem>
          <SidebarItem href="/login" icon={HiArrowSmRight} className="!justify-start  pl-3 text-left w-full">
            Sign In
          </SidebarItem>
          <SidebarItem href="/logout" icon={HiTable} className="!justify-start  pl-3 text-left w-full">
            Log Out
          </SidebarItem>
        </SidebarItemGroup>
        <hr/>

        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie} className="!justify-start  pl-3 text-left w-full">
            Upgrade to Pro
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards} className="!justify-start  pl-3 text-left w-full">
            Documentation
          </SidebarItem>
          <SidebarItem href="#" icon={BiBuoy} className="!justify-start  pl-3 text-left w-full">
            Help
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

export default SideBar;
