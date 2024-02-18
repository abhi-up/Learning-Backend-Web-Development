// imported mongoose object from the mongoose module
import mongoose, { mongo } from "mongoose"

// mongoose helps in making schemas
// it is made using new keyword
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// Exporting the schema to connect it with MongoDB
// There is a specific method for exporting the schema
// The model method takes two arguments: which model to create and
// based on what criteria should I create that model
export const User = mongoose.model("User", userSchema)
//                                  👆
// We reference this user while importing
