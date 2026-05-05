"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

/**
 * Wrapper minimal qui active l'observer scroll-reveal.
 * Permet de garder les pages en server components et n'envoyer
 * au client que ce hook (quelques octets de JS).
 */
export default function ScrollReveal() {
  useScrollReveal();
  return null;
}
