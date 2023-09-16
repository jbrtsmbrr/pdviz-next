import SideNavigation from "./SideNavigation";
import { RxMixerHorizontal as FilterIcon } from "react-icons/rx";

const Navigation = () => {
  return <div className="flex">
    <SideNavigation />
    <div className="p-6 shadow-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
          <svg className="w-3 h-3 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" id="search" className="focus:outline-none shadow-2xl block w-full p-2 pl-10 text-xs
        placeholder-gray-400 text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-1 focus:ring-blue-900 focus:border-blue-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <FilterIcon className="absolute top-2.5 right-3 text-gray-400" />
      </div>
    </div>
  </div>
}

export default Navigation;