// 'use client'

// import { Sidebar } from '@/components/sidebar/Sidebar'
// import { Chat } from '@/components/chat/Chat'

// export default function Home() {
//   return (
//     <div className="flex h-full bg-[#FFFCF9]">
//       <Sidebar />
//       <main className="flex flex-1 h-full justify-center items-center">
//           <Chat />
//       </main>
//     </div>
//   )
// }

'use client'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { Chat } from '@/components/chat/Chat'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#FFFCF9]">
      <Sidebar/>
      <main className="flex flex-1 justify-center items-center">
        <Chat />
      </main>
    </div>
  )
}
