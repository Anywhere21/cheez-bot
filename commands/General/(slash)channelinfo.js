const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { } = require('../..');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('채널정보')
		.setDescription('선택한 채널에 대한 정보를 보여줍니다.')
        .addChannelOption((option) =>

        option.setName("채널").setDescription("채널을 선택해주세요.").setRequired(false)
      ),
      
	async execute(interaction) {
        await interaction.deferReply();
        const { options } = interaction;
        const guild = interaction.guild;
        console.log(guild);
        const channel = options.getChannel("채널") || interaction.channel;
        const { name, id, topic, type, createdTimestamp, icon, rateLimitPerUser } = channel;
        console.log(channel);

        let topiic = channel.topic;
        if (topiic == null) topiic = " "

        let slow = rateLimitPerUser;
        if (slow == 0) slow = "슬로우 모드가 비활성화 돼있습니다."
        if (slow == 1) slow = "1초"
        if (slow == 2) slow = "2초"
        if (slow == 3) slow = "3초"
        if (slow == 5) slow = "5초"
        if (slow == 10) slow = "10초"
        if (slow == 15) slow = "15초"
        if (slow == 20) slow = "20초"
        if (slow == 25) slow = "25초"
        if (slow == 30) slow = "30초"
        if (slow == 45) slow = "45초"
        if (slow == 60) slow = "1분"
        if (slow == 120) slow = "2분"
        if (slow == 180) slow = "3분"
        if (slow == 300) slow = "5분"
        if (slow == 600) slow = "10분"
        if (slow == 900) slow = "15분"
        if (slow == 1200) slow = "20분"
        if (slow == 1800) slow = "30분"
        if (slow == 3600) slow = "1시간"
        if (slow == 7200) slow = "2시간"
        if (slow == 10800) slow = "3시간"
        if (slow == 14400) slow = "4시간"
        if (slow == 18000) slow = "5시간"
        if (slow == 21600) slow = "6시간"

        let chtype = channel.type;
        if (chtype == 0) chtype = "<:Text_Channel:1112734068304527450> (텍스트)"
        if (chtype == 1) chtype = "DM (다이렉트 메시지)"
        if (chtype == 2) chtype = "<:Voice_Channel:1112734046867431476> (음성)"
        if (chtype == 3) chtype = "GDM (그룹 디엠)"
        if (chtype == 4) chtype = "<:Category:1116287659048960061> (카테고리)"
        if (chtype == 5) chtype = "<:Announcement:1112734061220347926> (공지)"
        if (chtype == 10) chtype = "<:Announcement:1112734061220347926> (공지 스레드)"
        if (chtype == 11) chtype = "<:Thread:1112734057151864832> (스레드)"
        if (chtype == 12) chtype = "<:Private_Thread:1112734053133713418> (비공개 스레드)"
        if (chtype == 13) chtype = "<:Stage:1117229608794869854> (스테이지)"
        if (chtype == 13) chtype = "(디렉토리)"
        if (chtype == 15) chtype = "<:Forum:1112734050717810839> (포럼)"
        if (chtype == 16) chtype = "<:Forum:1112734050717810839> (미디어)"


        const embed = new EmbedBuilder()
        .setTitle(`**[${name}] 채널 정보**`)
        .setColor("Yellow")
        .setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=4096`)
        .addFields(
            { name: "채널 이름", value:`**<#${id}> (${name})**`, inline: false },
            { name: "채널 아이디", value: `**${id}**` },
            { name: "채널 주제", value: `${topiic}` },
            { name: "채널 분류", value: `**${chtype}**` },
            { name: "채널 생성일", value: `**<t:${parseInt(createdTimestamp / 1000)}:R> (<t:${parseInt(createdTimestamp / 1000)}:D>)**` , inline: true},
            { name: "슬로우 모드", value: `**${slow}**` },
        );
        interaction.editReply({embeds: [embed] });
    },
};