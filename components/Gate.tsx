"use client";

import { useEffect, useRef, useState } from "react";

const options = [
  { value: "bees", label: "bees" },
  { value: "laughter", label: "laughter" },
  { value: "time", label: "time" },
  { value: "ideas", label: "ideas" },
] as const;

const STORAGE_KEY = "exist:entered";

export function Gate() {
  const [selected, setSelected] = useState<string | null>(null);
  const [rejected, setRejected] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const entering = useRef(false);

  // Skip gate on subsequent visits within the session.
  useEffect(() => {
    const already =
      typeof window !== "undefined" &&
      sessionStorage.getItem(STORAGE_KEY) === "1";
    if (already) {
      setHidden(true);
      setMounted(true);
      window.dispatchEvent(new CustomEvent("exist:entered"));
      return;
    }
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function enter() {
    if (entering.current) return;
    entering.current = true;
    sessionStorage.setItem(STORAGE_KEY, "1");
    setHidden(true);
    setTimeout(() => {
      document.body.style.overflow = "";
      const site = document.getElementById("site");
      if (site) {
        site.setAttribute("aria-hidden", "false");
        site.style.opacity = "1";
      }
      window.dispatchEvent(new CustomEvent("exist:entered"));
    }, 260);
  }

  function handle(value: string) {
    if (entering.current) return;
    setSelected(value);
    setRejected(null);
    setStatus("");

    if (value === "ideas") {
      setTimeout(enter, 520);
    } else {
      setTimeout(() => {
        setSelected(null);
        setRejected(value);
        setStatus("Declined.");
      }, 320);
    }
  }

  if (!mounted) return null;
  if (hidden) return null;

  return (
    <div
      id="gate"
      className="fixed inset-0 z-[100] flex flex-col bg-bg p-10 max-md:p-6 transition-[opacity,transform] duration-700 ease-ease"
    >
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-baseline font-serif text-[22px] leading-none tracking-tightest text-ink"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 15' }}
          aria-label="exist."
        >
          <span aria-hidden="true">exist</span>
          <span aria-hidden="true" className="logo-dot">.</span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
          Refusal SRL · MMXXVI
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-14 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          Human Verification
        </div>
        <h1
          className="mb-3.5 font-serif font-light text-[clamp(40px,6.5vw,72px)] leading-[1.02] tracking-tightest text-ink"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
        >
          Prove you are human.
        </h1>
        <p
          className="mb-[72px] font-serif italic text-[clamp(20px,2.2vw,28px)] text-ink-3"
          style={{ fontVariationSettings: '"opsz" 90, "SOFT" 100' }}
        >
          &ldquo;The Right to Kill&rdquo;
        </p>

        <div
          role="radiogroup"
          aria-label="Choose one"
          className="flex min-w-[280px] flex-col gap-0.5"
        >
          {options.map((opt) => {
            const isSelected = selected === opt.value;
            const isRejected = rejected === opt.value;
            return (
              <button
                key={opt.value}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onClick={() => handle(opt.value)}
                className={`flex items-center gap-[18px] rounded-[3px] px-[18px] py-3 font-serif text-[20px] transition-[background,color,transform] duration-[240ms] ease-ease ${
                  isSelected
                    ? "text-ink"
                    : "text-ink-2 hover:bg-bg-alt hover:text-ink"
                } ${isRejected ? "animate-[gate-shake_360ms_ease] text-ink-4" : ""}`}
              >
                <span
                  className={`relative h-3.5 w-3.5 flex-shrink-0 rounded-full border transition-colors duration-[240ms] ease-ease ${
                    isSelected ? "border-ink" : "border-ink-4"
                  }`}
                >
                  <span
                    className={`absolute inset-[3px] rounded-full bg-ink transition-transform duration-[320ms] ease-ease ${
                      isSelected ? "scale-100" : "scale-0"
                    }`}
                  />
                </span>
                {opt.label}
              </button>
            );
          })}
        </div>

        <div
          className={`mt-7 min-h-5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3 transition-opacity duration-300 ease-ease ${
            status ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          {status}
        </div>
      </div>

      <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-4">
        <span>Bucharest</span>
        <span>Identity governance for generative systems</span>
      </div>

      <style jsx>{`
        @keyframes gate-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }
      `}</style>
    </div>
  );
}
