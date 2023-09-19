const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } = require("discord.js")
const { user } = require("../..")

module.exports = {
    data :new SlashCommandBuilder()
    .setName("도움말")
    .setDescription("봇 도움말을 보여줍니다."),
    /**
     * 
     * @param {import("discord.js").CommandInteraction} interaction 
     */
    async execute(interaction){
        await interaction.deferReply();
        const embed = new EmbedBuilder()
            .setTitle(`치즈봇 도움말`)
            .setDescription(`<@1066656400618557471> 명령어 리스트\n\n텍스트 명령어\n<@1066656400618557471> -> 봇의 도움말을 불러옵니다.\n@clyde -> 디스코드 AI챗봇 Clyde를 소환합니다.\n도움말 -> 봇 명령어 도움말을 보여줍니다.\n치즈 -> <:chheezz:1073558697327997029>로 응답합니다.\n\n슬래시 명령어\n</clyde:1126538346051670056> -> 디스코드 AI챗봇 Clyde를 소환합니다.\n</골라:1131871501642104883> -> 봇이 여러개의 옵션 중 랜덤으로 하나를 골라줍니다.\n</도움말:1094375606155751475> -> 봇 명령어 도움말을 보여줍니다.\n</문의:1074181348216020993> -> 개발자에게 문의 전송합니다.\n</서버정보:1074646320280772680> -> 서버 정보 보여줍니다.\n</서포트-서버:1121353178617745448> -> 치즈봇의 서포트 서버 초대링크를 불러옵니다.\n</유저정보:1095626070918697022> -> 유저 정보 보여줍니다.\n</채널정보:1112718946412548156> -> 선택한 채널의 정보를 불러옵니다.\n\n우클릭 앱 명령어\n메시지 신고 -> 메시지를 신고합니다.\n유저신고 -> 유저를 신고합니다.\n유저정보 -> 유저 정보 보여줍니다.`)
            .setTimestamp()
            .setColor("Yellow");

        const button = new ButtonBuilder()
        .setLabel('서포트 서버')
        .setURL('https://discord.gg/f4sa44Dj34')
        .setStyle(ButtonStyle.Link)

        const buttonRow = new ActionRowBuilder().addComponents(button);
            interaction.editReply({embeds: [embed], components: [buttonRow]});
    }}