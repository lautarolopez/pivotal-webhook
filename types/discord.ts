export type DiscordAuthor = {
  name?: string;
  url?: string;
  icon_url?: string;
};

export type DiscordEmbed = {
  title?: string;
  type?: "rich";
  description?: string;
  url?: string;
  color?: number;
  author?: DiscordAuthor;
};

export type DiscordMessage = {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: boolean;
  embeds?: [
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?,
    DiscordEmbed?
  ];
};
