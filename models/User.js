import mongoose from "mongoose";

const { Schema } = mongoose;
// Schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 50,
    },
    active: {
      type: Boolean,
      default: true,
    },
    roles: {
      type: Number,
      default:200,
      // User: 200, UserPro:220, Super Admin: 100, Admin: 110 Author: 111
    },
    softDelete: {
      type: Boolean,
      default: false,
    },
    lastLoginAt: {
      type: String,
      default: Date.now(),
    },
    createdAt: {
      type: String,
      default:'',
    },
    refreshToken: {
      type: String,
      default: null,
    },
    sAccessToken: {
      type: String,
      default: null,
    },
    mobile: Number,
    bio: String,
    reviews: [Number],
    favs: [Number],
    watch_list: [Number],
    avatar:{
      type: String,
      default:'/images/avatar-holder.jpg',
    },
    deletedAt: String,
    provider: String,
    lastLoginIp: String,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
