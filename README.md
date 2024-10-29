# Moderation Bot

A robust and flexible Discord moderation bot built with [Discord.js](https://discord.js.org/) to keep your server safe, manage community interactions, and enforce rules effectively.

## Features
- **Moderation Commands**: Essential moderation tools, including kick, ban, mute, unmute, and message clearing.
- **Logging**: Logs all moderation actions (e.g., kicks, bans, warnings) to a designated server channel for accountability.
- **Permission Checks**: Ensures that only users with appropriate permissions can access moderation commands.
- **Modular Commands**: Each command is organized in a separate file for easy maintenance and scalability.

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd moderation-bot

2. Install Dependencies
Install the required packages using npm:

npm install


3. Configure Environment Variables

Create a .env file in the root directory (see .env.example for reference).

Add your Discord bot token in the .env file:

DISCORD_TOKEN=your-bot-token-here



4. Run the Bot
Start the bot with:

npm start



Command List

Command Details

Kick: Usage: !kick @user - Removes the mentioned user from the server.

Ban: Usage: !ban @user - Permanently bans the user from the server.

Mute: Usage: !mute @user - Restricts the user from sending messages by assigning a "Muted" role.

Unmute: Usage: !unmute @user - Restores the user’s messaging abilities.

Clear: Usage: !clear <number> - Deletes the specified number of recent messages from the channel.

Warn: Usage: !warn @user <reason> - Logs a warning for the mentioned user, including the reason.


moderation-bot/
├── commands/             # Contains individual command files
│   ├── kick.js
│   ├── ban.js
│   ├── mute.js
│   ├── unmute.js
│   ├── clear.js
│   └── warn.js
├── .env.example          # Example environment variable file
├── .gitignore            # Specifies files to ignore in Git
├── bot.js                # Main bot file
├── package.json          # Node.js dependencies and scripts
└── README.md             # Documentation

Contributing

We welcome contributions! If you would like to add features or improve existing functionality, feel free to submit a pull request.

Steps to Contribute

1. Fork the repository.


2. Create a new branch with a descriptive name.


3. Make your changes and commit them with clear messages.


4. Open a pull request, explaining your changes.



Support

If you encounter any issues or need help with the bot, please open an issue in this repository.

License

This project is licensed under the MIT License. See the LICENSE file for more information.


---

Additional Resources

Discord Developer Portal: Set up and manage your bot's application.

Discord.js Documentation: Learn more about the Discord.js library.
