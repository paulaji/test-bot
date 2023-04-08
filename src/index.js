require("dotenv").config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  InteractionCollector,
} = require("discord.js");

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

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    await interaction.deferReply({ ephemeral: true });

    const role = interaction.guild.roles.cache.get(interaction.customId);
    if (!role) {
      interaction.editReply({
        content: "Couldn't find that role!",
      });
      return;
    }

    const hasRole = interaction.member.roles.cache.has(role.id);

    if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply(`The role ${role} has been removed`);
      return;
    }

    await interaction.member.roles.add(role);
    await interaction.editReply(`The role ${role} has been added`);
  } catch (error) {
    console.log(error);
  }
  // if (!interaction.isButton()) return;
  // await interaction.deferReply({ ephemeral: true });
  // const role = interaction.guild.roles.cache.get(interaction.customId);
  // if (!role) {
  //   interaction.editReply({
  //     content: "Couldn't find that role!",
  //   });
  //   return;
  // }
  // const hasRole = interaction.member.roles.cache.has(role.id);
  // if (hasRole) {
  //   await interaction.member.roles.remove(role);
  //   await interaction.editReply(`The role ${role} has been removed`);
  //   return;
  // }
  // await interaction.member.roles.add(role);
  // await interaction.editReply(`The role ${role} has been added`);
});

client.login(process.env.TOKEN);
