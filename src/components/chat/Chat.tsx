  'use client'

  import { useState } from 'react'
  import { Send, Paperclip } from 'lucide-react'
  import { cn } from '@/lib/utils'

  interface ChatMessage {
    id: string
    content: string
    sender: 'user' | 'assistant'
    timestamp: Date
    documents?: Array<{ id: string; name: string }>
  }

  interface ChatProps {
    onDocumentSelect: (documentId: string) => void
    className?: string
  }

  export function Chat({ onDocumentSelect, className }: ChatProps) {
    const [messages, setMessages] = useState<ChatMessage[]>([
      {
        id: '1',
        content: 'Hello! How can I help you today?',
        sender: 'assistant',
        timestamp: new Date(),
      },
      {
        id: '2',
        content: 'I need help understanding this contract.',
        sender: 'user',
        timestamp: new Date(),
        documents: [{ id: 'doc1', name: 'Contract.pdf' }],
      },
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)

    return (
      <div className={cn(
        "w-[20vw] h-[80vh] mx-auto relative",
        className
      )}>
        {/* Messages Container */}
        <div className="h-[calc(100%-70px)] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[70%] p-3",
                  message.sender === 'user' 
                    ? "bg-[#bbdefb] rounded-[12px_12px_4px_12px]" 
                    : "bg-[#e3f2fd] rounded-[12px_12px_12px_4px]"
                )}
              >
                <p>{message.content}</p>
                {message.documents && (
                  <div className="mt-2 space-y-1">
                    {message.documents.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => onDocumentSelect(doc.id)}
                        className="text-sm text-blue-600 underline block"
                      >
                        {doc.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center space-x-2 w-10">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: `${dot * 0.2}s` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 w-full p-4">
          <div className="relative flex items-center bg-white border border-gray-200 rounded-3xl shadow-lg px-4 py-3">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Paperclip className="w-5 h-5 text-gray-500" />
            </button>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 mx-2 bg-transparent focus:outline-none"
            />
            
            <button 
              className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors"
              onClick={() => {
                if (input.trim()) {
                  setMessages([...messages, {
                    id: Date.now().toString(),
                    content: input,
                    sender: 'user',
                    timestamp: new Date()
                  }]);
                  setInput('');
                }
              }}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }