# Bot - Website

A cute and interactive Discord bot website built with modern web technologies. Features a responsive design, interactive game, feedback modal, and configurable bot links.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Credits](#credits)
- [Support](#support)

---

## ✨ Features

✅ **Responsive Design** - Works perfectly on all devices  
✅ **Interactive Game** - Feed Kali Billi mini-game with score tracking  
✅ **Feedback Modal** - Users can submit feedback with Google reCAPTCHA  
✅ **Cute UI** - Beautiful animations and smooth interactions  
✅ **Configurable** - Easy setup with centralized config file  
✅ **Organized Structure** - Clean and maintainable codebase  
✅ **No Database Needed** - Static site ready to deploy instantly  

---

## 📁 Project Structure

```
kali-billi-website/
├── index.html              # Main website
├── README.md               # This file
├── config/
│   └── config.js          # Bot configuration (UPDATE THIS!)
├── assets/
│   ├── images/            # Bot icon and demo images
│   │   ├── kali-billi-icon.webp
│   │   ├── demo-1.jpg
│   │   └── demo-2.jpg
│   ├── icons/             # Phosphor icons library
│   └── fonts/             # Font Awesome icons
└── .replit                # Replit configuration
```

---

## 🚀 Quick Start

### 1. Clone or Deploy

Deploy this directly on Replit or your preferred hosting platform.

### 2. Configure Your Bot

Edit `config/config.js` and update:

```javascript
const CONFIG = {
  // Replace with your Discord bot's client ID
  botInviteUrl: "https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot",
  
  // Replace with your support server invite code
  supportServerUrl: "https://discord.gg/YOUR_SERVER_INVITE_CODE",
  
  botName: "",
  botDescription: "Your Cute Discord Companion - Fun, moderation, and AI chat for your Discord server."
};
```

### 3. Get Your Bot IDs

**For Bot Invite URL:**
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select your bot application
3. Copy the **Client ID**
4. Replace `YOUR_BOT_CLIENT_ID` in the config

**For Support Server:**
1. Create a Discord server (or use existing one)
2. Get the invite link (e.g., `https://discord.gg/ABC123`)
3. Extract the code and replace `YOUR_SERVER_INVITE_CODE`

### 4. Done! 🎉

All buttons will automatically redirect based on your configuration:
- ✨ Invite Bot buttons (navigation & hero section)
- 💬 Support buttons (hero section & footer)
- All managed through `config.js` - **no HTML editing needed!**

---

## ⚙️ Configuration Guide

### Example Configuration

```javascript
const CONFIG = {
  botInviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1234567890&permissions=8&scope=bot",
  supportServerUrl: "https://discord.gg/ABC123xyz",
  botName: "Kali Billi",
  botDescription: "Your Cute Discord Companion - Fun, moderation, and AI chat for your Discord server."
};
```

### How It Works

The configuration system automatically updates all links across the website:

| Button | Location | Redirects To |
|--------|----------|--------------|
| Invite Bot | Navigation Bar | `botInviteUrl` |
| Invite Kali Billi | Hero Section | `botInviteUrl` |
| Get Support | Hero Section | `supportServerUrl` |
| Discord (Footer) | Footer | `botInviteUrl` |
| Support (Footer) | Footer | `supportServerUrl` |

---

## 🎮 Features Explained

### Interactive Game
Users can play a mini-game where they feed Kali Billi. The game tracks score and provides fun interactions.

### Feedback System
Built-in feedback modal with:
- Discord username input
- Server link field
- Feedback text area
- Google reCAPTCHA protection
- Success/error messages

### Responsive Design
- Mobile-first approach
- Smooth animations
- Touch-friendly interactions
- Beautiful gradient backgrounds

---

## 🛠️ Customization

### Change Colors
Edit the CSS variables in `index.html` `<style>` section:

```css
:root {
  --bg-color: #FFFDFB;
  --primary-blue: #DDEEFB;
  --primary-pink: #FFD6E0;
  /* ... etc ... */
}
```

### Update Bot Images
Replace images in `assets/images/`:
- `kali-billi-icon.webp` - Bot avatar
- `demo-1.jpg` - Demo image 1
- `demo-2.jpg` - Demo image 2

---

## 📦 Deployment

### Replit
Simply connect this repository and it will deploy automatically with the built-in Python HTTP server.

### Other Platforms
```bash
# Using Python (built-in)
python3 -m http.server 5000

# Using Node.js
npx http-server -p 5000

# Using Node with live reload
npx live-server --port=5000
```

Then access at `http://localhost:5000`

---

## 🎨 Design Highlights

- **Color Palette**: Soft blues, pinks, and lavenders
- **Typography**: Nunito (rounded) & Poppins (modern)
- **Animations**: Smooth hover effects and floating elements
- **Icons**: Font Awesome 6.4.0 & Phosphor Icons
- **Fonts**: Google Fonts (no additional setup needed)

---

## 📝 Credits

This project was created with contributions from:

- **itsfizys** - Original Design & Development
- **AeroX Development** - Enhancements & Optimization

Special thanks to the Discord.js and web development communities!

---

## 🤝 Support

Need help? Join our support server!

**📎 Support Server:** [https://discord.gg/AeroX](https://discord.gg/AeroX)

---

## 📄 License

This project is provided as-is for personal and educational use.

---

## 💡 Tips

1. **For Best Results**: Keep `config.js` updated with correct Discord links
2. **Mobile Testing**: Use browser DevTools to test on different screen sizes
3. **Performance**: All assets are optimized for fast loading
4. **SEO**: Update meta tags in `index.html` if deploying publicly

---

**Made with 💕 by the AeroX Development team**

Last Updated: December 30, 2025
