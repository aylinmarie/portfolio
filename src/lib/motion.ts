import type { Variants } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export const fadeUp: Variants = {
  hidden:  { y: 24 },
  visible: { y: 0, transition: { duration: 0.9, ease } },
}

export const stagger = (delay = 0): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: delay } },
})
