"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChatInput } from "@/components/chat-input/chat-input";
import { Message } from "@/components/message/message";

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
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([
    { id: "1", text: "What must be included in a legal demand notice under Section 138?" },
    { id: "2", text: "What happens if the drawer ignores the notice?" },
  ]);

  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatContainerRef.current) {
        requestAnimationFrame(() => {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        });
    }
}, [messages]); // Ensures scrolling works for every new message


  const handleSubmit = (query: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: query,
      type: "user",
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
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

        `,
        type: "assistant",
        sources: [
          { id: "1", name: "Securities and Exchange Board of India.pdf" },
          { id: "2", name: "Bank Regulation 2024-2025.pdf" },
        ],
        confidence: 5,
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };


  return (
    <div className="ml-60 p-12 bg-[#FFFCF9] flex flex-col h-full">
      <div className="max-w-3xl mx-auto flex flex-col flex-grow space-y-4">
        {/* Chat messages container */}
        <motion.div
          ref={chatContainerRef}
          className="flex-grow min-h-[50%] max-h-[80%] overflow-y-auto space-y-4 no-scrollbar"
          style={{paddingBottom: "10px", wordBreak: "break-word", whiteSpace: "pre-wrap", overflowAnchor: "auto" }}
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
              className="bg-[#F7F2ED] hover:bg-gray-200/80 rounded-[10px] px-4 py-2 text-[15px] text-gray-800"
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
  );
}
