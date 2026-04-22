"use client";

import { useEffect, useState } from "react";

const EVENT_END_DATE = "2026-05-17"; // Popup actif jusqu'à cette date (inclus jusqu'à 00:00)
const STORAGE_KEY = "event-popup-10ans-dismissed";

export default function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Ne s'affiche plus après le 17 mai
    const now = new Date();
    const end = new Date(EVENT_END_DATE + "T23:59:59");
    if (now > end) return;

    // Ne s'affiche plus si déjà fermé dans cette session/version
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === EVENT_END_DATE) return;

    // Léger délai pour ne pas bloquer le rendu initial
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, EVENT_END_DATE);
    } catch {}
  };

  // Fermeture au clavier (Escape) + verrou du scroll pendant l'ouverture
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Événement 10 ans Matos Import"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={close}
    >
      <div
        className="relative w-full max-w-5xl animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={close}
          aria-label="Fermer"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-all hover:scale-110 hover:bg-gray-100"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Image cliquable qui amène à la section Event */}
        <a
          href="#evenement"
          onClick={close}
          className="block overflow-hidden rounded-2xl shadow-2xl shadow-black/60 border border-white/10 transition-transform hover:scale-[1.01]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/event/popup-10ans.webp"
            alt="10 ans Matos Import × Social Club Sea-Doo — 15 et 16 mai au Cap d'Agde"
            className="w-full h-auto"
          />
        </a>

        {/* CTAs sous l'image */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKzAWxpBKrrceQW14_3rfvSLVzDxrlOsp8RUdCXD_4irUQzQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-hover hover:scale-[1.02]"
          >
            Réserver un essai
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkRGLLfHOYKP8Go7lkUJu0ItjZgZfbVD6yDViQfRaSs3JT9w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-gold/30 transition-all hover:bg-gold/90 hover:scale-[1.02]"
          >
            S&apos;inscrire à la rando
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
