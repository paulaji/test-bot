require("dotenv").config();

// // for image
// const fs = require("fs");
// const path = require("path");
// // reading the image from the local path
// const imagePath = path.join(__dirname, "nariko.jfif");
// const imageData = fs.readFileSync(imagePath);

const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

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

  // hey
  if (interaction.commandName === "hey") {
    interaction.reply("hi! sughamalle");
  }

  // ping pong
  if (interaction.commandName === "ping") {
    interaction.reply("pong");
  }

  // functions

  // add
  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;
    interaction.reply(`sum equals ${num1 + num2}`);
  }

  // character
  if (interaction.commandName === "nariko") {
    interaction.reply(
      `Hailing from the LAND OF RISING SUN, 🈹 Nariko 🈯 is an expert martial artist, protecting her clan from nether clans.
      A true-warrior! 🎴`
    );
  }

  // embeds
  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("GLITCHH-VERSE")
      .setDescription("character description")
      .setColor("#FF0000")
      .addFields({
        name: "Nariko",
        value: `Hailing from the LAND OF RISING SUN, 🈹 Nariko 🈯 is an expert martial artist, protecting her clan from nether clans.
        A true-warrior! 🎴`,
      })
      .setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd2amAgQRicSWupUc3nkJ-e-FaiKEPk3lH66aW3lH8OA&usqp=CAU&ec=48665698"
      );
    // .setThumbnail(
    //   "https://e7.pngegg.com/pngimages/925/529/png-clipart-sword-katana-blade-red-weapon-sword-weapon-katana.png"
    // );

    interaction.reply({ embeds: [embed] });
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
