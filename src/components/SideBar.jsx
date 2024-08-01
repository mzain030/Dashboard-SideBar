import React from 'react'
import { FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt } from "react-icons/fa";
export const SideBar = () => {
  const menuItems=[
    {
      path:"/",
      name:"Dashboard",
      icon:<FaTh/>
    },
    {
      path:"/about",
      name:"About",
      icon:<FaUserAlt/>
    },
    {
      path:"/analatics",
      name:"Analatics",
      icon:<FaRegChartBar/>
    },
    {
      path:"/comment",
      name:"Comment",
      icon:<FaCommentAlt/>
    },
    {
      path:"/product",
      name:"Product",
      icon:<FaShoppingBag/>
    },
    {
      path:"/productList",
      name:"ProductList",
      icon:<FaThList/>
    }
  ]
  return (
    <div>
      <h1>This is SideBar</h1>
    </div>
  )
}
export default SideBar;
