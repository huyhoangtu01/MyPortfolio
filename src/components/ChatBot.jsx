import React, { useEffect, useRef, useState } from "react";

// A rule-based chatbot: no AI, no API key, no backend. It runs entirely in the
// browser by matching keywords in the visitor's question to answers below.
// To teach it something new, add an entry to INTENTS.

const MAX_CHARS = 300;

const GREETING =
  "Hi! I'm Huy's portfolio assistant. Ask me about his projects, skills, experience, education or how to contact him.";

const FALLBACK =
  "Sorry, I don't have an answer for that. Try one of the topics below, or reach Huy directly through the contact form.";

// Skills Huy lists on his site. Used to answer "Does he know X?" questions.
// Keys are lowercase words a visitor might type; values are the display name.
const SKILLS = {
  typescript: "TypeScript", ts: "TypeScript",
  javascript: "JavaScript", js: "JavaScript",
  react: "React", reactjs: "React",
  "next.js": "Next.js", nextjs: "Next.js", next: "Next.js",
  redux: "Redux Toolkit",
  tailwind: "TailwindCSS", tailwindcss: "TailwindCSS",
  pwa: "PWA",
  "node.js": "Node.js", nodejs: "Node.js", node: "Node.js",
  postgresql: "PostgreSQL", postgres: "PostgreSQL",
  prisma: "Prisma",
  rest: "REST APIs", api: "REST APIs", apis: "REST APIs",
  firebase: "Firebase Auth",
  twilio: "Twilio",
  python: "Python",
  sql: "SQL", sqlite: "SQLite3", sqlite3: "SQLite3",
  vitest: "Vitest",
  playwright: "Playwright",
  java: "Java",
  "c++": "C++", cpp: "C++",
  c: "C",
  vite: "Vite",
  itil: "ITIL 4",
};

// Common tech a visitor might ask about that is NOT on Huy's site, so the bot
// can say "not listed" instead of falling back to "I don't understand".
const UNLISTED_TECH = [
  "rust", "golang", "ruby", "rails", "php", "laravel", "swift", "kotlin",
  "c#", "csharp", ".net", "dotnet", "angular", "vue", "svelte", "django",
  "flask", "spring", "springboot", "mongodb", "mongo", "mysql", "redis",
  "graphql", "aws", "azure", "gcp", "docker", "kubernetes", "k8s", "terraform",
  "flutter", "unity", "scala", "perl", "matlab",
];

const INTENTS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup", "good morning", "good afternoon", "good evening"],
    answer: "Hello! What would you like to know about Huy? I can tell you about his projects, skills, experience or education.",
    exact: true,
  },
  {
    id: "zudo",
    keywords: ["zudo", "payment", "splitting", "split", "event app", "biggest project", "main project"],
    answer:
      "Huy's main project is a full-stack event and payment-splitting app he built as a contract developer at Zudo (Oct 2025 - Mar 2026). It handles itemized expense splitting, payment links, payout tracking, phone/email sign-in and SMS payment reminders. It has 60+ REST API routes and a 17-table PostgreSQL database, built with Next.js, React, TypeScript, Prisma, Firebase and Twilio, and shipped as an installable PWA.",
  },
  {
    id: "projects",
    keywords: ["project", "projects", "built", "build", "made", "portfolio", "work samples", "show me", "github"],
    answer:
      "Huy has two featured projects: (1) a full-stack event and payment-splitting app for Zudo, built with Next.js, React, TypeScript and PostgreSQL, and (2) this portfolio site, built with React, TailwindCSS and Vite. Ask me about Zudo for more detail, or scroll to the Projects section.",
  },
  {
    id: "frontend",
    keywords: ["frontend", "front end", "front-end", "ui"],
    answer: "On the frontend, Huy works with TypeScript, JavaScript, React, Next.js, Redux Toolkit, TailwindCSS and PWAs.",
  },
  {
    id: "backend",
    keywords: ["backend", "back end", "back-end", "server", "database", "databases", "testing", "test"],
    answer:
      "On the backend, Huy works with Node.js, PostgreSQL, Prisma, REST APIs, Firebase Auth, Twilio, Python and SQL. For testing he uses Vitest and Playwright.",
  },
  {
    id: "skills",
    keywords: ["skill", "skills", "tech stack", "stack", "technologies", "technology", "languages", "language", "tools", "know", "good at"],
    answer:
      "Huy is a full-stack developer. Frontend: TypeScript, JavaScript, React, Next.js, Redux Toolkit, TailwindCSS, PWA. Backend & testing: Node.js, PostgreSQL, Prisma, REST APIs, Firebase Auth, Twilio, Python, SQL, Vitest, Playwright. He has also studied Java, C++ and C.",
  },
  {
    id: "ai",
    keywords: ["ai", "outlier", "remotask", "trainer", "training", "llm", "machine learning"],
    answer:
      "Huy spent 16 months as a remote AI Coding Trainer: at Outlier AI (Oct 2023 - Oct 2024) he labeled and reviewed code and debugged AI-generated solutions in Python, JavaScript, C++ and SQL, and at Remotask (Jun - Oct 2023) he helped refine task guidelines and reported issues to improve the model's coding skills.",
  },
  {
    id: "experience",
    keywords: ["experience", "work", "job", "jobs", "worked", "career", "employment", "history", "previous"],
    answer:
      "Huy's experience: Full-Stack Developer (Contract) at Zudo, Oct 2025 - Mar 2026; AI Coding Trainer (Contract) at Outlier AI, Oct 2023 - Oct 2024; and AI Coding Trainer (Contract) at Remotask, Jun - Oct 2023. Ask about any of them for details.",
  },
  {
    id: "education",
    keywords: ["education", "school", "degree", "college", "university", "study", "studying", "student", "wgu", "graduate", "graduation", "tidewater", "major"],
    answer:
      "Huy is earning a B.S. in Computer Science at Western Governors University (expected December 2026). He already holds an A.S. in Computer Science from Tidewater Community College (May 2023).",
  },
  {
    id: "certification",
    keywords: ["certification", "certifications", "certificate", "certified", "itil"],
    answer: "Huy holds the ITIL 4 Foundation certification in IT Service Management (July 2025).",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "hire", "hiring", "message", "talk", "interview", "available", "availability", "connect", "linkedin", "resume", "cv"],
    answer:
      "The best way to reach Huy is the contact form in the Contact section of this page. Leave your name, email and a message and he'll get back to you.",
    action: "contact",
  },
  {
    id: "about",
    keywords: ["who", "yourself", "huy", "introduce", "summary", "background", "about him", "about huy"],
    answer:
      "Huy Tran is a full-stack developer and Computer Science student at WGU. He built a production-style event and payment-splitting app in Next.js, React and TypeScript, and has 16 months of experience evaluating and debugging AI-generated code.",
  },
  {
    id: "bot",
    keywords: ["are you", "bot", "robot", "chatbot", "real person", "human"],
    answer: "I'm a simple chatbot that answers common questions about Huy. For anything else, the contact form goes straight to him.",
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "thx", "ty", "appreciate", "great", "cool", "awesome", "nice"],
    answer: "You're welcome! Anything else you'd like to know about Huy?",
    exact: true,
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "later", "cya"],
    answer: "Thanks for stopping by! Feel free to use the contact form if you'd like to reach Huy.",
    exact: true,
  },
];

const SUGGESTIONS = ["Projects", "Skills", "Experience", "Education", "Contact"];

const normalize = (text) =>
  " " + text.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, " ").replace(/\s+/g, " ").trim() + " ";

// Whole-word match, so "hi" doesn't match inside "this".
const hasPhrase = (text, phrase) => text.includes(" " + phrase + " ");

const words = (text) => text.trim().split(" ").map((w) => w.replace(/\.$/, ""));

function findSkillAnswer(text) {
  const asking = /\b(know|knows|use|uses|used|experience|familiar|work with|worked with|skilled|proficient|can he|does he|do you)\b/.test(text);
  if (!asking) return null;

  const found = [...new Set(words(text).map((w) => SKILLS[w]).filter(Boolean))];
  // "c" alone is too easy to trigger by accident, so only count it if it's the only match.
  const known = found.length > 1 ? found.filter((s) => s !== "C") : found;
  if (known.length) {
    return `Yes. ${known.join(", ")} ${known.length > 1 ? "are" : "is"} on Huy's list of skills. Ask about "skills" to see everything he works with.`;
  }

  const unlisted = words(text).find((w) => UNLISTED_TECH.includes(w));
  if (unlisted) {
    return `${unlisted.charAt(0).toUpperCase() + unlisted.slice(1)} isn't listed among Huy's skills. His main stack is TypeScript, React, Next.js, Node.js and PostgreSQL. For anything specific, ask him through the contact form.`;
  }
  return null;
}

export function getReply(input) {
  const text = normalize(input);

  const skillAnswer = findSkillAnswer(text);
  if (skillAnswer) return { answer: skillAnswer };

  // Score each topic by how many of its keywords appear; longer phrases count more.
  let best = null;
  let bestScore = 0;
  const wordCount = words(text).length;
  for (const intent of INTENTS) {
    // Small-talk topics ("hi", "thanks") only count for short messages, so
    // "hi, what has he built?" is answered as a projects question.
    if (intent.exact && wordCount > 4) continue;
    const score = intent.keywords.reduce(
      (sum, k) => (hasPhrase(text, k) ? sum + k.split(" ").length : sum),
      0
    );
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best ? { answer: best.answer, action: best.action } : { answer: FALLBACK, fallback: true };
}

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", content: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const send = (text) => {
    const content = text.trim();
    if (!content || typing) return;

    setMessages((prev) => [...prev, { role: "user", content }]);
    setInput("");
    setTyping(true);

    // A short pause so the reply feels conversational.
    timerRef.current = setTimeout(() => {
      const reply = getReply(content);
      setMessages((prev) => [...prev, { role: "bot", content: reply.answer, action: reply.action, fallback: reply.fallback }]);
      setTyping(false);
    }, 500);
  };

  const goToContact = () => {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const last = messages[messages.length - 1];
  const showSuggestions = !typing && last.role === "bot" && (messages.length === 1 || last.fallback);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat about Huy"
          className="fixed z-50 bottom-24 right-4 left-4 sm:left-auto sm:w-96 h-[min(32rem,calc(100vh-8rem))] flex flex-col rounded-xl border border-white/10 bg-[#0a0b0a]/95 backdrop-blur-lg shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <p className="font-bold text-white">
                Ask about <span className="text-blue-500">Huy</span>
              </p>
              <p className="text-xs text-gray-400">Quick answers about his work</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-gray-400 hover:text-white transition-colors text-2xl leading-none px-1"
            >
              &times;
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 text-gray-200 border border-white/10"
                  }`}
                >
                  {m.content}
                </div>
                {m.action === "contact" && (
                  <button
                    onClick={goToContact}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Go to contact form →
                  </button>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-gray-400">
                  <span className="animate-pulse">Typing…</span>
                </div>
              </div>
            )}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 p-3 border-t border-white/10"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={MAX_CHARS}
              placeholder="Type a question…"
              aria-label="Your question"
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="bg-blue-500 text-white px-4 rounded text-sm font-medium transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-40 disabled:hover:shadow-none"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed z-50 bottom-6 right-4 h-14 w-14 rounded-full bg-blue-500 text-white text-2xl shadow-lg transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center"
      >
        {open ? "×" : "💬"}
      </button>
    </>
  );
};
