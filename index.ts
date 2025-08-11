import { P } from "./utils/proposition";
import { AND, OR, IMPLY, IFF } from "./utils/operators";


function main() {
  let p = new P(true, "I love you.");
  let q = new P(false, "The sun rises at the west.");

  let result = AND(p.value, q.value);

  console.log(result);
}

main();
