import {
  DiscordMessage,
  DiscordEmbed,
  DiscordAuthor,
} from "./types/discord.ts";
import { PivotalTrackerActivity } from "./types/pivotal";
const color = 55744;

export const formatMessage = (
  activity: PivotalTrackerActivity
): DiscordMessage => {
  const message: DiscordMessage = {
    avatar_url:
      "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/4657070231551942281-512.png",
    tts: false,
    embeds: [
      {
        title: activity.project.name,
        description: activity.message,
        url: activity.primary_resources[0].url,
      },
    ],
  };
  return message;
};
