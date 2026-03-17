"use client";
import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUp, Paperclip, X, Mic, Globe, BrainCog, FolderCode, StopCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

// ---------- Textarea ----------
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} rows={1} className={cn("flex w-full bg-transparent px-3 py-2.5 text-base text-gray-100 placeholder:text-gray-400 focus:outline-none disabled:opacity-50 min-h-[44px] resize-none", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";

// ---------- Tooltip ----------
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content ref={ref} sideOffset={sideOffset} className={cn("z-50 rounded-md border border-[#333] bg-[#1F2023] px-3 py-1.5 text-sm text-white shadow-md", className)} {...props} />
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// ---------- Dialog ----------
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(
  ({ className, ...props }, ref) => <DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm", className)} {...props} />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 w-full max-w-[90vw] md:max-w-[800px] -translate-x-[50%] -translate-y-[50%] border border-[#333] bg-[#1F2023] shadow-xl rounded-2xl p-0", className)} {...props}>
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 z-10 rounded-full bg-[#2E3033]/80 p-2 hover:bg-[#2E3033]"><X className="h-5 w-5 text-gray-200" /><span className="sr-only">Close</span></DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
  ({ className, ...props }, ref) => <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-gray-100", className)} {...props} />
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// ---------- Button ----------
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <button ref={ref} className={cn(
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
    variant === "default" ? "bg-white hover:bg-white/80 text-black" : "bg-transparent hover:bg-[#3A3A40] text-gray-400 hover:text-gray-200",
    size === "icon" ? "h-8 w-8 rounded-full" : "h-10 px-4 py-2",
    className
  )} {...props} />
));
Button.displayName = "Button";

// ---------- VoiceRecorder ----------
const VoiceRecorder = ({ isRecording, onStartRecording, onStopRecording }: { isRecording: boolean; onStartRecording: () => void; onStopRecording: (d: number) => void }) => {
  const [time, setTime] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  React.useEffect(() => {
    if (isRecording) { onStartRecording(); timerRef.current = setInterval(() => setTime(t => t + 1), 1000); }
    else { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } onStopRecording(time); setTime(0); }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);
  const fmt = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
  if (!isRecording) return null;
  return (
    <div className="flex flex-col items-center py-3">
      <div className="flex items-center gap-2 mb-3"><div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /><span className="font-mono text-sm text-white/80">{fmt(time)}</span></div>
      <div className="flex items-center justify-center gap-0.5 px-4 h-10 w-full">
        {Array.from({ length: 28 }).map((_, i) => <div key={i} className="w-0.5 rounded-full bg-white/50 animate-pulse" style={{ height: `${Math.max(15, Math.random() * 100)}%`, animationDelay: `${i * 0.05}s` }} />)}
      </div>
    </div>
  );
};

// ---------- PromptInput Context ----------
interface PIC { isLoading: boolean; value: string; setValue: (v: string) => void; maxHeight: number | string; onSubmit?: () => void; disabled?: boolean; }
const PromptInputContext = React.createContext<PIC>({ isLoading: false, value: "", setValue: () => {}, maxHeight: 240 });
const usePromptInput = () => React.useContext(PromptInputContext);

// ---------- PromptInput ----------
interface PromptInputProps { isLoading?: boolean; value?: string; onValueChange?: (v: string) => void; maxHeight?: number | string; onSubmit?: () => void; children: React.ReactNode; className?: string; disabled?: boolean; onDragOver?: (e: React.DragEvent) => void; onDragLeave?: (e: React.DragEvent) => void; onDrop?: (e: React.DragEvent) => void; }
const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(({ className, isLoading = false, maxHeight = 240, value, onValueChange, onSubmit, children, disabled = false, onDragOver, onDragLeave, onDrop }, ref) => {
  const [internal, setInternal] = React.useState(value || "");
  return (
    <TooltipProvider>
      <PromptInputContext.Provider value={{ isLoading, value: value ?? internal, setValue: onValueChange ?? setInternal, maxHeight, onSubmit, disabled }}>
        <div ref={ref} className={cn("rounded-3xl border border-[#444] bg-[#1F2023] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300", isLoading && "border-red-500/70", className)} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>{children}</div>
      </PromptInputContext.Provider>
    </TooltipProvider>
  );
});
PromptInput.displayName = "PromptInput";

const PromptInputTextarea = ({ className, onKeyDown, placeholder, ...props }: { className?: string; onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>; placeholder?: string }) => {
  const { value, setValue, maxHeight, onSubmit, disabled } = usePromptInput();
  const ref = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (!ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = typeof maxHeight === "number" ? `${Math.min(ref.current.scrollHeight, maxHeight)}px` : `min(${ref.current.scrollHeight}px, ${maxHeight})`;
  }, [value, maxHeight]);
  return <Textarea ref={ref} value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onSubmit?.(); } onKeyDown?.(e); }} className={cn("text-base", className)} disabled={disabled} placeholder={placeholder} {...props} />;
};

const PromptInputActions = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("flex items-center gap-2", className)} {...props}>{children}</div>;
const PromptInputAction = ({ tooltip, children, side = "top" }: { tooltip: React.ReactNode; children: React.ReactNode; side?: "top" | "bottom" | "left" | "right" }) => {
  const { disabled } = usePromptInput();
  return <Tooltip><TooltipTrigger asChild disabled={disabled}>{children}</TooltipTrigger><TooltipContent side={side}>{tooltip}</TooltipContent></Tooltip>;
};

// ---------- Main export ----------
interface PromptInputBoxProps { onSend?: (message: string, files?: File[]) => void; isLoading?: boolean; placeholder?: string; className?: string; }
export const PromptInputBox = React.forwardRef<HTMLDivElement, PromptInputBoxProps>(({ onSend = () => {}, isLoading = false, placeholder = "Type your message here...", className }, ref) => {
  const [input, setInput] = React.useState("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [filePreviews, setFilePreviews] = React.useState<Record<string, string>>({});
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showThink, setShowThink] = React.useState(false);
  const uploadRef = React.useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/") || file.size > 10 * 1024 * 1024) return;
    setFiles([file]);
    const reader = new FileReader();
    reader.onload = e => setFilePreviews({ [file.name]: e.target?.result as string });
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!input.trim() && files.length === 0) return;
    onSend(input, files);
    setInput(""); setFiles([]); setFilePreviews({});
  };

  return (
    <div ref={ref} className={cn("w-full max-w-2xl mx-auto", className)}>
      <PromptInput isLoading={isLoading} value={input} onValueChange={setInput} onSubmit={handleSubmit}
        onDragOver={e => e.preventDefault()} onDragLeave={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); Array.from(e.dataTransfer.files).forEach(processFile); }}
      >
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex gap-2 px-3 pt-2 pb-1 flex-wrap">
              {files.map(file => (
                <div key={file.name} className="relative group">
                  {filePreviews[file.name] && (
                    <button onClick={() => setSelectedImage(filePreviews[file.name])}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={filePreviews[file.name]} alt={file.name} className="w-16 h-16 rounded-lg object-cover" />
                    </button>
                  )}
                  <button onClick={() => { setFiles(f => f.filter(fi => fi.name !== file.name)); setFilePreviews(p => { const n = { ...p }; delete n[file.name]; return n; }); }} className="absolute -top-1.5 -right-1.5 bg-[#444] rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"><X size={10} className="text-white" /></button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {isRecording ? <VoiceRecorder isRecording={isRecording} onStartRecording={() => {}} onStopRecording={() => setIsRecording(false)} /> : (
          <PromptInputTextarea placeholder={placeholder} className="px-3 py-2.5 min-h-[44px] max-h-[200px]" />
        )}

        <PromptInputActions className="px-2 pb-1.5 pt-0.5 justify-between">
          <div className="flex items-center gap-1">
            <PromptInputAction tooltip="Attach image">
              <Button variant="ghost" size="icon" onClick={() => uploadRef.current?.click()}><Paperclip size={16} /></Button>
            </PromptInputAction>
            <PromptInputAction tooltip="Web search">
              <Button variant="ghost" size="icon" className={showSearch ? "text-blue-400 bg-blue-500/10" : ""} onClick={() => { setShowSearch(v => !v); setShowThink(false); }}><Globe size={16} /></Button>
            </PromptInputAction>
            <PromptInputAction tooltip="Extended thinking">
              <Button variant="ghost" size="icon" className={showThink ? "text-purple-400 bg-purple-500/10" : ""} onClick={() => { setShowThink(v => !v); setShowSearch(false); }}><BrainCog size={16} /></Button>
            </PromptInputAction>
            <PromptInputAction tooltip="Canvas">
              <Button variant="ghost" size="icon"><FolderCode size={16} /></Button>
            </PromptInputAction>
            <PromptInputAction tooltip={isRecording ? "Stop" : "Voice"}>
              <Button variant="ghost" size="icon" className={isRecording ? "text-red-400" : ""} onClick={() => setIsRecording(v => !v)}>
                {isRecording ? <StopCircle size={16} /> : <Mic size={16} />}
              </Button>
            </PromptInputAction>
          </div>
          <Button size="icon" disabled={!input.trim() && files.length === 0 && !isLoading} onClick={isLoading ? undefined : handleSubmit}>
            {isLoading ? <StopCircle size={16} /> : <ArrowUp size={16} />}
          </Button>
        </PromptInputActions>
      </PromptInput>

      <input ref={uploadRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) processFile(f); e.target.value = ""; }} />
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent>
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedImage} alt="Preview" className="w-full max-h-[80vh] object-contain rounded-2xl" />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
});
PromptInputBox.displayName = "PromptInputBox";
