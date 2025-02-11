// src/components/document-viewer/DocumentViewer.tsx
'use client'

import { X } from 'lucide-react'
import { motion } from 'framer-motion'

interface DocumentViewerProps {
  documentId: string
  onClose: () => void
}

export function DocumentViewer({ documentId, onClose }: DocumentViewerProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '42%' }}
      exit={{ width: 0 }}
      className="bg-white border-l border-gray-200 h-screen flex flex-col"
    >
      <div className="border-b p-4 flex items-center justify-between">
        <h2 className="font-semibold">Document Viewer</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {/* Replace this with actual PDF viewer implementation */}
        <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
          <p className="text-gray-500">
            Document ID: {documentId}
          </p>
        </div>
      </div>
    </motion.div>
  )
}