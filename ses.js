const Discord = require('discord.js');
const tokens = [
    "",
];
const chnls = [
    "843534904452579348",
];
const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async () => {
        console.log(client.user.username);
        await client.user.setActivity({
            name: "Rowie ❤️",
            type: "LISTENING"
        });
        concon = await client.channels.cache.get(chnls[index]).join()
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("843534531243540544").rawPosition)) { //Yetkili Id'si
                ses = await concon.play('./hosgeldin.mp3');
                selamlı.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("843534167182802964").rawPosition) {//Hosgeldin ıd'si
                ses = await concon.play('./yetkili.mp3');
                selamlı.push(cur.member.user.id);
            }
        }
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })
}
