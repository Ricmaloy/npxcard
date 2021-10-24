#!/usr/bin/env node

// Modules
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

// Clear the terminal before showing the npx card
clear()

// Creating module for prompt questions
const prompt = inquirer.createPromptModule();

const questionsEN = [
    {
      type: "list",
      name: "action",
      message: "What you want to do now ?",
      choices: [
        {
          name: `Send me an ${chalk.green.bold("email")}?`,
          value: () => {
            open("mailto:ricardozamboni021@gmail.com");
            console.log("\nDone, see you soon.\n");
          }
        },
        {
          name: "Nah, I'm om my way, bye !",
          value: () => {
            console.log("Ok, bye !\n");
          }
        }
      ]
    }
];

const dataEN = {
    name: chalk.bold.cyanBright("Ricardo Zamboni Silva"),
    handle: chalk.white("@_ricardozamboni_"),
    work: `${chalk.white("Junior Front-end Developer at")} ${chalk.hex("#2b82b2").bold("Zup Innovation")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.white("ricardozamboni_"),
    npm: chalk.gray("https://npmjs.com/") + chalk.white("~ricardozamboni"),
    github: chalk.gray("https://github.com/") + chalk.white("Ricmaloy"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.white("ricardo-zamboni-3906471b3/"),
    web: chalk.white("https://ricardozamboni.vercel.app/"),
    npx: chalk.cyanBright("npx") + " " + chalk.white("ricardozamboni"),

    labelWork: chalk.white.bold("Work:"),
    labelTwitter: chalk.white.bold("Twitter:"),
    labelnpm: chalk.white.bold("npm:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelWeb: chalk.white.bold("Web:"),
    labelCard: chalk.white.bold("Card:")
}

const meEN = boxen(
    [
      `${dataEN.name} / ${dataEN.handle}`,
      ``,
      `${dataEN.labelWork}  ${dataEN.work}`,
      `${dataEN.labelTwitter}  ${dataEN.twitter}`,
      `${dataEN.labelnpm}  ${dataEN.npm}`,
      `${dataEN.labelGitHub}  ${dataEN.github}`,
      `${dataEN.labelLinkedIn}  ${dataEN.linkedin}`,
      `${dataEN.labelWeb}  ${dataEN.web}`,
      ``,
      `${dataEN.labelCard}  ${dataEN.npx}`,
      ``,
      `${chalk.italic(
        "Feel free to reach me, i'm always up to talk!"
      )}`,
      `${chalk.italic("#NeverStopLearning")}`
    ].join("\n"),
    {
      margin: 1,
      float: 'center',
      padding: 1,
      borderStyle: "single",
      borderColor: "cyanBright"
    }
);

const tipEN = [
    `Tip: Try ${chalk.cyanBright.bold(
      "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

console.log(tipEN);

console.log(meEN);

prompt(questionsEN).then(answer => answer.action());