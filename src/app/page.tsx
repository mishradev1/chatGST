'use client'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { Chat } from '@/components/chat/Chat'

export default function Home() {
  return (
    <div className="bg-[#FFFCF9]">
      <Sidebar />
      <main className="flex flex-1 justify-center items-center">
        <Chat />
      </main>
    </div>
  )
}
