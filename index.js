const avfs = require("./src/avfs.js");
const chalk = require('chalk');

let output = "";
avfs.then((resolve) => {
  output = `expect: ${resolve.expectCount} match/unmatch: ${resolve.matchCount}/${resolve.unmatchCount}`;
  console.info(chalk.green.bgYellow.bold(output));
}, (reject) => {
  output = `expect: ${resolve.expectCount} match/unmatch: ${resolve.matchCount}/${resolve.unmatchCount}`;
  console.error(chalk.red.bgYellow.bold(output));
  console.setFailed(`error message: ${reject.message}`);
}).then(()=>{
  console.setOutput(output);
});

module.exports = avfs;