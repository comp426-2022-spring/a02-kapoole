import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args["number"];
const number = args.number || 1;

const coinFlips = coinFlips(number);

console.log(coinFlips);
console.log(countFlips(coinFlips));