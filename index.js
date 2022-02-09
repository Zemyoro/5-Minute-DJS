const { Client, Intents } = require('discord.js')
const d = new Client({intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
cg = require('./config.json'), d.cmd=new(require('discord.js')).Collection();
(require('fs')).readdir('./commands/', (e, c) =>{ if (e) return console.log('error');
    c.forEach(c=>d.cmd.set(c.split('.')[0], require(`./commands/${c}`)));
}), d.on('ready', () => console.log('r')).on('messageCreate', me =>{
    const a4 = me.content.slice(cg.p.length).trim().split(/ +/g);
    cm=d.cmd.get(a4.shift().toLowerCase());
    if(me.author.bot||!me.content.indexOf(cg.p)===0||!cm) return;
    else cm.e(me, a4);
}), d.login(cg.t);