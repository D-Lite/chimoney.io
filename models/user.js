const { Schema, model } = require("mongoose");
 
const UserSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin",
            enum: ["admin", "user"],
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);
 
module.exports = model("User", UserSchema);