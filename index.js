const ase = require("./lib/index");
const fs = require("fs");

const aseRead = ase.read(fs.readFileSync("./2022+3514-2479+6001-6224.ase"));

const result = ase.formatAsColorsObject(aseRead);

console.log(result);
// console.log(result[0].entries[0]);

// Save to JSON file
fs.writeFileSync("result.json", JSON.stringify(result, null, 2));

console.log("Result saved to result.json");
