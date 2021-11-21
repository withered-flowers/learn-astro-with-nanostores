import { atom } from "nanostores";

export const counter = atom(1);

export function incrementCounter() {
  counter.set(counter.get() + 1);
}

export function decrementCounter() {
  counter.set(counter.get() - 1);
}
