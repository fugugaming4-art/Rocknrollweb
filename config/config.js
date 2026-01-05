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
