#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

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
    '\x1b[31m\x1b[1m❌ Node.js ' +
      MIN_NODE_VERSION +
      ' or higher is required. You are using ' +
      currentNodeVersion +
      '.\x1b[0m',
  );
  process.exit(1);
}

console.log(
  '\x1b[34m\x1b[1m\n🚀 Starting setup for \x1b[33m' +
    projectName +
    '\x1b[34m...\n\x1b[0m',
);

// Clone the template
console.log(
  '\x1b[32m\x1b[1m📂 Cloning template from ' + templateRepo + '...\x1b[0m',
);
execSync(`git clone ${templateRepo} ${projectName}`, { stdio: 'inherit' });

console.log('\x1b[32m✅ Template cloned successfully.\x1b[0m');

// Navigate to the project folder
process.chdir(path.join(process.cwd(), projectName));

// Remove Git history
console.log('\x1b[35m\x1b[1m🗑️ Removing Git history...\x1b[0m');
fs.rmSync(path.join(process.cwd(), '.git'), { recursive: true, force: true });

console.log('\x1b[32m✅ Git history removed.\x1b[0m');

// Install dependencies
console.log('\x1b[36m\x1b[1m📦 Installing dependencies with Yarn...\x1b[0m');
execSync('yarn install', { stdio: 'inherit' });

console.log('\x1b[32m✅ Dependencies installed.\x1b[0m');

// Final instructions
console.log(
  '\x1b[42m\x1b[30m\x1b[1m\n🎉 Project ' +
    projectName +
    ' is ready! Follow the steps below to get started:\n\x1b[0m',
);
console.log('\x1b[33m1️⃣  Navigate into your project folder:\x1b[0m');
console.log('\x1b[36m    cd ' + projectName + '\n\x1b[0m');
console.log('\x1b[33m2️⃣  Start the development server:\x1b[0m');
console.log('\x1b[36m    yarn dev\n\x1b[0m');
console.log(
  '\x1b[42m\x1b[30m\x1b[1m\n✨ Enjoy coding your new React project! ✨\n\x1b[0m',
);
