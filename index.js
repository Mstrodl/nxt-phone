const fs = require("fs");
const cp = require("child_process");
const Discord = require("discord.js");

const MARY_ID = "196769986071625728";
const CHANNEL_ID = "444928655320285195";

const bot = new Discord.Client();
bot
  .login(fs.readFileSync("./token.txt", { encoding: "utf-8" }).trim())
  .then(() => console.log("owo!"));

bot.on("messageReactionAdd", function(reaction, user) {
  if (user.id != MARY_ID) return;
  if (reaction.message.channel.id != CHANNEL_ID) return;
  if (!reaction.message.content.startsWith("r!tts ")) return;
  const content =
    reaction.message.content.replace("r!tts ", "").replace(/\n/gm, " ") + "\n";
  fs.writeFile("./tts", content, { encoding: "utf-8" }, function(err, res) {
    if (err) throw err;
    cp.exec("cat ./tts > /data/data/com.termux/files/home/.tts");
  });
});

bot.on("message", async function(msg) {
  if (msg.channel.id == CHANNEL_ID && msg.content.startsWith("r!tts "))
    return msg.react("✅");
});
