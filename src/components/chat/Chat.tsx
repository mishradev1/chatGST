"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChatInput } from "@/components/chat-input/chat-input"
import { Message } from "@/components/message/message"

interface ChatMessage {
  id: string
  content: string
  type: "user" | "assistant"
  sources?: Array<{ id: string; name: string }>
  confidence?: number
}

interface Suggestion {
  id: string
  text: string
}

export function Chat() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([
    { id: "1", text: "What must be included in a legal demand notice under Section 138?" },
    { id: "2", text: "What happens if the drawer ignores the notice?" },
  ])

  const chatContainerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth", // Smooth scroll
      })
    }
  }, [messages]) // Scrolls when messages update

  const handleSubmit = (query: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: query,
      type: "user",
    }
    setMessages((prev) => [...prev, newMessage])

    // Simulate AI response
    setTimeout(() => {
      const response: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `
          <strong>Legal Remedies for Cheque Dishonor (Section 138 of the Negotiable Instruments Act, 1881):</strong>
          <ol>
            <li>
              <strong>Filing a Criminal Complaint</strong> - The payee can initiate criminal proceedings against the drawer for dishonoring a cheque due to insufficient funds or exceeding the arrangement.
            </li>
            <li>
              <strong>Procedure:</strong>
              <ul>
                <li>a. The payee must send a demand notice to the drawer within 30 days of receiving the cheque return memo from the bank, demanding payment of the cheque amount (Section 138(b)).</li>
                <li>b. The drawer has 15 days from the receipt of the notice to make the payment.</li>
              </ul>
            </li>
          </ol>
        `,
        type: "assistant",
        sources: [
          { id: "1", name: "Securities and Exchange board of India.pdf" },
          { id: "2", name: "Bank regulation 2024-2025.pdf" },
          { id: "3", name: "Bank regulation 2024-2025.pdf" },
          { id: "4", name: "Bank regulation 2024-2025.pdf" },
          { id: "5", name: "Bank regulation 2024-2025.pdf" },
          { id: "6", name: "Bank regulation 2024-2025.pdf" },
        ],
        confidence: 5,
      }      
      setMessages((prev) => [...prev, response])
    }, 1000)
  }

  return (
    <div className="ml-60 h-full p-12 bg-[#FFFCF9] flex flex-col">
      <div className="max-w-3xl mx-auto flex flex-col flex-grow space-y-4">
        {/* Chat messages container with smooth motion scrolling */}
        <motion.div
          ref={chatContainerRef}
          className="flex-grow min-h-[400px] max-h-[600px] overflow-y-auto space-y-4 no-scrollbar"
          animate={{ scrollTop: chatContainerRef.current?.scrollHeight || 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              type={message.type}
              content={message.content}
              sources={message.sources}
              confidence={message.confidence}
            />
          ))}
        </motion.div>

        {/* Suggestions */}
        <div className="flex flex-wrap justify-end gap-2 pb-6">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSubmit(suggestion.text)}
              className="bg-gray-100/80 hover:bg-gray-200/80 rounded-full px-4 py-2 text-sm text-gray-800"
            >
              {suggestion.text}
            </button>
          ))}
        </div>
      </div>

      {/* Chat input (Sticky at the bottom) */}
      <div className="sticky bottom-0 bg-[#FFFCF9] py-2">
        <ChatInput onSubmit={handleSubmit} />
      </div>
    </div>
  )
}