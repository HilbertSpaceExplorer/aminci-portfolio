import { useEffect, useRef, useState } from "react";
import type { SyntheticEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TerminalLine from "./TerminalLine";
import { runCommand } from "./commandRegistry";

type HistoryItem = {
  id: number;
  kind: "input" | "output";
  content: string;
};

type TerminalProps = {
  embedded?: boolean;
  compact?: boolean;
  className?: string;
};

const initialHistory: HistoryItem[] = [
  {
    id: 1,
    kind: "output",
    content: `Welcome to Aminci Robotics Lab.

Type "help" to see available commands.
Try: about, projects, thesis, skills, contact`,
  },
];

export default function Terminal({
  embedded = false,
  compact = false,
  className = "",
}: TerminalProps) {
  const navigate = useNavigate();

  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const terminalBody = terminalBodyRef.current;
    if (!terminalBody) return;

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }, [history]);

  function submitCommand(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();

    const currentInput = input.trim();
    if (!currentInput) return;

    const result = runCommand(currentInput);

    if (result.type === "clear") {
      setHistory(initialHistory);
      setInput("");
      return;
    }

    if (result.type === "link") {
      window.open(result.content, "_blank");

      setHistory((previous) => [
        ...previous,
        {
          id: Date.now(),
          kind: "input",
          content: currentInput,
        },
        {
          id: Date.now() + 1,
          kind: "output",
          content: `Opening: ${result.content}`,
        },
      ]);

      setCommandHistory((previous) => [...previous, currentInput]);
      setHistoryIndex(null);
      setInput("");
      return;
    }

    if (result.type === "route") {
      setHistory((previous) => [
        ...previous,
        {
          id: Date.now(),
          kind: "input",
          content: currentInput,
        },
        {
          id: Date.now() + 1,
          kind: "output",
          content: `Opening project page: ${result.content}`,
        },
      ]);

      setCommandHistory((previous) => [...previous, currentInput]);
      setHistoryIndex(null);
      setInput("");

      navigate(result.content);
      return;
    }

    setHistory((previous) => [
      ...previous,
      {
        id: Date.now(),
        kind: "input",
        content: currentInput,
      },
      {
        id: Date.now() + 1,
        kind: "output",
        content: result.content,
      },
    ]);

    setCommandHistory((previous) => [...previous, currentInput]);
    setHistoryIndex(null);
    setInput("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === null) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  }

  const terminalHeight = compact ? "h-full" : "h-[420px]";

  return (
    <motion.section
      initial={{ opacity: embedded ? 1 : 0, y: embedded ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={
        embedded
          ? `h-full overflow-hidden rounded-xl bg-[#020617] text-cyan-100 ${className}`
          : `overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/70 shadow-2xl shadow-cyan-950/40 backdrop-blur ${className}`
      }
      onClick={() => inputRef.current?.focus()}
    >
      {!embedded && (
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs text-slate-400">
            aminci@robotics-lab — terminal portfolio
          </span>
        </div>
      )}

      <div
        ref={terminalBodyRef}
        className={`${terminalHeight} overflow-y-auto p-5 text-sm leading-relaxed md:text-base`}
      >
        <div className="space-y-4">
          {history.map((item) => (
            <TerminalLine
              key={item.id}
              kind={item.kind}
              content={item.content}
            />
          ))}

          <form onSubmit={submitCommand} className="flex gap-2">
            <span className="shrink-0 text-cyan-300">aminci@lab:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              className="min-w-0 flex-1 bg-transparent text-cyan-100 outline-none"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
          </form>
        </div>
      </div>
    </motion.section>
  );
}