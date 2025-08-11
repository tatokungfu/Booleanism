import { Prop } from "./utils/proposition";
import { AND, OR, IMPLY, IFF } from "./utils/operators";


function main() {
  let p = Prop(true, "I love you.");
  let q = Prop(false, "The sun rises at the west.");

  let result = AND(p, q);

  console.log(result);
}

main();
