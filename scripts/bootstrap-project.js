/**
 * Bootstrap stub for projects created from this template.
 *
 * Purpose:
 * - replace high-signal placeholders
 * - create or rename the initial phase
 * - remind maintainers which example documents still need adaptation
 *
 * This is intentionally conservative. Adapt it before using in production.
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();

const config = {
  projectName: "My Project",
  stage: "discovery",
  owner: "pm",
  initialPhase: "2026-Q2_project-foundation",
};

const replacements = [
  ["{project-name}", config.projectName],
  ["{discovery|design|implementation|stabilization|live}", config.stage],
  ["{pm|tech-lead|founder|team}", config.owner],
];

const targetFiles = [
  "PROJECT_MAP.md",
  "README.md",
  "CLAUDE.md",
  "AGENTS.md",
  "PROJECT_BOOTSTRAP.md",
];

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, "utf8");
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  fs.writeFileSync(filePath, content);
}

function main() {
  for (const file of targetFiles) {
    replaceInFile(path.join(root, file));
  }

  console.log("Bootstrap stub completed.");
  console.log("Review these paths manually after running:");
  console.log("- product/flows/onboarding/overview.md");
  console.log("- management/phases/2026-Q2_onboarding-foundation/");
  console.log("- docs/architecture/decisions/2026-04-20_auth-strategy.md");
  console.log("");
  console.log(`Suggested initial phase: ${config.initialPhase}`);
}

main();
