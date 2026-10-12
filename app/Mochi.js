"use client";

import { useState } from "react";

// Mochi, the desktop pig, drawn the way it is in real life: a handful of square pixels.
// p = pink, d = deep pink, k = ink, w = eye glint.
const FACE = [
  ".dd......dd.",
  ".dpp....ppd.",
  ".pppppppppp.",
  "pppppppppppp",
  "ppkwppppkwpp",
  "ppkkppppkkpp",
  "pppddddddppp",
  "pppdkddkdppp",
  "pppddddddppp",
  "pppppppppppp",
];

const COLORS = { p: "#F29BB0", d: "#C9667F", k: "#14202B", w: "#FFFFFF" };

const LINES = [
  "oink. he's open to work.",
  "I live on his desktop. He built me.",
  "He trusts his own test over a benchmark.",
  "Ask him about the talking robot vacuums.",
  "I only act after he says yes. Good policy.",
];

export default function Mochi() {
  const [hops, setHops] = useState(0);
  const said = hops > 0 ? LINES[(hops - 1) % LINES.length] : null;

  return (
    <div className="pointer-events-none absolute -top-[54px] left-8 z-10 flex items-end gap-3 sm:left-12">
      <button
        type="button"
        onClick={() => setHops((n) => n + 1)}
        aria-label="Poke Mochi the pig"
        className="pointer-events-auto relative block cursor-pointer rounded-md bg-transparent p-0"
      >
        <svg
          key={hops}
          viewBox="0 0 12 10"
          width="72"
          height="60"
          shapeRendering="crispEdges"
          className={hops > 0 ? "mochi-hop" : undefined}
          aria-hidden="true"
        >
          {FACE.flatMap((row, y) =>
            [...row].map((c, x) =>
              c === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={COLORS[c]} />
            )
          )}
        </svg>
        {/* Trotters resting on the frame's edge. */}
        <span className="absolute -bottom-[7px] left-[9px] h-[9px] w-[15px] rounded-sm bg-pig ring-2 ring-pigdeep/40" />
        <span className="absolute -bottom-[7px] right-[9px] h-[9px] w-[15px] rounded-sm bg-pig ring-2 ring-pigdeep/40" />
      </button>
      {said ? (
        <p
          key={hops}
          role="status"
          className="bubble-in mb-6 max-w-[15rem] rounded-2xl rounded-bl-sm border-2 border-ink bg-white px-3 py-2 font-display text-sm font-semibold leading-snug text-ink shadow-[3px_3px_0_#14202B]"
        >
          {said}
        </p>
      ) : null}
    </div>
  );
}
