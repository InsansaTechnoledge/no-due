import { parseWhatsappMessage } from "./whatsapp.parser.js";
import { sendMainMenu } from "./whatsapp.template.js";
import whatsappService from "../../services/whatsapp.service.js";
import { getCurrentDue, updateTransactionStatus } from "../../services/due.service.js"
import whatsappAuditService from "../../services/whatsapp.audit.service.js";

export const handleWhatsappEvent = async (payload) => {
  const entry = payload?.entry?.[0];
  if (!entry) return;

  const intent = parseWhatsappMessage(entry);
  if (!intent) return;

  const rawMsg = entry?.changes?.[0]?.value?.messages?.[0];

  // Audit Log Inbound
  await whatsappAuditService.logMessage({
    mobile: intent.from,
    direction: "INBOUND",
    type: intent.type === "LIST" ? "interactive" : "text",
    text: intent.text || intent.actionId,
    whatsappMessageId: rawMsg?.id,
    status: "received",
    payload: intent
  });

  // Greeting
  if (intent.type === "TEXT" && ["hi", "hello"].includes(intent.text)) {

    //will send menu from pre defined templates 
    return sendMainMenu(intent.from);
  }

  // List action routing
  if (intent.type === "LIST") {
    routeAction(intent);
  }
};

const routeAction = async (intent) => {
  const { actionId, from } = intent;
  console.log(`User ${from} selected action Id : ${actionId}`);

  switch (actionId) {
    case "CHECK_CURRENT_DUE":
      // TODO: Fetch and send current due
      console.log("Processing CHECK_CURRENT_DUE");
      //check my current due
      const response = await getCurrentDue({ from });
      if (response.success) {
        await whatsappService.sendTextMessage({ to: from, text: response?.text });
      }

      break;


    // Reminder Responses
    case "PAY_TODAY":
    case "WILL_PAY_TODAY":
    case "PAID_TODAY":
    case "PAY_WEEK":
    case "PAY_SOON":
    case "NEED_STATEMENT":
      console.log(`User ${from} selected options for ${actionId}`);
      try {
        await updateTransactionStatus({ from, actionId });
      } catch (error) {
        console.error("Error processing whatsapp response:", error);
      }
      break;

    default:
      console.log("Unknown action:", actionId);
  }
};
