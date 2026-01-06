import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "../styles/BirthdaySurprise.css";
import song from "../utils/Mera-hua.mp3";
import image2 from "../utils/surprise2.jpg";

 const BirthdayHero = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Update filenames here (must be in /public folder)
  const audioRef = useRef(new Audio(song));

  useEffect(() => {
    const hasSeen = localStorage.getItem("birthday_surprise_seen");
    if (hasSeen) {
      setIsRevealed(true);
    }

    const audio = audioRef.current;
    const handleSongEnd = () => {
      localStorage.setItem("birthday_surprise_seen", "true");
      setIsRevealed(true);
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    };

    audio.addEventListener("ended", handleSongEnd);
    return () => {
      audio.removeEventListener("ended", handleSongEnd);
      audio.pause();
    };
  }, []);

  const startSurprise = () => {
    setIsStarted(true);
    audioRef.current.play();

    // Continuous soft heart-colored confetti
    const end = Date.now() + 223 * 1000; // 3m 43s
    const frame = () => {
      confetti({
        particleCount: 1,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff477e", "#ffffff"],
      });
      confetti({
        particleCount: 1,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff477e", "#ffffff"],
      });
      if (Date.now() < end && !isRevealed) requestAnimationFrame(frame);
    };
    frame();
  };

  if (isRevealed) return children;

  return (
  <div
    className="surprise-overlay"
    style={{ backgroundImage: `url(${image2})` }}
  >
    <div className="overlay-darkener">
      {!isStarted ? (
        <button className="reveal-btn-large" onClick={startSurprise}>
          💗 Tap for a little magic
        </button>
      ) : (
        /* This container handles the side-by-side layout */
        <div className="listening-box side-layout">
          
          <div className="text-glass-card">
            {/* Part 1: The Date and Day */}
            <p className="special-date-text">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            {/* Part 2: The Main Wish */}
            <h1 className="birthday-wish-title">
              Happy Birthday, Sweetheart 😍
            </h1>

            {/* Part 3: The Beautiful Words */}
            <p className="romantic-quote-text">
              To the one who holds my heart: You are the light in my code, the
              peace in my chaos, and the love of my life. I love you more than
              words could ever describe. 💖
            </p>
          </div>

          {/* This empty div pushes everything to the left, leaving the right side clear */}
          <div className="spacer-area"></div>
        </div>
      )}
    </div>
  </div>
)
}

export default BirthdayHero;
