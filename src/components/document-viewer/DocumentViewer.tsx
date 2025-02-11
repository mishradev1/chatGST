"use client"

import * as React from "react"
import { ArrowLeft, Search, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DocumentViewerProps {
  documentUrl?: string
  documentName?: string
  onClose?: () => void
}

export function DocumentViewer({ documentUrl, documentName, onClose }: DocumentViewerProps) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleDownload = async () => {
    try {
      const response = await fetch(documentUrl || "")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = documentName || "document.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading document:", error)
    }
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-600 truncate max-w-[300px]">{documentName || "Document"}</span>
        </div>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="h-8 w-40"
              />
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDownload}>
            <Download className="h-4 w-4" />
          </Button>
          {onClose && (
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Document Content */}
      <div className="flex-1 overflow-auto p-4">
        {documentUrl ? (
          <iframe src={documentUrl} className="w-full h-full border-0" title={documentName || "Document Viewer"} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">No document selected</div>
        )}
      </div>
    </div>
  )
}

