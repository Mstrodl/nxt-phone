const fs = require("fs");
const Discord = require("discord.js");

const MARY_ID = "196769986071625728";
const CHANNEL_ID = "444928655320285195";

const bot = new Discord.Client();
bot.login(fs.readFileSync("./token.txt"));

bot.on("messageReactionAdd", function(reaction, user) {
  if (user.id != MARY_ID) return;
  if (reaction.message.channel.id != CHANNEL_ID) return;
  if (!reaction.message.content.startsWith("r!tts ")) return;
  const content = reaction.message.content.replace("r!tts ");
  fs.writeFile("/data/data/com.termux/files/home/.tts", content, {
    encoding: "utf-8"
  });
});
