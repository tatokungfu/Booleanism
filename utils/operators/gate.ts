export function NAND(p: boolean, q: boolean): boolean {
  if(p === false || q === false) {
    return true;
  }

  return false;
};

export function NOR(p: boolean, q: boolean): boolean {
  if(p === true || q === true) {
    return false;
  }

  return true;
};

export function XOR(p: boolean, q: boolean): boolean {
  if(p === q) {
    return false;
  }

  return true;
};

export function XNOR(p: boolean, q: boolean): boolean {
  if(p === q) {
    return true;
  }

  return false;
};
