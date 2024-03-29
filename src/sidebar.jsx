
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0
      flex flex-col
      bg-gray-900 text-white shadow-lg'>
        <SidebarIcon icon={<FaFire size='28' />}></SidebarIcon>
        <SidebarIcon icon={<BsPlus size='32' />}></SidebarIcon>
        <SidebarIcon icon={<BsFillLightningFill size='20' />}></SidebarIcon>
        <SidebarIcon icon={<FaPoo size='20' />}></SidebarIcon>
    </div>
  )
}

const SidebarIcon = ({ icon, text = 'tooltip' }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span class='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
)

export default Sidebar;