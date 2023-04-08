require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  //   {
  //     name: "hey",
  //     description: "greeting",
  //   },
  //   {
  //     name: "ping",
  //     description: "pong",
  //   },
  //   {
  //     name: "nariko",
  //     description: "character",
  //   },
  // {
  //   name: "add",
  //   description: "adds two numbers",
  //   options: [
  //     {
  //       name: "first-number",
  //       description: "the first number",
  //       type: ApplicationCommandOptionType.Number,
  //       required: true,
  //       choices: [
  //         {
  //           name: "five",
  //           value: 5,
  //         },
  //         {
  //           name: "ten",
  //           value: 10,
  //         },
  //       ],
  //     },
  //     {
  //       name: "second-number",
  //       description: "the second number",
  //       type: ApplicationCommandOptionType.Number,
  //       required: true,
  //       choices: [
  //         {
  //           name: "five",
  //           value: 5,
  //         },
  //         {
  //           name: "ten",
  //           value: 10,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "embed",
    description: "Sends an embed",
  },
];

const rest = new REST({ version: "10" });
rest.setToken(process.env.TOKEN);

// inorder to regiister slash commands

(async () => {
  try {
    console.log("registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log(`slash commands registered`);
  } catch (error) {
    console.log(`the error: ${error}`);
  }
})();
