import type { Proposition } from "../proposition";

export function NOT(p: Proposition): boolean {
  return !p.value;
}


export function AND(p: Proposition, q: Proposition): boolean {
  if(p.value === false || q.value === false) {
    return false;
  }

  return true;
};

export function OR(p: Proposition, q: Proposition): boolean {
  if(p.value === true || q.value === true) {
    return true;
  }

  return false;
}

export function IMPLY(p: Proposition, q: Proposition): boolean {
  if(p.value === true && q.value === false) {
    return false;
  }

  return true;
}

export function IFF(p: Proposition, q: Proposition): boolean {
  if(p.value === q.value) {
    return true;
  }

  return false;
}
