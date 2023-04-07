require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "hey") {
    interaction.reply("hi! sughamalle");
  }
  if (interaction.commandName === "ping") {
    interaction.reply("pong");
  }
  if (interaction.commandName === "nariko") {
    interaction.reply(
      `Hailing from the LAND OF RISING SUN, 🈹 Nariko 🈯 is an expert martial artist, protecting her clan from nether clans.
      A true-warrior! 🎴`
    );
  }
  if (interaction.commandName === "who are you") {
    interaction.reply(
      "I am thankanchettan! A robot which will automatically respond to your texts!"
    );
  }
  if (interaction.commandName === "how old are you") {
    interaction.reply("I am 1 day old! But don't ask a robot it's age :)");
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  } else if (
    message.content === "hello" ||
    message.content === "hi" ||
    message.content === "Hi"
  ) {
    message.reply("ninakk ariyuo aara thankan enn?");
  } else if (message.content === "who are you") {
    message.reply(
      "I am thankanchettan! A robot which will automatically respond to your texts!"
    );
  } else if (message.content === "how old are you") {
    message.reply("I am 1 day old! But don't ask a robot it's age :)");
  } else if (message.content === "are you intelligent") {
    message.reply(
      "I was made by Paul. Paul got his brains from Aji and Bini. So yes, I am a genius!!!"
    );
  }
});

client.login(process.env.TOKEN);
