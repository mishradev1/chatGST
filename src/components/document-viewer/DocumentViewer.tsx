import * as React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface DocumentViewerProps {
  documentUrl?: string;
  documentName?: string;
  onClose?: () => void;
  isOpen: boolean;
}

export function DocumentViewer({ documentUrl, documentName, onClose, isOpen }: DocumentViewerProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      className={`fixed top-0 h-screen bg-white shadow-lg transition-transform duration-300 transform hidden md:block ${
        isOpen ? "right-0 w-[40%]" : "right-[-620px]"
      } max-w-full z-50`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <span className="text-sm font-medium text-gray-700 truncate max-w-[300px]">
          {documentName ?? "Document"}
        </span>
        <button onClick={onClose} className="text-gray-600 hover:text-black">
          ✖
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
        {documentUrl ? (
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js">
            <div className="w-full h-full">
              <Viewer fileUrl={documentUrl} plugins={[defaultLayoutPluginInstance]} />
            </div>
          </Worker>
        ) : (
          <div className="text-gray-500">No document selected</div>
        )}
      </div>
    </div>
  );
}
