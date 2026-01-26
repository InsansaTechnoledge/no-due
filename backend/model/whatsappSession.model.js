import mongoose, { Schema } from "mongoose";

const whatsappSessionSchema = new Schema(
    {
        mobile: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true
        },

        currentState: {
            type: String,
            default: "IDLE", // IDLE, AWAITING_PAYMENT_CONFIRMATION, etc.
            index: true
        },

        // Store temporary data needed for the session (e.g. selectedTransactionId)
        metadata: {
            type: Schema.Types.Mixed,
            default: {}
        },

        lastInteractionAt: {
            type: Date,
            default: Date.now,
            index: true // useful for cleaning up old sessions
        }
    },
    {
        timestamps: true
    }
);

// Auto-update lastInteractionAt on save
whatsappSessionSchema.pre("save", function (next) {
    this.lastInteractionAt = new Date();
    next();
});

const WhatsAppSession = mongoose.model("WhatsAppSession", whatsappSessionSchema);

export default WhatsAppSession;
