'use client'

import { Sidebar } from '@/components/sidebar/Sidebar'
import { Chat } from '@/components/chat/Chat'
import { DocumentViewer } from '@/components/document-viewer/DocumentViewer'
import { useState } from 'react'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  return (
    <>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <main className="flex-1 flex ml-24">
        <Chat 
          onDocumentSelect={setSelectedDocument}
          className={`flex-1 ${selectedDocument ? 'max-w-[70%]' : 'max-w-[66%]'}`}
        />
        {selectedDocument && (
          <DocumentViewer 
            documentId={selectedDocument}
            onClose={() => setSelectedDocument(null)}
          />
        )}
      </main>
    </>
  )
}

