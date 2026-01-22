const PREFIX = ".";

const commands = {
    fun: [
        "jailed", "wanted", "wasted", "chess", "connect4", "ttt", "rps",
        "wordle", "2048", "ship", "tickle", "kiss", "slap", "feed", "pet",
        "howcute", "howgay", "slots", "penis", "sigma", "pickupline", "iplookup"
    ],

    giveaway: [
        `${PREFIX}gstart`
    ],

    mod: [
        "mute", "unmute", "unmuteall", "kick", "warn", "ban", "unban",
        "nick", "setprefix", "clear", "clear all", "clear bots",
        "clear embeds", "clear files", "clear mentions", "clear images",
        "clear contains", "clear reactions", "clear user", "clear emoji",
        "role", "role humans", "role bots", "nuke", "lock", "unlock",
        "hide", "unhide", "unbanall", "hideall", "unhideall",
        "rolecolor", "roleicon", "steal", "addsticker",
        "automod", "automod enable", "automod disable",
        "automod punishment", "automod config", "automod logging",
        "automod ignore", "automod ignore channel", "automod ignore role",
        "automod ignore show", "automod ignore reset",
        "automod unignore", "automod unignore channel", "automod unignore role"
    ],

    reports: [
        "not rn"
    ],

    setup: [
        `${PREFIX}ticket setup`
    ],

    utility: [
        "afk", "avatar", "firstmessage", "servericon", "membercount",
        "snipe", "invite", "serverinfo", "userinfo", "roleinfo",
        "botinfo", "boosts", "ping", "list boosters", "list inrole",
        "list emojis", "list bots", "list admins", "list invoice",
        "list mods", "list roles", "banner user", "banner server"
    ]
};

/**
 * 
 * 
 * Rock n roll !! Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite Rock n roll !!"
  botInviteUrl: "https://discord.com/oauth2/authorize?client_id=1446842240310710394",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/PmTmBGeMFq",
  
  // Bot name (for display)
  botName: "Rock n roll !!",
  
  // Bot description
  botDescription: "Your Discord server - Fun, moderation, and Antinuke for your Discord server."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
