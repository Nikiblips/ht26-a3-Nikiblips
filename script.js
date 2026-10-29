/*
 * IDB Programming: A3 — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — updates the state every 100ms, if necessary
 *   use      — uses the state to make sound and shapes every 100ms, if necessary
 *   controls — what happens when the player uses the pointer
 *   setup    — starts everything
 *
 * The pointer events change the state. update() and use() each run every
 * 100ms, in a loop:
 *   1. update: change the state, e.g. based on time or on the pointer's movement
 *   2. use:    make sound and move shapes, based on the state
 *
 * Shapes come from shape.js: createShape() makes one, and its methods
 * (setPosition, setSize, setColour ...) change it.
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

import { createShape } from "./shape.js";

// ---------- Settings ----------
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which notes you can play, how fast things move, the tempo.
const note = "C4"; // the note played when the pointer goes down

//top left rectangle
const square1 = createShape();
square1.setSize(340);
square1.setRoundedness(0);
square1.setColour(170, 60, 50);
square1.setPosition(0.18, 0);
square1.setRotation(0);
const square2 = createShape();
square2.setSize(340);
square2.setRoundedness(0);
square2.setColour(170, 60, 50);
square2.setPosition(0, 0);
square2.setRotation(0);

const smallSquare1 = createShape();
smallSquare1.setSize(50);
smallSquare1.setRoundedness(0);
smallSquare1.setColour(280, 60, 50);
smallSquare1.setPosition(0.1, 0.18);
smallSquare1.setRotation(0);
const smallSquare2 = createShape();
smallSquare2.setSize(50);
smallSquare2.setRoundedness(0);
smallSquare2.setColour(280, 60, 50);
smallSquare2.setPosition(0.15, 0.18);
smallSquare2.setRotation(0);
const smallSquare3 = createShape();
smallSquare3.setSize(50);
smallSquare3.setRoundedness(0);
smallSquare3.setColour(280, 60, 50);
smallSquare3.setPosition(0.2, 0.18);
smallSquare3.setRotation(0);
const smallSquare4 = createShape();
smallSquare4.setSize(50);
smallSquare4.setRoundedness(0);
smallSquare4.setColour(280, 60, 50);
smallSquare4.setPosition(0.25, 0.18);
smallSquare4.setRotation(0);

//bottom left
const square3 = createShape();
square3.setSize(340);
square3.setRoundedness(0);
square3.setColour(330, 60, 50);
square3.setPosition(0, 1);
square3.setRotation(0);
const square4 = createShape();
square4.setSize(340);
square4.setRoundedness(0);
square4.setColour(330, 60, 50);
square4.setPosition(0.18, 1);
square4.setRotation(0);

const smallSquare11 = createShape();
smallSquare11.setSize(50);
smallSquare11.setRoundedness(0);
smallSquare11.setColour(50, 60, 50);
smallSquare11.setPosition(0.1, 1.22);
smallSquare11.setRotation(0);
const smallSquare12 = createShape();
smallSquare12.setSize(50);
smallSquare12.setRoundedness(0);
smallSquare12.setColour(50, 60, 50);
smallSquare12.setPosition(0.15, 1.22);
smallSquare12.setRotation(0);
const smallSquare13 = createShape();
smallSquare13.setSize(50);
smallSquare13.setRoundedness(0);
smallSquare13.setColour(50, 60, 50);
smallSquare13.setPosition(0.2, 1.22);
smallSquare13.setRotation(0);
const smallSquare14 = createShape();
smallSquare14.setSize(50);
smallSquare14.setRoundedness(0);
smallSquare14.setColour(50, 60, 50);
smallSquare14.setPosition(0.25, 1.22);
smallSquare14.setRotation(0);

//top right rectangle
const square5 = createShape();
square5.setSize(340);
square5.setRoundedness(0);
square5.setColour(300, 60, 50);
square5.setPosition(1, 0);
square5.setRotation(0);
const square6 = createShape();
square6.setSize(340);
square6.setRoundedness(0);
square6.setColour(300, 60, 50);
square6.setPosition(0.82, 0);
square6.setRotation(0);

const smallSquare21 = createShape();
smallSquare21.setSize(50);
smallSquare21.setRoundedness(0);
smallSquare21.setColour(170, 60, 50);
smallSquare21.setPosition(1.1, 0.18);
smallSquare21.setRotation(0);
const smallSquare22 = createShape();
smallSquare22.setSize(50);
smallSquare22.setRoundedness(0);
smallSquare22.setColour(170, 60, 50);
smallSquare22.setPosition(1.05, 0.18);
smallSquare22.setRotation(0);
const smallSquare23 = createShape();
smallSquare23.setSize(50);
smallSquare23.setRoundedness(0);
smallSquare23.setColour(170, 60, 50);
smallSquare23.setPosition(1.0, 0.18);
smallSquare23.setRotation(0);
const smallSquare24 = createShape();
smallSquare24.setSize(50);
smallSquare24.setRoundedness(0);
smallSquare24.setColour(170, 60, 50);
smallSquare24.setPosition(0.95, 0.18);
smallSquare24.setRotation(0);

//bottom right rectangle
const square7 = createShape();
square7.setSize(340);
square7.setRoundedness(0);
square7.setColour(190, 60, 50);
square7.setPosition(0.82, 1);
square7.setRotation(0);
const square8 = createShape();
square8.setSize(340);
square8.setRoundedness(0);
square8.setColour(190, 60, 50);
square8.setPosition(1, 1);
square8.setRotation(0);

const smallSquare31 = createShape();
smallSquare31.setSize(50);
smallSquare31.setRoundedness(0);
smallSquare31.setColour(100, 60, 50);
smallSquare31.setPosition(1.1, 1.22);
smallSquare31.setRotation(0);
const smallSquare32 = createShape();
smallSquare32.setSize(50);
smallSquare32.setRoundedness(0);
smallSquare32.setColour(100, 60, 50);
smallSquare32.setPosition(1.05, 1.22);
smallSquare32.setRotation(0);
const smallSquare33 = createShape();
smallSquare33.setSize(50);
smallSquare33.setRoundedness(0);
smallSquare33.setColour(100, 60, 50);
smallSquare33.setPosition(1.0, 1.22);
smallSquare33.setRotation(0);
const smallSquare34 = createShape();
smallSquare34.setSize(50);
smallSquare34.setRoundedness(0);
smallSquare34.setColour(100, 60, 50);
smallSquare34.setPosition(0.95, 1.22);
smallSquare34.setRotation(0);

//middle
const effectSquare = createShape();
effectSquare.setSize(200);
effectSquare.setRoundedness(0.1);
effectSquare.setColour(140, 60, 50);
effectSquare.setPosition(0.5, 0.5);
effectSquare.setRotation(0);
//top
const effectSquare1 = createShape();
effectSquare1.setSize(200);
effectSquare1.setRoundedness(0.1);
effectSquare1.setColour(140, 60, 50);
effectSquare1.setPosition(0.5, 0.0);
effectSquare1.setRotation(0);
//bottom
const effectSquare2 = createShape();
effectSquare2.setSize(200);
effectSquare2.setRoundedness(0.1);
effectSquare2.setColour(140, 60, 50);
effectSquare2.setPosition(0.5, 1);
effectSquare2.setRotation(0);
// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: where the pointer is, how fast it's moving, or whether a drone is on.

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  setTimeout(update, 100); // call update() again in 100 milliseconds
}

// ---------- Use ----------
// Use the state to make sound and move shapes. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
// Runs every time the pointer goes down: a click, a tap or a pen touch.
function pointerDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something

  console.log("Pointer down at", event.clientX, event.clientY);
  synth.triggerAttackRelease(note, "8n"); // play the note for an eighth note
}


// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop



  // Put your event listener code here

  window.addEventListener("pointermove", pointerMove);
  window.addEventListener("pointerdown", pointerDown);
}
setup(); // Always remember to call setup()!
