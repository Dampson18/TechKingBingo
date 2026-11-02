import { useState } from "react";
import { Bot, MessageCircleMore, SendHorizonal, Sparkles, X } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

const quickPrompts = [
  "What services do you offer?",
  "How can I contact TechKing Bingo?",
  "What is The Elle Corporations?",
  "Do you do website maintenance?",
];

const knowledgeBase = [
  {
    keywords: ["service", "services", "what do you do", "help"] ,
    answer:
      "TechKing Bingo helps businesses build website systems, branding, SEO, hosting support, web redesigns, AI chatbot integration, digital marketing, and business automation.",
  },
  {
    keywords: ["contact", "email", "phone", "whatsapp", "call", "reach"],
    answer:
      "You can reach TechKing Bingo via email: techkingbingo@gmail.com, phone: 059 299 8435, and WhatsApp: +233592998435.",
  },
  {
    keywords: ["elle corporations", "elle", "corporation"],
    answer:
      "The Elle Corporations is the parent brand behind TechKing Bingo, founded by King-Bi Emmanuella in 2025 to help Ghanaian businesses grow online and become more productive.",
  },
  {
    keywords: ["maintenance", "update", "monthly maintenance", "support"],
    answer:
      "Yes. We offer website maintenance and updates, performance monitoring, backups, technical support, and monthly care packages for clients who want their site to stay healthy and current.",
  },
  {
    keywords: ["website", "site", "build", "redesign"],
    answer:
      "We create custom corporate, portfolio, e-commerce, and business websites and also redesign aging websites to improve appearance, performance, and customer trust.",
  },
  {
    keywords: ["vision", "mission", "why"],
    answer:
      "Our vision is to become a leading web development brand in Africa and expand globally. Our mission is to empower businesses with innovative, user-friendly websites that drive growth and visibility online.",
  },
  {
    keywords: ["team", "founder", "ceo", "who"],
    answer:
      "The core team includes King-Bi Emmanuella as CEO and Founder, Kelvin Dampson as Web Developer, and Kofi Amoah as Graphics Lead.",
  },
  {
    keywords: ["ai", "chatbot", "automation"],
    answer:
      "We also support AI chatbot integration, business automation, custom software, cloud solutions, cybersecurity, UI/UX design, and AI-powered business solutions.",
  },
];

function getReply(input: string) {
  const text = input.trim().toLowerCase();

  if (!text) {
    return "Hello! I can tell you about TechKing Bingo, our services, pricing, and contact details.";
  }

  for (const item of knowledgeBase) {
    const matched = item.keywords.some((keyword) => text.includes(keyword));
    if (matched) {
      return item.answer;
    }
  }

  if (text.includes("price") || text.includes("cost") || text.includes("pricing")) {
    return "Our pricing depends on project scope. We offer starter websites, business websites, redesigns, e-commerce builds, and custom web solutions with tailored quotes.";
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hello! I’m the TechKing Bingo assistant. Ask me about our services, mission, team, or how to get started.";
  }

  return "I can help with website design, branding, digital strategy, support, and contact details. You can also ask about our vision, mission, team, or AI solutions.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I’m the TechKing Bingo assistant. Ask me anything about The Elle Corporations, our services, or how to work with us.",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const botReply = getReply(userMessage);

    setMessages((current) => [
      ...current,
      { role: "user", text: userMessage },
      { role: "bot", text: botReply },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="mb-4 w-[min(92vw,360px)] overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-[0_30px_80px_rgba(17,17,17,0.18)]">
          <div className="flex items-center justify-between border-b border-dark/5 bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold">TechKing Bingo AI</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">Online assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[330px] space-y-3 overflow-y-auto bg-beige/30 p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-primary text-white"
                      : "bg-white text-dark ring-1 ring-dark/5"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-dark/5 bg-white p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setInput(prompt)}
                  className="rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary transition hover:bg-primary/10"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-dark/10 bg-beige/30 px-3 py-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Type your question..."
                className="w-full bg-transparent text-sm text-dark placeholder:text-dark/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={sendMessage}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary/90"
                aria-label="Send message"
              >
                <SendHorizonal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_20px_50px_rgba(239,68,68,0.4)] transition hover:scale-105"
        aria-label="Toggle chatbot"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircleMore className="h-6 w-6" />}
      </button>
      <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-dark">
        <Sparkles className="h-3 w-3" />
      </div>
    </div>
  );
}
