import React, { useState } from "react";
import { SideBarCTC, SidebarFeatures } from "../../../utils/constants";
import NotificationPop from "../../../utils/AfterAuthUtils/SideBarUtils/NotificationPop";
import MobileOpenButton from "../../../utils/AfterAuthUtils/SideBarUtils/MobileOpenButton";
import { BadgeQuestionMark, BookOpen, Calculator, CircleUserRound, ClipboardClock, Clock, Contact, LayoutDashboard,  Upload } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = ({setIsLoggedIn , ActivePage}) => {
  const [open, setOpen] = useState(false);

  console.log("ds", SidebarFeatures);

  const handleIcons = (name , isActive) => {
    switch (name) {
      case "DashboardIcon" :
        return (
          <LayoutDashboard className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "SubscriptionIcon" :
        return (
          <Calculator className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "UploadIcon" : 
        return (
          <Upload className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "ReminderIcon" :
        return (
          <Clock className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "HistoryIcon" :
        return (
          <ClipboardClock className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "profileIcon" : 
        return (
          <CircleUserRound className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "CustomerIcon" :
        return (
          <Contact className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "BookIcon" : 
        return (
          <BookOpen className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
      case "HelpIcon": 
        return (
          <BadgeQuestionMark className={`w-5 h-5 ${isActive === 0 ? 'text-green-600' : 'text-gray-600'}`}/>
        )
    }
  }
  
  return (
    <div className="min-h-screen ">
      {/* Open button (mobile) */}
      <MobileOpenButton setOpen={setOpen} open={open}/>

      {/* Sidebar */}
      <aside
        className={[
          "fixed top-0 z-50 left-0 w-64 h-screen transition-transform bg-white border-r border-gray-200",
          open ? "translate-x-0" : "-translate-x-full",
          "sm:translate-x-0",
        ].join(" ")}
      >
        <div className="h-full px-3 py-5 overflow-y-auto">
          <a className="flex items-center px-2 mb-6">
            <img
              src="/src/assets/logo.png"
              className="h-18"
              alt="Nodue Logo"
            />
          </a>

          <ul className="space-y-1 z-60 font-medium">
            {
                SidebarFeatures.map((features) => (
                    <li key={features.name}>
                    <Link
                      to={features.path}
                      className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${ActivePage === features.path ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="shrink-0">{ActivePage === features.path ? handleIcons(features.icon , 0) : handleIcons(features.icon , 1)}</span>
                      <span className="ml-3">{features.name}</span>
                    </Link>
                  </li>
                ))
            }
            <li className="pt-2">
              <a
                href="#"
                className="flex items-center md:hidden  px-3 py-2.5 text-sm font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-200"
              >
                <svg
                  className="shrink-0 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span onClick={() => setIsLoggedIn(false)} className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </a>
            </li>

          </ul>

          <ul className="pt-4 mt-4 space-y-1 font-medium border-t border-gray-200">
            {
                SideBarCTC.map((ctc) => (
                <li key={ctc.name}>
                    <Link
                        to={ctc.path}
                        className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${ActivePage === ctc.path ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                      <span className="shrink-0">{ActivePage === ctc.path ? handleIcons(ctc.icon , 0) : handleIcons(ctc.icon , 1)}</span>
                      <span className="ml-3">{ctc.name}</span>
                    </Link>
                </li>
                ))
            }
          </ul>

         {/* <NotificationPop/> */}
         <div className="absolute bottom-0 mb-3 w-full ">
          <p className="text-sm text-gray-400">by~ insansa techknowledge</p>
        </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;