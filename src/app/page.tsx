'use client'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { Chat } from '@/components/chat/Chat'
import { DocumentViewer } from '@/components/document-viewer/DocumentViewer'
import { useState } from 'react'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedDocument, setSelectedDocument] = useState<{
    id: string;
    name: string;
    url: string;
  } | null>(null)

  return (
    <div className="flex min-h-screen bg-[#FFFCF9]">
      <Sidebar />
      <main className="flex flex-1 ml-24">
        <div className={`flex-1 ${selectedDocument ? 'w-[55%]' : 'w-full'} transition-all duration-300`}>
          <Chat 
            onDocumentSelect={(doc) => setSelectedDocument(doc)}
          />
        </div>
        {selectedDocument && (
          <div className="w-[45%] fixed right-0 top-0 h-screen border-l bg-white">
            <DocumentViewer 
              documentUrl={selectedDocument.url}
              documentName={selectedDocument.name}
              onClose={() => setSelectedDocument(null)}
            />
          </div>
        )}
      </main>
    </div>
  )
}
