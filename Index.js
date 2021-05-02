const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on('message', async msg => {
    console.log(msg.author.username)
    console.log(msg.content)
    //console.log(msg.attachments.array()[0].url)
    switch(msg.content){
        case '!help':
            const embed = new MessageEmbed()
                .setTitle('Comandos')
                .addField('!nuevo_torneo', 'Crea un torneo (Solo Organizadores)')
                .addField('!fecha_torneo', 'Muestra la fecha del torneo')
                .addField('!registro <@Usuario>', 'Registra a un usuario al torneo en curso (Solo Organizadores)')
                .addField('!registro', 'El usuario se registra para el torneo en curso')
                .addField('!combate <@usuario> vs <@usuario>', 'El usuario se registra para el torneo en curso y muestra el numero del combate (Solo Organizadores)')
                .addField('!combates', 'Muestra la tabla de combates que se daran')
                .addField('!ganador', 'Establece como ganador de un combate a un usuario (Solo Organizadores)')
                .addField('!pelea', 'Muestra con quien pelearás en la ronda y sus equipos asignados')
                .addField('!alias <tu_usuario>', 'Registra tu alias del juego\nEjemplo: !alias Isaaxu79')
                .addField('!equipo <numero>', 'Al subir un archivo y asignarle un numero, Registra el equipo con la imagen vinculada maximo 3 equipos\nEjemplo: !equipo 1')
                .addField('!finalizar <@usuario_ganador>', 'Termina el torneo al mismo tiempo que asigna al ganador\nEjemplo: !alias Isaaxu79')
            msg.channel.send(embed);
            break;
        default:
            break;
    }

});

client.login('ODM3MTIzNTU3NjgyNDQ2MzQ4.YIn-EQ.EavKG5AmouZkkaJhkJjU3jgsP-Y');