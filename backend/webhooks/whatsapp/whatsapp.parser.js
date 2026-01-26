export const parseWhatsappMessage = (entry) => {
  const message = entry?.changes?.[0]?.value?.messages?.[0];
  if (!message) return null;
  console.log("message: ",message);

  if (message.type === "interactive") {
    const interactive = message.interactive;
    let actionId = null;

    if (interactive.type === "list_reply") {
      actionId = interactive.list_reply.id;
      title = interactive.list_reply.title;
    }

    return {
      type: "LIST",
      actionId,
      text: title || actionId,
      from: message.from,
      context: message.context
    };
  }

  if (message.type === "text") {
    return {
      type: "TEXT",
      text: message.text.body.toLowerCase(),
      from: message.from
    };
  }

  return null;
};
