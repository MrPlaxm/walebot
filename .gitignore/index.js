const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");
var randnum = 0;
var kickMember =

bot.on('ready', () => {
    bot.user.setPresence({ games: { name: `[/help] Bot WaLe`, type: 0}})
    console.log("Bot Ready !");
});
bot.login('NDk2MzQ5Njk1ODEyMTczODQz.DpVAHg.Byf-q4ZBGQvnaqmJBemeD2azRVo');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "commandes"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#7B0C97')
            .addField("Les commandes !", "Voici les commandes existantes: !youtube, !pseudos")
            .setFooter("Nous rajouterons des commandes !")
        message.channel.sendEmbed(help_embed)
        console.log("Commande !commandes demandée !");
    }

    if (message.content === prefix + "pseudos"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#DF0606')
            .addField("Pseudos Epic !", "WaLe_Ahzah, WaLe_Plaxm, Sky_Hunderz")
            .setFooter("N'hésitez pas à m'envoyer vos pseudos Epic pour que je le mette ici :)!")
        message.channel.sendEmbed(help_embed)
        console.log("Commande !pseudos demandée");
    }

    if (message.content === prefix + "youtube"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#16ADC4')
            .addField("Chaine YouTube !", " Voici ma chaine YouTube: https://www.youtube.com/channel/UCkQeshGumSzFCvr2S9jAmfw")
            .setFooter("Les pseudos Epic de Ahzah et de Plaxm sont: WaLe_Ahzah et WaLe_Plaxm")
        message.channel.sendEmbed(help_embed)
       // message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }

    if (message.content === "Qui est le meilleur entre WaLe_Plaxm et WaLe_Ahzah ?"){
        random();

        if (randnum == 1){
            message.reply("C'est WaLe_Ahzah biensûr !")
            console.log(randnum);
        }
        if (randnum == 2){
            message.reply("WaLe_Ahzah n'est pas très fort !")
        }
        if (randnum == 3){
            message.reply("WaLe_Plaxm est le meilleur !")
        }
        if (randnum == 4){
            message.reply("WaLe_Plaxm n'est pas un grand joueur...")
        }
        if (randnum == 0){
            console.log(randnum);
        }
    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
