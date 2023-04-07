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
  console.log(`${c.user.tag} is online on thankanchettante andi`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  } else if (
    message.content === "hello" ||
    message.content === "hi" ||
    message.content === "Hi"
  ) {
    message.reply("ninakk ariyuo aara thankan enn? njan aahda kunne thankan");
  }
});

client.login(process.env.TOKEN);
