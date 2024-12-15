#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectName = process.argv[2] || 'my-new-project';
const templateRepo = 'https://github.com/HDuy-Dev/react-seed-template.git';

// Clone the template
execSync(`git clone ${templateRepo} ${projectName}`, { stdio: 'inherit' });

// Navigate to the project folder
process.chdir(path.join(process.cwd(), projectName));

// Remove Git history
fs.rmSync(path.join(process.cwd(), '.git'), { recursive: true, force: true });

// Install dependencies
console.log('Installing dependencies...');
execSync('yarn install', { stdio: 'inherit' });

console.log(`\nProject ${projectName} is ready!`);
