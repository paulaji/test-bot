require("dotenv").config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: "1094151221138423908",
    label: "red",
  },
  {
    id: "1094151132483436646",
    label: "blue",
  },
  {
    id: "1094151042058424392",
    label: "green",
  },
];

client.on("ready", async (c) => {
  try {
    const channel = await client.channels.cache.get("1094152574468370513");
    if (!channel) return;

    const row = new ActionRowBuilder();
    roles.forEach((role) => {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary)
      );
    });

    await channel.send({
      content: "Claim or remove a role below",
      components: [row],
    });
    process.exit;
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.TOKEN);
