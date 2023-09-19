const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType  } = require("discord.js")
const { } = require("../..")

module.exports = {
    data :new SlashCommandBuilder()
    .setName("clyde")
    .setDescription("디스코드 AI 챗봇 Clyde 프로필을 불러옵니다."),
    /**
     * 
     * @param {import("discord.js").CommandInteraction} interaction 
     */
    async execute(interaction){
        await interaction.deferReply()
        const User = interaction.client.users.cache.get("1081004946872352958");
        const id = "1081004946872352958";
        const name = "Clyde"
        const username = "clyde";
        const avatar = "https://cdn.discordapp.com/avatars/1081004946872352958/a_6170487d32fdfe9f988720ad80e6ab8c.gif?size=1024";


    const embed = new EmbedBuilder()
    .setTitle(`디스코드 AI 챗봇 Clyde`)
    .setColor("Blue")
    .setTimestamp()
    .setThumbnail(avatar)
    .addFields(
      { name: "이름", value: `**<@${id}>**` },
      { name: "별명", value: `**${username}**` },
      { name: "아이디", value: `**${id}**` },
    );
        interaction.editReply({embeds: [embed]});
    }
}