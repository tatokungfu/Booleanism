export function NOT(p: boolean): boolean {
  return !p;
}


export function AND(p: boolean, q: boolean): boolean {
  if(p === false || q === false) {
    return false;
  }

  return true;
};

export function OR(p: boolean, q: boolean): boolean {
  if(p === true || q === true) {
    return true;
  }

  return false;
}

export function IMPLY(p: boolean, q: boolean): boolean {
  if(p === true && q === false) {
    return false;
  }

  return true;
}

export function IFF(p: boolean, q: boolean): boolean {
  if(p === q) {
    return true;
  }

  return false;
}

export * from "./absurd";
