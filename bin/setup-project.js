#!/usr/bin/env node
const { execSync } = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error('Failed to execute ${command}', e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
if (!repoName) {
  console.log('error: please provide name for your project');
  console.log('usage: npx create-pwa-app <your-app-name>');
  process.exit(-1);
}

const COMMANDS = {
  gitCheckoutCommand: `git clone --depth 1 git@github.com:hhimanshu/create-pwa-app.git ${repoName}`,
  installDepsCommand: `cd ${repoName} && yarn install`,
  initializeGit: `cd ${repoName} && rm -rf .git && git init && git add . && git commit -m "initial commit"`
};

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(COMMANDS.gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(COMMANDS.installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Initializing git for ${repoName}`);
const initializedGit = runCommand(COMMANDS.initializeGit);
if (!initializedGit) process.exit(-1);

console.log(
  'Congratulations! You are ready. Follow the following commands to start'
);
console.log(`cd ${repoName} && yarn start`);
