type TerminalLineProps = {
  kind: "input" | "output";
  content: string;
};

export default function TerminalLine({ kind, content }: TerminalLineProps) {
  if (kind === "input") {
    return (
      <div className="flex gap-2">
        <span className="shrink-0 text-amber-300">aminci@lab:~$</span>
        <span className="text-amber-100">{content}</span>
      </div>
    );
  }

  return (
    <pre className="whitespace-pre-wrap break-words text-amber-100/85">
      {content}
    </pre>
  );
}