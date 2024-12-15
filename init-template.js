#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const projectName = process.argv[2] || 'my-new-project';
const templateRepo = 'https://github.com/HDuy-Dev/react-seed-template.git';

// Check Node.js version
const MIN_NODE_VERSION = '20.0.0';

function compareVersions(a, b) {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const numA = partsA[i] || 0;
    const numB = partsB[i] || 0;
    if (numA > numB) return 1;
    if (numA < numB) return -1;
  }
  return 0;
}

const currentNodeVersion = process.version.slice(1); // Remove the "v" prefix
if (compareVersions(currentNodeVersion, MIN_NODE_VERSION) < 0) {
  console.error(
    chalk.red.bold(
      `❌ Node.js ${MIN_NODE_VERSION} or higher is required. You are using ${currentNodeVersion}.`,
    ),
  );
  process.exit(1);
}

console.log(
  chalk.blue.bold(`\n🚀 Starting setup for ${chalk.yellow(projectName)}...\n`),
);

// Clone the template
console.log(chalk.greenBright(`📂 Cloning template from ${templateRepo}...`));
execSync(`git clone ${templateRepo} ${projectName}`, { stdio: 'inherit' });

console.log(chalk.greenBright(`✅ Template cloned successfully.`));

// Navigate to the project folder
process.chdir(path.join(process.cwd(), projectName));

// Remove Git history
console.log(chalk.magentaBright(`🗑️ Removing Git history...`));
fs.rmSync(path.join(process.cwd(), '.git'), { recursive: true, force: true });

console.log(chalk.greenBright(`✅ Git history removed.`));

// Install dependencies
console.log(chalk.cyanBright(`📦 Installing dependencies with Yarn...`));
execSync('yarn install', { stdio: 'inherit' });

console.log(chalk.greenBright(`✅ Dependencies installed.`));

// Final instructions
console.log(
  chalk.bgGreen.black.bold(
    `\n🎉 Project ${projectName} is ready! Follow the steps below to get started:\n`,
  ),
);
console.log(chalk.yellowBright(`1️⃣  Navigate into your project folder:`));
console.log(chalk.cyanBright(`    cd ${projectName}\n`));
console.log(chalk.yellowBright(`2️⃣  Start the development server:`));
console.log(chalk.cyanBright(`    yarn dev\n`));
console.log(
  chalk.bgMagenta.black.bold(`\n✨ Enjoy coding your new React project! ✨\n`),
);
