export const fadeOut = (audio, duration = 800) => {
    if (!audio) return;

    const step = audio.volume / (duration / 50); // adjust volume every 50ms

    const fade = setInterval(() => {
        if (audio.volume - step > 0) {
            audio.volume = Math.max(0, audio.volume - step);
        } else {
            clearInterval(fade);
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1; // reset if you want full volume next time
        }
    }, 50);
};
