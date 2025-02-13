"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChatInput } from "@/components/chat-input/chat-input";
import { Message } from "@/components/message/message";
import { DocumentViewer } from "../document-viewer/DocumentViewer";

interface ChatMessage {
  id: string;
  content: string;
  type: "user" | "assistant";
  sources?: Array<{ id: string; name: string }>;
  confidence?: number;
}

interface Suggestion {
  id: string;
  text: string;
}

export function Chat() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [isDocumentOpen, setIsDocumentOpen] = React.useState(false)
  const [selectedDocument, setSelectedDocument] = React.useState<string | null>(null)

  const [suggestions] = React.useState<Suggestion[]>([
    { id: "1", text: "What must be included in a legal demand notice under Section 138?" },
    { id: "2", text: "What happens if the drawer ignores the notice?" },
  ]);

  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSubmit = React.useCallback((query: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: query,
      type: "user",
    };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      const response: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `
# **Legal Remedies for Cheque Dishonor (Section 138 of the Negotiable Instruments Act, 1881)**

The dishonor of a cheque is a serious financial offense in India, governed by **Section 138 of the Negotiable Instruments Act, 1881**. When a cheque is returned unpaid due to reasons such as **insufficient funds** or **exceeding the arrangement**, the payee has legal remedies available under both civil and criminal law. Section 138 prescribes criminal liability for the drawer if the dishonored cheque is issued for the discharge of a legally enforceable debt or liability.

## **1. Filing a Criminal Complaint**
One of the primary legal remedies available to the payee is to **initiate criminal proceedings** against the drawer. This provision ensures accountability and discourages fraudulent financial transactions. A conviction under Section 138 can lead to **imprisonment for up to two years, a monetary fine (which may extend to twice the cheque amount), or both**.

## **Conclusion**
Section 138 of the **Negotiable Instruments Act, 1881**, provides a strong legal remedy for cheque dishonor. By following the correct legal procedure—sending a demand notice, allowing the prescribed waiting period, and filing a timely complaint—the payee can seek justice and financial recovery. The law acts as a deterrent, ensuring the credibility of cheques in financial transactions.
`
        ,
        type: "assistant",
        sources: [
          { id: "1", name: "Securities and Exchange board of India.pdf" },
          { id: "2", name: "Bank regulation 2024-2025.pdf" },
          { id: "3", name: "Securities and Exchange board of India.pdf" },
          { id: "4", name: "Bank regulation 2024-2025.pdf" },
          { id: "5", name: "Securities and Exchange board of India.pdf" },
          { id: "6", name: "Bank regulation 2024-2025.pdf" },
        ],
        confidence: 5,
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  },[]);

  const handleDocumentViewerOpen = React.useCallback((isOpen: boolean, documentName?: string) => {
    setIsDocumentOpen(isOpen);
    setSelectedDocument(isOpen ? documentName ?? null : null);
  }, []);


  return (
    
  <motion.div
    className="flex justify-center items-center w-full"
    animate={{
      marginLeft: isDocumentOpen ? "-500px" : "0px",
      width: isDocumentOpen ? "92%" : "100%"
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <div className="p-8 pr-2 pb-4 pt-12 bg-[#FFFCF9] flex flex-col h-screen">
      <div className="max-w-3xl mx-auto flex flex-col h-full flex-grow space-y-2">
        {/* Messages and suggestions wrapped together */}
        <div className="flex flex-col overflow-hidden">
          <motion.div
            ref={chatContainerRef}
            className="flex-grow min-h-[400px] max-h-[600px] overflow-y-auto space-y-4 no-scrollbar"
            style={{
              paddingBottom: "10px",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              overflowAnchor: "auto",
            }}
          >
            {messages.map((message) => (
              <Message
                key={message.id}
                type={message.type}
                content={message.content}
                sources={message.sources}
                confidence={message.confidence}
                onDocumentViewerOpen={handleDocumentViewerOpen} 
              />
            ))}
          </motion.div>

          {/* Suggestions */}
          <div className="flex flex-wrap justify-end gap-2 p-4 pt-1 pb-0">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => handleSubmit(suggestion.text)}
                className="bg-[#F7F2ED] hover:bg-gray-200/80 rounded-[10px] px-4 py-2 text-[15px] text-gray-800"
              >
                {suggestion.text}
              </button>
            ))}
          </div>
        </div>

        {/* Chat input (inside the same div) */}
        <div className="bg-[#FFFCF9]">
          <ChatInput onSubmit={handleSubmit} />
        </div>
      </div>
      
      {isDocumentOpen && selectedDocument && (
    <motion.div
      className="absolute right-0 top-12 bg-white shadow-lg rounded-lg overflow-hidden"
      animate={{
        opacity: isDocumentOpen ? 1 : 0, // Smooth fade-in
        scale: isDocumentOpen ? 1 : 0.8, // Expanding effect
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <DocumentViewer
              documentName={selectedDocument}
              onClose={() => handleDocumentViewerOpen(false)} isOpen={false}      />
    </motion.div>
  )}
    </div>
    </motion.div>
  );
}


// import * as React from "react"
// import { motion } from "framer-motion"
// import { ChatInput } from "@/components/chat-input/chat-input"
// import { Message } from "@/components/message/message"
// import { DocumentViewer } from "@/components/document-viewer/document-viewer" // Importing document viewer

// interface ChatMessage {
//   id: string
//   content: string
//   type: "user" | "assistant"
//   sources?: Array<{ id: string; name: string }>
//   confidence?: number
// }

// interface Suggestion {
//   id: string
//   text: string
// }

// export function Chat() {
//   const [messages, setMessages] = React.useState<ChatMessage[]>([])
//   const [isDocumentOpen, setIsDocumentOpen] = React.useState(false)
  // const [selectedDocument, setSelectedDocument] = React.useState<string | null>(null)
  
//   const [suggestions] = React.useState<Suggestion[]>([
//     { id: "1", text: "What must be included in a legal demand notice under Section 138?" },
//     { id: "2", text: "What happens if the drawer ignores the notice?" },
//   ])

//   const chatContainerRef = React.useRef<HTMLDivElement>(null)

//   React.useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTo({
//         top: chatContainerRef.current.scrollHeight,
//         behavior: "smooth",
//       })
//     }
//   }, [messages])

//   const handleSubmit = (query: string) => {
//     const newMessage: ChatMessage = {
//       id: Date.now().toString(),
//       content: query,
//       type: "user",
//     }
//     setMessages((prev) => [...prev, newMessage])

//     // Simulate AI response
//     setTimeout(() => {
//       const response: ChatMessage = {
//         id: (Date.now() + 1).toString(),
//         content: `Your simulated response here`,
//         type: "assistant",
//         sources: [
//           { id: "1", name: "Securities and Exchange board of India.pdf" },
//           { id: "2", name: "Bank regulation 2024-2025.pdf" },
//         ],
//         confidence: 5,
//       }      
//       setMessages((prev) => [...prev, response])
//     }, 1000)
//   }

  // const handleDocumentViewerOpen = (isOpen: boolean, documentName?: string) => {
  //   setIsDocumentOpen(isOpen)
  //   if (isOpen && documentName) {
  //     setSelectedDocument(documentName)
  //   } else {
  //     setSelectedDocument(null)
  //   }
  // }

//   return (
    // <motion.div
    //   className="flex h-full"
    //   animate={{
    //     marginLeft: isDocumentOpen ? "0" : "200px",
    //     width: isDocumentOpen ? "92%" : "80%"
    //   }}
    //   transition={{ duration: 0.3, ease: "easeInOut" }}
    // >
//       <div className="w-full h-full p-12 bg-[#FFFCF9] flex flex-col">
//         <div className="max-w-3xl mx-auto flex flex-col flex-grow space-y-4">
//           <motion.div
//             ref={chatContainerRef}
//             className="flex-grow min-h-[400px] max-h-[600px] overflow-y-auto space-y-4 no-scrollbar"
//             animate={{ scrollTop: chatContainerRef.current?.scrollHeight || 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             {messages.map((message) => (
//               <Message
//                 key={message.id}
//                 type={message.type}
//                 content={message.content}
//                 sources={message.sources}
//                 confidence={message.confidence}
                // onDocumentViewerOpen={handleDocumentViewerOpen} // Pass handler to Message component
//               />
//             ))}
//           </motion.div>

//           <div className="flex flex-wrap justify-end gap-2 pb-6">
//             {suggestions.map((suggestion) => (
//               <button
//                 key={suggestion.id}
//                 onClick={() => handleSubmit(suggestion.text)}
//                 className="bg-[#F7F2ED] hover:bg-gray-200/80 rounded-[10px] px-4 py-2 text-[15px] text-gray-800"
//               >
//                 {suggestion.text}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="sticky bottom-0 bg-[#FFFCF9] py-2">
//           <ChatInput onSubmit={handleSubmit} />
//         </div>
//       </div>

      // {/* Document Viewer */}
      // {isDocumentOpen && selectedDocument && (
      //   <DocumentViewer
      //     documentName={selectedDocument}
      //     onClose={() => handleDocumentViewerOpen(false)}
      //   />
      // )}
//     </motion.div>
//   )
// }
