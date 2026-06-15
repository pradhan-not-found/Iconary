#!/usr/bin/env node

const reset = "\x1b[0m";
const bold = "\x1b[1m";
const cyan = "\x1b[36m";
const blue = "\x1b[34m";
const dim = "\x1b[2m";
const green = "\x1b[32m";

const logo = `
${cyan}   ___                             ${blue}         
${cyan}  |_ _|___ ___  _ __   __ _ _ __ _ ${blue}  _      
${cyan}   | |/ __/ _ \\| '_ \\ / _\` | '__| |${blue} | |     
${cyan}   | | (_| (_) | | | | (_| | |  | |${blue}_| |     
${cyan}  |___\\___\\___/|_| |_|\\__,_|_|   \\_${blue}_, |     
${cyan}                                  ${blue}|___/     ${reset}
`;

console.log("");
console.log(logo);
console.log(`${bold}Welcome to Iconary!${reset}`);
console.log(`${dim}The open-source icon library built for AI, ML & Data tooling.${reset}`);
console.log("");
console.log(`${green}✔ Successfully installed @iconary/react${reset}`);
console.log("");
console.log(`${bold}Quick Start:${reset}`);
console.log(`  import { Agent, Model } from "@iconary/react";`);
console.log(`  <Agent style="duotone" size={24} />`);
console.log("");
console.log(`${bold}Documentation:${reset}  https://iconary.vercel.app/docs`);
console.log(`${bold}GitHub:${reset}         https://github.com/pradhan-not-found/Iconary`);
console.log("");
console.log(`${dim}Made by souradeep.me. Thank you for building with us!${reset}`);
console.log("");
