const Utils = require('../modules/utils');
const { config, lang } = Utils.variables;

module.exports = async (bot, ticket, executor, addedUser) => {

    if (!config.Tickets.Logs.Enabled) return;

    let guild = bot.guilds.cache.get(ticket.guild);
    let logs = Utils.findChannel(config.Tickets.Logs.Channel, guild);

    if (!logs) return;

    logs.send(Utils.Embed({
        title: lang.TicketModule.Logs.Tickets.UserAdded.Title,
        fields: [
            { name: lang.TicketModule.Logs.Tickets.UserAdded.Fields[0], value: `${ticket.channel_name} \n <#${ticket.channel_id}>` },
            { name: lang.TicketModule.Logs.Tickets.UserAdded.Fields[1], value: addedUser },
            { name: lang.TicketModule.Logs.Tickets.UserAdded.Fields[2], value: executor }
        ],
    }));
}
// 239232   8501   2229706    63250   1613689679   NULLED BY 0xEB   2229706