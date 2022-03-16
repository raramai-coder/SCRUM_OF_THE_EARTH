const Discord = require("discord.js");
const auth = require("./auth.json");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// const fs = requires('noe:fs');

const client_id = 952945016781815808;
const guild_id = 952940028865183804;

const commands = [{
    name: 'ping',
    description : 'Replies with Pong!'
}]

const rest = new REST({version:'9'}).setToken(auth.token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(client_id, guild_id),
            { body: commands },
        );

        console.log("successfully reloaded application (/) commands.")
    } catch (error) {
        console.error(error);
    }
})();

let Igor = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]});

Igor.on('ready', () => {
    console.log("Connected and ready");
    console.log("Logged in as:");
    console.log(Igor.username+" - ("+Igor.id+")");
})

Igor.login(auth.token);

