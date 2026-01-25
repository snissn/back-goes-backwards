#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h") || args.length === 0) {
  console.log("ALGM CLI (scaffold)");
  console.log("\nUsage:");
  console.log("  algm [command] [options]");
  console.log("\nCommands:");
  console.log("  quick    Placeholder for Quick screen flow");
  console.log("\nOptions:");
  console.log("  -h, --help    Show help");
  process.exit(0);
}

console.log("ALGM CLI scaffold. Use --help.");
