import Image from "next/image"
import SideBarMenuItem from "./SideBarMenuItem"
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (

    <div className=" hidden sm:flex flex-col
 p-2 fixed h-full xl:ml-24">
    
    {/* Twitter logo */}

    <div className="hoverEffect hover:bg-blue-100">
    <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>

    {/* Menu */}

    <div className="mb-3">

        <SideBarMenuItem text="Home" Icon={HomeIcon} active/>
        <SideBarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SideBarMenuItem text="Notifications" Icon={BellIcon} />
        <SideBarMenuItem text="Messages" Icon={InboxIcon} />
        <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SideBarMenuItem text="Profile" Icon={UserIcon} />
        <SideBarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />

    </div>
    

    {/* Button */}

    <button className="bg-blue-400 text-white text-lg font-bold shadow-md hover:brightness-95 rounded-full w-56 h-12 hidden xl:inline">Tweet</button>

    {/* Mini-Profile */}
    
    <div className="hoverEffect text-gray-700 flex mt-20 ">

      <img className="h-10 w-10 rounded-full mr-5"  src="  https://png.pngitem.com/pimgs/s/49-497492_kawaii-cake-pixel-art-hd-png-download.png " alt="userImage"></img>

      <div className=" leading-5 hidden xl:inline">

        <h4 className="font-bold" >Matome Gafane</h4>
        <p className="text-gray-500">@Matome</p>

      </div>

      <DotsCircleHorizontalIcon className="h-5 ml-3 mt-4 hidden xl:inline"/>
    </div>
    
    </div>
  )
}
