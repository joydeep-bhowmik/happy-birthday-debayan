import bgMusic from '../audio/bg.mp3';

import mattchLight from '../audio/match-lighting-candle.mp3';

import winterWind from '../audio/winter-wind.mp3';

import happyBirthdayReverse from '../audio/happy-birthday-reverse.mp3';

import deepRumble from '../audio/deep-rumble.mp3';

import heartbeat from '../audio/heartbeat.mp3';

import CreepyWhisper from '../audio/creepy-whisper.mp3';

import glassShatter from '../audio/glass-shatter.mp3';

import scream from '../audio/scream.mp3';

import lastCandle from '../audio/last-candle.mp3';

import footsteps from '../audio/footsteps.mp3'

import debayan from '../audio/debayan.mp3'

import happyBirthday from '../audio/happy-birthday-to-you.mp3'

export const matchLightAudio = new Audio(mattchLight);

export const bgAudio = new Audio(bgMusic);

export const winterWindAudio = new Audio(winterWind);

export const footstepsAudio = new Audio(footsteps);

export const debayanAudio = new Audio(debayan);

const happyBirthdayReverseAudio = new Audio(happyBirthdayReverse);
happyBirthdayReverseAudio.volume = 0.5;

export const lastCandleAudio = new Audio(lastCandle);

export { happyBirthdayReverseAudio };

export const deepRumbleAudio = new Audio(deepRumble);

export const heartbeatAudio = new Audio(heartbeat);

export const whisperAudio = new Audio(CreepyWhisper);

export const glassShatterAudio = new Audio(glassShatter);

export const screamAudio = new Audio(scream);

export const happyBirthdayAudio = new Audio(happyBirthday)
