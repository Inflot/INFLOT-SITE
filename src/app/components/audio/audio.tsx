'use client'

import useWindowDimensions from "@/app/hooks/use-window-dimensions";
import React, { useEffect, useRef, useState } from "react";
import { LuPlay, LuPause } from "react-icons/lu";

type Props = { src: string; loop?: boolean; volume?: number };

export default function DesktopAutoplayAudio({ src, loop = true, volume = 1 }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const cleanupRef = useRef<(() => void) | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const [isDesktop, setIsDesktop] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const detectDesktop = () => {
            const coarse = window.matchMedia?.("(pointer: coarse)").matches ?? false;
            const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            return !isMobileUA && !coarse;
        };

        const desktop = detectDesktop();
        setIsDesktop(desktop);
        if (!desktop) return;

        const audio = new Audio(src);
        audioRef.current = audio;
        audio.loop = loop;
        audio.volume = volume;
        audio.preload = "auto";

        const removeInteractionListeners = () => {
            window.removeEventListener("mousedown", unlockAudio);
            window.removeEventListener("keydown", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
        };

        async function unlockAudio(ev?: Event) {
            if (ev && buttonRef.current && ev.target instanceof Node && buttonRef.current.contains(ev.target)) {
                return;
            }
            if (!audioRef.current) return;
            try {
                await audioRef.current.play();
                setIsPlaying(true);
                setBlocked(false);
                removeInteractionListeners();
            } catch {
                setIsPlaying(false);
                setBlocked(true);
            }
        }

        const tryAutoplay = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
                setBlocked(false);
            } catch {
                setBlocked(true);
                setIsPlaying(false);
                window.addEventListener("mousedown", unlockAudio, { once: true });
                window.addEventListener("keydown", unlockAudio, { once: true });
                window.addEventListener("touchstart", unlockAudio, { once: true });
                cleanupRef.current = removeInteractionListeners;
            }
        };

        const handleVisibilityChange = () => {
            if (!audioRef.current) return;
            if (document.visibilityState === "hidden") {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play()
                    .then(() => { setIsPlaying(true); setBlocked(false); })
                    .catch(() => {
                        setIsPlaying(false);
                        setBlocked(true);
                        window.addEventListener("mousedown", unlockAudio, { once: true });
                        window.addEventListener("keydown", unlockAudio, { once: true });
                        window.addEventListener("touchstart", unlockAudio, { once: true });
                        cleanupRef.current = removeInteractionListeners;
                    });
            }
        };

        tryAutoplay();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (cleanupRef.current) { cleanupRef.current(); cleanupRef.current = null; }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            audio.pause();
            audio.src = "";
            audioRef.current = null;
            setIsPlaying(false);
            setBlocked(false);
        };
    }, [src, loop, volume]);

    const toggle = async () => {
        const a = audioRef.current;
        if (!a) return;
        if (a.paused) {
            try { await a.play(); setIsPlaying(true); setBlocked(false); }
            catch { setIsPlaying(false); setBlocked(true); }
        } else {
            a.pause();
            setIsPlaying(false);
        }
    };

    if (!isDesktop) return null;

    return (
        <button
            type="button"
            ref={buttonRef}
            onClick={toggle}
            onMouseDown={(e) => { e.stopPropagation(); }}
            onKeyDown={(e) => { e.stopPropagation(); }}
            onTouchStart={(e) => { e.stopPropagation(); }}
            className={`
                        z-100
                        fixed bottom-8 left-8 md:bottom-12 md:left-12
                        bg-cyan-800 hover:bg-cyan-950 text-white font-bold
                        py-2 px-2 rounded-full opacity-75 hover:opacity-90 transition-opacity border-none
            `}
        >
            {isPlaying ? <LuPause size={width > 768 ? '30px' : '20px'} /> : <LuPlay size={width > 768 ? '30px' : '20px'} style={{ transform: "translateX(1.5px)" }}/>}
        </button>
    );
}
