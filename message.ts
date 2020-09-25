import { DiscordMessage } from "./types/discord.ts";
import { PivotalTrackerActivity, PrimaryResource } from "./types/pivotal.ts";
const color = 55744;

export const formatMessage = (
  activity: PivotalTrackerActivity
): DiscordMessage | null => {
  if (
    activity.project &&
    activity.project.name &&
    activity.highlight &&
    activity.message &&
    activity.primary_resources &&
    activity.primary_resources[0] &&
    activity.primary_resources[0].url &&
    activity.primary_resources[0].name &&
    activity.performed_by &&
    activity.performed_by.name
  ) {
    const message: DiscordMessage = {
      avatar_url:
        "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/4657070231551942281-512.png",
      embeds: [
        {
          title: activity.project.name + ": " + activity.message,
          description: activity.primary_resources[0].name,
          url: activity.primary_resources[0].url,
          color: color,
          type: "rich",
          author: {
            name: activity.performed_by.name,
          },
        },
      ],
    };
    return message;
  } else {
    return null;
  }
};
