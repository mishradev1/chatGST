"use client"

import * as React from "react"
import { X, Plus, ArrowRight, FileText } from "lucide-react"

interface Document {
  id: string
  name: string
}

export function ChatInput({ onSubmit }: { onSubmit: (query: string) => void }) {
  const [documents, setDocuments] = React.useState<Document[]>([
    { id: "1", name: "Securities and Exchange boar..." },
    { id: "2", name: "Securities and Exchange boar..." },
    { id: "3", name: "Securities and Exchange boar..." },
  ])
  const [query, setQuery] = React.useState("")

  const removeDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  const addDocument = () => {
    const newDoc = {
      id: Math.random().toString(36).substr(2, 9),
      name: "Securities and Exchange boar...",
    }
    setDocuments([...documents, newDoc])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSubmit(query)
      setQuery("")
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-2 bg-[#FFFCF9]">
      <div className="relative rounded-[12px] border border-gray-200 bg-[#FFFCF9] shadow-md">
        
        {/* Documents area (Scrollable but hidden scrollbar) */}
        <div className="relative px-3 pt-3">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar rounded-lg p-1 px-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center gap-2 px-2 py-2 text-sm text-gray-600 bg-[#F7F2ED] rounded-[6px]"
              >
                <FileText className="h-4 w-4 text-gray-400" />
                {doc.name}
                <button onClick={() => removeDocument(doc.id)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="px-1 pb-1">
          <div className="flex items-center rounded-lg px-3 py-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query here..."
              className="flex-1 outline-none text-gray-800 placeholder-gray-400 bg-[#FFFCF9] py-2 px-3 rounded-lg"
            />
          </div>

          {/* Action buttons in a new row */}
          <div className="flex items-center justify-between px-3 pb-2">
            <button
              type="button"
              onClick={addDocument}
              className="flex items-center justify-center h-8 w-8 text-gray-400 hover:text-gray-600"
            >
              <Plus className="h-5 w-5" />
            </button>
            
            <button
              type="submit"
              className="flex items-center justify-center h-8 w-8 text-gray-400 hover:text-gray-600"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
