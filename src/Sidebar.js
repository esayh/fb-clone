import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'

function Sidebar() {
   return (
      <div className="sidebar">
         <SidebarRow src='https://pbs.twimg.com/profile_images/1373707657727635457/wrV3X2GE_400x400.jpg' title="Esay H"/>

         <SidebarRow Icon={LocalHospitalIcon} title="COVID19 Information Center"/>
         <SidebarRow Icon={EmojiFlagIcon} title="Pages" />
         <SidebarRow Icon={PeopleIcon} title="Friends" />
         <SidebarRow Icon={ChatIcon} title="Messenger" />
         <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
         <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
         <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
      </div>
   )
}

export default Sidebar
