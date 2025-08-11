export function ABSURD_IMPLY(p: boolean, q: boolean): boolean {
  if(p === false) {
    return false;
  } else if(p === true && q === false) {
    return false;
  } else {
    return true;
  }
};
