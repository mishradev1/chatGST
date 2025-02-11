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
import { Bell } from 'lucide-react'
import { useState } from 'react'

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="h-screen flex bg-[#FFFCF9]">
      {/* Slim Sidebar - Centered vertically with new styling */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2">
        <div className="w-[70px] h-[35vh] bg-[#FFFCF9] rounded-xl border border-gray-200 shadow-lg 
                      flex flex-col items-center justify-between py-4 px-2.5
                      transition-transform duration-200">
          {/* Expand button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200 rounded-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
              <rect x="4" y="4" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          </button>

          {/* Plus button with adjusted margin */}
          <button className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200 rounded-lg mt-6">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-3/5 h-[1px] bg-gray-200 my-4"></div>

          {/* Notification button with adjusted margin */}
          <div className="relative mb-6">
            <button className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200 rounded-lg">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                5
              </span>
            </button>
          </div>

          {/* Account button */}
          <button className="w-8 h-8 overflow-hidden rounded-lg hover:scale-110 transition-transform duration-200">
            <div className="w-full h-full bg-gradient-to-b from-purple-400 to-orange-400" />
          </button>
        </div>
      </div>

      {/* Expanded sidebar with animation */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 250, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-[96px] top-0 bg-white border-r border-gray-100 h-screen"
          >
            <div className="p-4">
              <button className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100">
                Add new Thread
              </button>
            </div>

            <div className="px-4">
              <div className="mb-6">
                <h3 className="text-sm text-gray-600 mb-2">Today</h3>
                <div className="space-y-1">
                  <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
                    How to write an impac...
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
                    Web accessibility
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
                    Design inspiration
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
                    What is machine learning
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm text-gray-600 mb-2">Yesterday</h3>
                <div className="space-y-1">
                  <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
                    How to write an impacting...
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded text-gray-700 hover:bg-gray-50 text-[14px]">
                    Web accessibility
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}