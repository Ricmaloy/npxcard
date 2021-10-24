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


const languageQuestion = [
  {
    type: "list",
    name: "action",
    message: "Which language you would like to use ?",
    choices: [
      {
        name: `Português  (${chalk.hex('#ed8936').bold("PT")})`,
        value: () => {
          console.log(mePT);
          prompt(questionsPT).then(answer => answer.action());
        }
      },
      {
        name: `English  (${chalk.hex('#ed8936').bold("EN")})`,
        value: () => {
          console.log(meEN);
          prompt(questionsEN).then(answer => answer.action());
        }
      }
    ]
  }
];

const questionsEN = [
  {
    type: "list",
    name: "action",
    message: "Do you have any questions?",
    choices: [
      {
        name: `Can i message you ? (send an ${chalk.hex('#ed8936').bold("email")})`,
        value: () => {
          open("mailto:ricardozamboni021@gmail.com");
          console.log("\nOf course, write me in a second...\n");
        }
      },
      {
        name: "Nah, i gotta go!",
        value: () => {
          console.log("Sure, bye. 👋\n");
        }
      }
    ]
  }
];

const questionsPT = [
  {
    type: "list",
    name: "action",
    message: "Deseja fazer alguma pergunta ?",
    choices: [
      {
        name: `Como faço para conversarmos ? (enviar um ${chalk.hex('#ed8936').bold("email")})`,
        value: () => {
          open("mailto:ricardozamboni021@gmail.com");
          console.log("\nBasta me enviar um email, ficarei aguardando...\n");
        }
      },
      {
        name: "Hmmm acho que não, até mais.",
        value: () => {
          console.log("Até logo, foi prazer te conhecer. 👋\n");
        }
      }
    ]
  }
];

const dataEN = {
  name: chalk.bold.hex('#ed8936')("                  Ricardo Zamboni Silva"),
  handle: chalk.white("                    @_ricardozamboni_"),
  work: `${chalk.white("Junior Front-end Developer at")} ${chalk.hex("#bf6a24").bold("Zup Innovation")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.white("ricardozamboni_"),
  npm: chalk.gray("https://npmjs.com/") + chalk.white("~ricardozamboni"),
  github: chalk.gray("https://github.com/") + chalk.white("Ricmaloy"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.white("ricardo-zamboni-3906471b3"),
  web: chalk.white("https://ricardozamboni.vercel.app/"),
  npx: chalk.hex("#ed8936")("npx") + " " + chalk.white("ricardozamboni"),

  labelWork: chalk.white.bold("Work:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelnpm: chalk.white.bold("npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("Web:"),
  labelCard: chalk.white.bold("Card:")
};

const dataPT = {
  name: chalk.bold.hex('#ed8936')("                  Ricardo Zamboni Silva"),
  handle: chalk.white("                    @_ricardozamboni_"),
  work: `${chalk.white("Desenvolvedor Front End Júnior na")} ${chalk.hex("#bf6a24").bold("Zup Innovation")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.white("ricardozamboni_"),
  npm: chalk.gray("https://npmjs.com/") + chalk.white("~ricardozamboni"),
  github: chalk.gray("https://github.com/") + chalk.white("Ricmaloy"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.white("ricardo-zamboni-3906471b3"),
  web: chalk.white("https://ricardozamboni.vercel.app/"),
  npx: chalk.hex("#ed8936")("npx") + " " + chalk.white("ricardozamboni"),

  labelWork: chalk.white.bold("Cargo:"),
  labelTwitter: chalk.white.bold("Twitter:"),
  labelnpm: chalk.white.bold("npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("Web:"),
  labelCard: chalk.white.bold("Card:")
};

const meEN = boxen(
    [
      `${dataEN.name}`,
      `${dataEN.handle}`,
      ``,
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
      ``,
      `${chalk.italic(
        "         Feel free to reach me, i'm always up to talk!"
      )}`,
      ``,
      `${chalk.italic("                  #NeverStopLearning  🚀")}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 2,
        borderStyle: "bold",
        borderColor: "#bf6a24"
    }
);

const mePT = boxen(
  [
    `${dataPT.name}`,
    `${dataPT.handle}`,
    ``,
    ``,
    `${dataPT.labelWork}  ${dataPT.work}`,
    `${dataPT.labelTwitter}  ${dataPT.twitter}`,
    `${dataPT.labelnpm}  ${dataPT.npm}`,
    `${dataPT.labelGitHub}  ${dataPT.github}`,
    `${dataPT.labelLinkedIn}  ${dataPT.linkedin}`,
    `${dataPT.labelWeb}  ${dataPT.web}`,
    ``,
    `${dataPT.labelCard}  ${dataPT.npx}`,
    ``,
    ``,
    `${chalk.italic(
      "     Fique a vontade para entrar em contato comigo !"
    )}`,
    ``,
    `${chalk.italic("                  #NeverStopLearning  🚀")}`,
  ].join("\n"),
  {
      margin: 1,
      float: 'center',
      padding: 2,
      borderStyle: "bold",
      borderColor: "#bf6a24"
  }
);

prompt(languageQuestion).then(answer => answer.action());

