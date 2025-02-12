import * as React from "react"
import { FileText, ExternalLink, ThumbsUp, ThumbsDown, RotateCw, Download, Book, Search, Eye, Info, MessageSquare, Copy } from "lucide-react"
import { DocumentViewer } from "../document-viewer/DocumentViewer"
import { ActionButtons } from "./ActionButtons"

interface Source {
    id: string
    name: string
    selected?: boolean
}

interface MessageProps {
    type: "user" | "assistant"
    content: string
    sources?: Source[]
    confidence?: number
}

export function Message({ type, content, sources, confidence }: MessageProps) {
    const [selectedDocument, setSelectedDocument] = React.useState<Source | null>(null)

    if (type === "user") {
        return (
            <div className="flex justify-end mb-4">
                <p className="bg-[#F7F2ED] rounded-[8px] px-4 py-2 text-[15.5px] text-gray-800/90 inline-block">
                    {content}
                </p>
            </div>
        )
    }

    return (
        <div className="bg-[#FFFCF9] p-4 rounded-lg mb-4 space-y-4">
            {/* Sources Section */}
            {sources && sources.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Book className="h-5 w-5 text-gray-600" />
                            <h3 className="text-md font-medium">Sources</h3>
                        </div>
                        <button className="text-blue-600 text-sm flex items-center gap-1">
                            View all <ExternalLink className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                        {sources.map((source) => (
                            <div
                                key={source.id}
                                className={`relative flex-shrink-0 w-36 h-44 p-2 border rounded-[8px] cursor-pointer transition-all ${selectedDocument?.id === source.id
                                    ? "border-[#D48B6C] bg-[#F7F2ED]"
                                    : "border-gray-300 bg-[#FFFCF9]"
                                    }`}
                                onClick={() => setSelectedDocument(selectedDocument?.id === source.id ? null : source)}
                            >
                                {selectedDocument?.id === source.id && (
                                    <div className="absolute top-2 right-2 bg-[#D48B6C] text-white w-5 h-5 flex items-center justify-center rounded-full">
                                        ✓
                                    </div>
                                )}
                                <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center">
                                    <FileText className="h-8 w-8 text-gray-500" />
                                </div>
                                <span className="block text-sm text-gray-600 mt-2 text-center">
                                    {source.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Document Viewer */}
            {selectedDocument && (
                <div className="h-[500px] border rounded-lg overflow-hidden no-scrollbar">
                    <DocumentViewer
                        documentUrl={`/api/documents/${selectedDocument.id}`}
                        documentName={selectedDocument.name}
                        onClose={() => setSelectedDocument(null)}
                    />
                </div>
            )}

            {/* Message Content */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 text-sm">AI</span>
                    </div>
                    <span className="font-medium">Result</span>
                </div>

                <div className="text-gray-800">{content}</div>

                {/* Confidence Section */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F7F2ED] text-[#9C8F7A] text-sm font-medium">
                    Confidence {confidence}/5
                    <Info className="h-4 w-4 text-[#9C8F7A]" />
                </div>

                {/* Actions Row */}
                <div className="pt-1">
                    <ActionButtons />
                </div>
            </div>
        </div>
    )
}
