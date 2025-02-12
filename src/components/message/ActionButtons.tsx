import { useState } from "react";
import { MessageSquare, Eye, ThumbsUp, ThumbsDown, RotateCw, Copy, Download } from "lucide-react";

export function ActionButtons() {
    const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

    return (
        <div className="flex items-center justify-between w-full mt-3">
            {/* Left Side: Ask Sources & Visualize */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F2ED] text-[#9C8F7A] text-sm font-medium">
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

            {/* Right Side: Action Icons */}
            <div className="flex items-center gap-2">
                {/* Thumbs Up Button */}
                <button
                    className={`p-2 rounded-md transition-all ${
                        feedback === "up" ? "bg-green-200 text-green-600" : "bg-[#F7F2ED] text-[#9C8F7A] hover:bg-[#EAE0D5]"
                    }`}
                    onClick={() => setFeedback(feedback === "up" ? null : "up")}
                >
                    <ThumbsUp className="h-4 w-4" />
                </button>

                {/* Thumbs Down Button */}
                <button
                    className={`p-2 rounded-md transition-all ${
                        feedback === "down" ? "bg-red-200 text-red-600" : "bg-[#F7F2ED] text-[#9C8F7A] hover:bg-[#EAE0D5]"
                    }`}
                    onClick={() => setFeedback(feedback === "down" ? null : "down")}
                >
                    <ThumbsDown className="h-4 w-4" />
                </button>

                {/* Other Action Buttons */}
                {[RotateCw, Copy, Download].map((Icon, index) => (
                    <button key={index} className="p-2 rounded-md bg-[#F7F2ED] hover:bg-[#EAE0D5] transition-all">
                        <Icon className="h-4 w-4 text-[#9C8F7A]" />
                    </button>
                ))}
            </div>
        </div>
    );
}
