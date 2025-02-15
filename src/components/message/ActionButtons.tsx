import { useState } from "react";
import { MessageSquare, Eye, ThumbsUp, ThumbsDown, RotateCw, Copy, Download, Check } from "lucide-react";

export function ActionButtons() {
    const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("Sample text to copy").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1200); 
        });
    };

    return (
        <div className="flex items-center justify-between w-full mt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F2ED] text-[#9C8F7A] md:text-sm text-[11px] font-medium">
                <button className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4 text-[#9C8F7A]" />
                    Ask Sources
                </button>
                <span className="text-[#D3C5B1]">|</span> {/* Separator */}
                <button className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-[#9C8F7A]" />
                    Visualise
                </button>
            </div>

            <div className="flex items-center gap-2">
                {/* Thumbs Up Button */}
                <button
                    className={`p-2 rounded-md transition-all ${
                        feedback === "up" ? "bg-green-200 text-green-600" : "bg-[#F7F2ED] text-[#9C8F7A] hover:bg-[#EAE0D5]"
                    }`}
                    onClick={() => setFeedback(feedback === "up" ? null : "up")}
                >
                    <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
                </button>

                {/* Thumbs Down Button */}
                <button
                    className={`p-2 rounded-md transition-all ${
                        feedback === "down" ? "bg-red-200 text-red-600" : "bg-[#F7F2ED] text-[#9C8F7A] hover:bg-[#EAE0D5]"
                    }`}
                    onClick={() => setFeedback(feedback === "down" ? null : "down")}
                >
                    <ThumbsDown className="h-3 w-3 md:h-4 md:w-4" />
                </button>

                {/* Refresh Button */}
                <button className="p-2 rounded-md bg-[#F7F2ED] hover:bg-[#EAE0D5] transition-all">
                    <RotateCw className="h-3 w-3 md:h-4 md:w-4 text-[#9C8F7A]" />
                </button>

                {/* Copy Button with Animation */}
                <button
                    className="p-2 rounded-md bg-[#F7F2ED] hover:bg-[#EAE0D5] transition-all"
                    onClick={handleCopy}
                >
                    {copied ? <Check className="h-3 w-3 md:h-4 md:w-4 text-[#9C8F7A]" /> : <Copy className="h-3 w-3 md:h-4 md:w-4 text-[#9C8F7A]" />}
                </button>

                {/* Download Button */}
                <button className="p-2 rounded-md bg-[#F7F2ED] hover:bg-[#EAE0D5] transition-all">
                    <Download className="h-3 w-3 md:h-4 md:w-4 text-[#9C8F7A]" />
                </button>
            </div>
        </div>
    );
}
