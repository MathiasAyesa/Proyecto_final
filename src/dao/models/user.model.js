import mongoose, { Schema } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";
import { paginate } from "mongoose-paginate-v2";

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String,
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Carts'
    },
    restoreToken: {
        token: String,
        expirationTime: Date
    },
    role: {
        type: String,
        default: "user"
    }

})

userSchema.plugin(mongooseAutoPopulate)
// userSchema.plugin(paginate)
const userModel = mongoose.model('user', userSchema)

export default userModel