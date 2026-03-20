#!/usr/bin/env node

function main(): void {
  const command = process.argv[2] ?? "help";

  switch (command) {
    case "help":
    default:
      console.log("Weave CLI");
      console.log("Commands:");
      console.log("  weave help");
      console.log("  weave open <path>");
      break;
  }
}

main();