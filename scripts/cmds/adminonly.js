const fs = require("fs-extra");

this.config = {
	name: "adminonly",
	version: "1.0",
	author: {
		name: "gerald",
		contacts: ""
	},
	cooldowns: 5,
	role: 2,
	shortDescription: "bật/tắt chỉ admin sử dụng bot",
	longDescription: "bật/tắt chế độ chỉ admin mới có thể sử dụng bot",
	category: "owner",
	guide: "{prefix}{name} [on|off]"
};

module.exports = {
	config: this.config,
	start: function ({ globalGoat, args, message, client }) {
		const { config } = globalGoat;
		if (args[0] == "on") {
			config.adminOnly = true;
			message.reply("turned on mode only bot admin can use bot");
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else if (args[0] == "off") {
			config.adminOnly = false;
			message.reply("turned off only admin bot");
			fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
		}
		else return message.reply("please choose on/off");
	}
};
