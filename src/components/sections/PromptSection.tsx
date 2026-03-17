"use client";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";

export function PromptSection() {
  return (
    <section
      className="w-full py-24 px-6 flex flex-col items-center gap-8"
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <h2
        className="text-center text-sm tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Google Sans Flex', sans-serif" }}
      >
        Try the AI assistant
      </h2>
      <PromptInputBox placeholder="Ask Antigravity anything..." />
    </section>
  );
}
