export default function DocsCodeBlock({ code, language = "javascript" }: { code: string; language?: string }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden">
      <div
        className="px-4 py-2 text-xs"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#9aa0a6",
          fontFamily: "'Google Sans Flex', sans-serif",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {language}
      </div>
      <pre
        className="px-5 py-4 overflow-x-auto"
        style={{
          backgroundColor: "#0f0f0f",
          color: "#e0e0e0",
          fontFamily: "monospace",
          fontSize: "13px",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
