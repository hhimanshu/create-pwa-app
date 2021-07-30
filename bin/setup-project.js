#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const ensurePreRequisitesMet = () => {
  const isValidNpmVersion = () => {
    try {
      const [major, minor, patch] = execSync('npm -v').toString().split('.');
      let majorNumber = Number(major);
      let minorNumber = Number(minor);
      if (majorNumber > 7) return true;
      if (majorNumber === 7 && minorNumber >= 20) return true;

      console.log(`npm version used = ${major}.${minor}.${patch}`);
      console.log(`required npm version >= 7.20.0`);
      console.log(
        `Please install latest npm using 'npm install -g npm@latest' to continue with this starter app.`
      );
    } catch (e) {
      console.error(
        `npm doesn't seem to be installed. Please install latest npm using 'npm install -g npm@latest' to continue with this starter app.`
      );
    }
    return false;
  };

  const isYarnInstalled = () => {
    try {
      const output = execSync('yarn -v').toString();
      console.log(`yarn version installed: ${output} `);
      return true;
    } catch (e) {
      console.error(
        `Yarn is not installed. Please install Yarn using https://classic.yarnpkg.com/en/docs/install in order to use the starter app.`
      );
    }
    return false;
  };

  return isValidNpmVersion() && isYarnInstalled();
};
const preRequisitesMet = ensurePreRequisitesMet();
if (!preRequisitesMet) process.exit(-1);

const repoName = process.argv[2];
if (!repoName) {
  console.log('error: please provide name for your project');
  console.log('usage: npx create-pwa-app <your-app-name>');
  process.exit(-1);
}

const COMMANDS = {
  gitCheckoutCommand: `git clone --depth 1 git@github.com:hhimanshu/create-pwa-app.git ${repoName}`,
  installDepsCommand: `cd ${repoName} && yarn install`,
  initializeGit: `cd ${repoName} && rm -rf .git && git init && git add . && git commit -q -m "initial commit"`,
  removeFiles: `cd ${repoName} && rm -f pwa/twa-manifest.json`,
};

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(COMMANDS.gitCheckoutCommand);
if (!checkedOut) {
  console.error(`Failed to clone the repository`);
  process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(COMMANDS.installDepsCommand);
if (!installedDeps) {
  console.error(`Failed to install the dependencies`);
  process.exit(-1);
}

const projectSetup = runCommand(COMMANDS.removeFiles);
if (!projectSetup) {
  console.error(`Failed to prepare the newly created repository`);
  process.exit(-1);
}

const updatePackageJson = () => {
  const commands = `
  cd ${repoName} && \
  npm pkg set name=${repoName} author=" " repository.url=" "
  `;
  return runCommand(commands);
};
let updatedPackageJson = updatePackageJson();
if (!updatedPackageJson) {
  console.error(`Failed to update package.json for your repository`);
  process.exit(-1);
}

console.log(`Initializing git for ${repoName}`);
const initializedGit = runCommand(COMMANDS.initializeGit);
if (!initializedGit) process.exit(-1);

console.log(
  'Congratulations! You are ready. Follow the following commands to start'
);
console.log(`cd ${repoName} && yarn start`);
