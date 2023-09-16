import Image from "next/image";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { HiOutlineLocationMarker as PinIcon } from "react-icons/hi";
import { RiGasStationLine as GasStationIcon, RiUserSettingsLine as ManageUserIcon } from "react-icons/ri";
import { RxActivityLog as ActivityIcon } from "react-icons/rx";
import { VscGitPullRequest as RequestIcon } from "react-icons/vsc";
import { MdOutlineManageHistory as HistoryIcon } from "react-icons/md";
import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";

const SideNavigation = () => {
  return <div className="flex flex-col p-4 min-h-full shadow-lg bg-white">
    <div>
      <Image
        className="rounded-none mt-1"
        src="/assets/logos/petron-logo.png"
        alt="Petron logo"
        height={34}
        width={34}
      />
    </div>
    <div className="flex flex-row flex-1 items-center">
      <ul className="my-auto space-y-4 font-medium">
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <HomeIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-800 group shadow-lg bg-blue-900">
            <PinIcon className="flex-shrink-0 w-5 h-5 text-gray-100 transition duration-75 group-hover:text-gray-50 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <GasStationIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <ActivityIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <ManageUserIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <DashboardIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RequestIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <HistoryIcon className="flex-shrink-0 w-5 h-5 text-blue-950 transition duration-75 " />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
      </button>
    </div>
  </div>
}

export default SideNavigation;