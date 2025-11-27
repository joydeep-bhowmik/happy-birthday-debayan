import { winterWindAudio, footstepsAudio, debayanAudio, happyBirthdayReverseAudio, screamAudio, deepRumbleAudio, heartbeatAudio, whisperAudio, glassShatterAudio } from '../assets/sounds/index.js';
const parts = [
    {
        id: 1,
        content: "It was supposed to be a normal birthday. Quiet. Simple. But the moment you lit the first candle, every flame in the house flickered in unison—as if something was acknowledging you.",
        elements: ['ghost'],
        audios: [winterWindAudio],
    },
    {
        id: 2,
        content: "You felt watched long before you heard the whisper. It didn’t say words—just mimicked the sound of your breathing, perfectly in sync. When you exhaled, it exhaled louder.",
        elements: ['spider'],
        audios: [whisperAudio, heartbeatAudio],
    },
    {
        id: 3,
        content: "The decorations began to sway though the air was still. A shadow on the wall raised its hand a second after you did. It wasn't copying you—it was learning you.",
        elements: ['ghost'],
        audios: [deepRumbleAudio],
    },
    {
        id: 4,
        content: "You found a torn photograph on the floor. It was you at a birthday years ago… except you don't remember ever taking it. And in the background, a blurry figure stared from the doorway.",
        elements: ['bat'],
        audios: [heartbeatAudio],
    },
    {
        id: 5,
        content: "The house grew unbearably quiet. Not peaceful—expectant. You realized the silence wasn’t the absence of sound… it was something holding its breath behind you.",
        elements: [],
        audios: [deepRumbleAudio],
    },
    {
        id: 6,
        content: "The candles flared open with a deep red glow. You heard footsteps behind you—slow, deliberate, familiar. The kind of footsteps you once trusted.",
        elements: ['ghost',],
        audios: [whisperAudio, heartbeatAudio, footstepsAudio],
    },
    {
        id: 7,
        content: "A low voice rasped your name—your exact tone, your exact cadence, like it had been practicing. Something wanted you to know: it wasn’t haunting you. It was returning to you.",
        elements: ['spider'],
        audios: [whisperAudio, debayanAudio],
    },
    {
        id: 8,
        content: "The shattered mirror pieces arranged themselves slowly into a sentence: ‘YOU LEFT ME’. Your chest tightened. A memory you had buried clawed its way back.",
        elements: ['ghost', 'bat'],
        audios: [glassShatterAudio, deepRumbleAudio],
    },
    {
        id: 9,
        content: "And then you remembered the birthday long ago—the one you tried to forget. The friend who vanished after following you home. The one you never spoke of again.",
        elements: ['skull'],
        audios: [heartbeatAudio],
    },
    {
        id: 10,
        content: "The lights died. A figure stood inches from you—tall, trembling, its face shifting through every memory you tried to bury. It leaned close, voice cracking: ‘I saved your last candle for you.’",
        elements: ['jumpscare'],
        audios: [deepRumbleAudio, heartbeatAudio],
        outro: ['lastcandle']
    }
];

export default parts;