// 'use client'

// import { motion, AnimatePresence } from 'framer-motion'
// import { Bell } from 'lucide-react'
// import { useState } from 'react'

// export function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="h-screen flex">
//       {/* Slim Sidebar - Centered vertically */}
//       <div className="w-[58px] bg-white flex items-center border-r border-gray-100">
//         <div className="h-1/3 flex flex-col items-center justify-between py-4 ml-2">
//           {/* Expand button */}
//           <button 
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded-lg"
//           >
//             <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
//               <rect x="4" y="4" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" />
//             </svg>
//           </button>

//           {/* Add button */}
//           <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded-lg">
//             <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
//               <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </button>

//           {/* Notification button */}
//           <div className="relative">
//             <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-50 rounded-lg">
//               <Bell size={18} className="text-gray-600" />
//               <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
//                 5
//               </span>
//             </button>
//           </div>

//           {/* Account button */}
//           <button className="w-6 h-6 overflow-hidden rounded">
//             <div className="w-full h-full bg-gradient-to-b from-purple-400 to-orange-400" />
//           </button>
//         </div>
//       </div>

//       {/* Expanded sidebar with animation */}
//       <AnimatePresence>
//         {isExpanded && (
//           <motion.div 
//             initial={{ width: 0, opacity: 0 }}
//             animate={{ width: 250, opacity: 1 }}
//             exit={{ width: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="bg-white border-r border-gray-100"
//           >
//             <div className="p-4">
//               <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100">
//                 Add new Thread
//               </button>
//             </div>

//             <div className="px-4">
//               <div className="mb-6">
//                 <h3 className="text-sm text-gray-600 mb-2">Today</h3>
//                 <div className="space-y-1">
//                   <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
//                     How to write an impac...
//                   </button>
//                   <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
//                     Web accessibility
//                   </button>
//                   <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
//                     Design inspiration
//                   </button>
//                   <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
//                     What is machine learning
//                   </button>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-sm text-gray-600 mb-2">Yesterday</h3>
//                 <div className="space-y-1">
//                   <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
//                     How to write an impacting...
//                   </button>
//                   <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
//                     Web accessibility
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Bell, PanelLeft } from 'lucide-react'
import { useState } from 'react'

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="h-screen flex bg-[#efeae5]">
      {/* Slim left sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-20">
        <div className="w-[70px] h-[37vh] bg-[#efeae5]/60 rounded-[17px] border border-gray-200 shadow-lg 
                      flex flex-col items-center justify-between py-6 px-2.5
                      transition-transform duration-200">
          {/* Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200 rounded-lg mb-4"
          >
            <PanelLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Plus button */}
          <button className="w-9 h-9 flex items-center justify-center bg-[#F9F3EE] rounded-[9px] shadow-sm border-2 border-[#F0E6DF] hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C06549]/95">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>


          {/* Divider */}
          <div className="w-8 h-[1px] bg-gray-300 my-6"></div>

          {/* Notification button */}
          <div className="relative mb-5">
            <button className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200 rounded-lg">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                5
              </span>
            </button>
          </div>

          {/* Account button */}
          <button className="w-8 h-8 overflow-hidden rounded-[8px] hover:scale-110 transition-transform duration-200">
            <div className="w-full h-full bg-gradient-to-b from-purple-400 to-orange-400" />
          </button>
        </div>
      </div>

      {/* Expanded main sidebar */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.2 }}
              className="fixed left-[110px] top-0 w-[240px] h-screen bg-[#efeae5]/60 border-r border-gray-200 z-10"
            >
              <div className="h-full flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.prod.website-files.com/66a90e7788df6d0dc5ef83dd/66ad24b77384da410863f473_Group%2027260.svg"
                      alt="ChatGST Logo"
                      className="w-10 h-10"
                    />
                    <span className="text-lg font-medium text-gray-800">ChatGST</span>
                  </div>
                  <button className="p-1.5 hover:bg-gray-100 rounded"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <PanelLeft className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* New Thread Button */}
                <button className="w-full bg-[#FFFCF9] flex items-center justify-between px-3 py-2 mb-12 text-gray-700 hover:bg-gray-200 rounded-[6px]">
                  <span>Add new Thread</span>
                  <span className="text-lg">+</span>
                </button>

                {/* Today's Threads */}
                <div className="mb-6">
                  <h3 className="text-[15px] text-gray-500 mb-2">Today</h3>
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-[14px]">
                      How to write an impac...
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-[14px]">
                      Web accessibility
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-[14px]">
                      Design inspiration
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-[14px]">
                      What is machine learning
                    </button>
                  </div>
                </div>

                {/* Yesterday's Threads */}
                <div className="mb-6">
                  <h3 className="text-[15px] text-gray-500 mb-2">Yesterday</h3>
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-[14px]">
                      How to write an impacting...
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-[14px]">
                      Web accessibility
                    </button>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto space-y-2">
                  {/* Notifications */}
                  <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <Bell size={18} className="mr-3" />
                    <span>Notifications</span>
                  </button>

                  {/* Account */}
                  <button className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    <div className="w-5 h-5 rounded overflow-hidden mr-3">
                      <div className="w-full h-full bg-gradient-to-b from-purple-400 to-orange-400" />
                    </div>
                    <span>My Account</span>
                  </button>
                </div>
              </div>
            </motion.div>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black lg:hidden z-0"
              onClick={() => setIsExpanded(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}