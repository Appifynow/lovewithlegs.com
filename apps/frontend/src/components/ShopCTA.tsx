import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion, Transition } from "motion/react";

export function ShopCTA() {
  const bounceEase = (x: number) => {
  const n1 = 7.5625
  const d1 = 2.75
  if (x < 1 / d1) return n1 * x * x
  else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75
  else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375
  else return n1 * (x -= 2.625 / d1) * x + 0.984375
}
  const bounce: Transition = {
  duration: 1.2,
  ease: bounceEase,
  //yoyo: Infinity, // loops forever
  repeat: Infinity
}
  return (
    <motion.a
      href="https://lovewithlegs.square.site/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Shop Love With Legs merchandise (opens in a new tab)"
      whileHover={{ y: -2 }}
      animate={{ y: [0, -3, 0] }}
      whileTap={{ scale: 0.97 }}
      transition={bounce}
      className="fixed right-2 bottom-[7.5rem] z-40 flex items-center gap-3 border border-white/15 bg-black/90 px-4 py-3 text-white shadow-xl shadow-black/30 backdrop-blur-md transition-colors hover:border-brand hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:right-6"
    >
      <span className="flex h-10 w-10 items-center justify-center bg-brand">
        <ShoppingBag size={19} aria-hidden="true" />
      </span>
      <span className="flex flex-col text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
          show your love
        </span>
        <span className="text-sm font-bold uppercase tracking-wider">
          Grab Some Gear
        </span>
      </span>
      <ArrowUpRight size={16} className="ml-1 text-white/70" aria-hidden="true" />
    </motion.a>
  );
}
