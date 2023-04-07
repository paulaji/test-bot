require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "hey",
    description: "greeting",
  },
  {
    name: "ping",
    description: "pong",
  },
  {
    name: "nariko",
    description: "character",
  },
];

const rest = new REST({ version: "10" });
rest.setToken(process.env.TOKEN);

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
