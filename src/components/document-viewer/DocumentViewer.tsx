import * as React from "react"
import { ArrowLeft, Search, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DocumentViewerProps {
  documentUrl?: string
  documentName?: string
  onClose?: () => void
  isOpen: boolean
}

export function DocumentViewer({ documentUrl, documentName, onClose, isOpen }: DocumentViewerProps) {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleDownload = async () => {
    if (!documentUrl) return
    try {
      const response = await fetch(documentUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = documentName ?? "document.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading document:", error)
    }
  }

  return (
    <div
      className={`fixed top-0 h-screen bg-white shadow-lg transition-transform duration-300 transform 
        ${isOpen ? "right-0 w-[40%]" : "right-[-620px]"} 
        max-w-full z-50`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-gray-700 truncate max-w-[300px]">
            {documentName ?? "Document"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search in document..."
                className="h-8 w-48"
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
      <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
        {documentUrl ? (
          <iframe 
            src={documentUrl} 
            className="w-full h-full border-0" 
            title={documentName ?? "Document Viewer"} 
          />
        ) : (
          <div className="text-gray-500">No document selected</div>
        )}
      </div>
    </div>
  )
}
