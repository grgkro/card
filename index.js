#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const gradient = require('gradient-string');


const options = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
  };

  const data = {
    name: chalk.white.bold("           Georg Kromer"),
    role: chalk.white.bold("   FullStack Software Developer"),
    languages: chalk.italic.bold("   Java - Spring Boot - Angular "),
    github: {
      label: chalk.white.bold("Github 🐙:"),
      url: chalk.blue.underline("https://github.com/grgkro"),
    },
    email: {
      label: chalk.white.bold("Email 📧:"),
      url: chalk.blue.underline("georgkromer@protonmail.com"),
    },
  };

  const newline = "\n";
const github = `${data.github.label} ${data.github.url}`;
const email = `${data.email.label} ${data.email.url}`;
const card = boxen(
    
gradient.rainbow('           Hello world!')
    + newline +
    newline +
  data.name +
    newline +
    newline +
    data.role +
    newline +
    data.languages +
    newline +
    newline +
    github +
    newline +
    email,
  options
);

console.log(chalk.green.bold(card));