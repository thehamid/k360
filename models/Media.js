import mongoose from "mongoose";
require("./Person");

const { Schema } = mongoose;
// Schema
const mediaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
    poster: {
      type: String,
      default:'/images/avatar-holder.jpg',
    },
    header: {
      type: String,
      default:'/images/avatar-holder.jpg',
    },
    createdAt: {
      type: String,
    },
    updateAt: {
      type: String,
    },
    published: {
      type: Boolean,
      default:true,
    },
    tags: [String],
    media_id:Number,
    slug:String,
    rating:Number,
    yearProduct:Number,
    premiereDate:String,
    status:String,
    production:String,
    link:String,
    runtime:String,
    schedule:String,
    watchLinkTitle:String,
    watchLinkLogo:String,
    watchLink:String,
    videoTizer:String,
    instagram:String,
    network: [{
      type: mongoose.Types.ObjectId,
      ref: "Network",
    }],
    genre:[ {
      type: mongoose.Types.ObjectId,
      ref: "Genre",
    }],   
  },
  { timestamps: true }
);


// Schema
const genreSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);


// Schema
const networkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    type: String,
    logo:String
  
  },
  { timestamps: true }
);

// Schema
const seasonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    media_id: {
      type: Number,
      required: true,
    },
    number:Number,
    premiereDate:String,
    endDate:String,
    completed:{
      type: Boolean,
      default:false,
    },
  
  },
  { timestamps: true }
);

// Schema
const episodeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    media_id: {
      type: Number,
      required: true,
    },
    slug: {
      type:String,
      required:true,
    },
    summary_episode:String,
    episode_number:Number,
    season_number:Number,
    airdate:String,
    episode_rate:Number,
    cover: String, 
  },
  { timestamps: true }
);

// Schema
const castSchema = new Schema(
  {
    media_id: {
      type: mongoose.Types.ObjectId,
      ref: "Media",
    },
    person_id:{
      type: mongoose.Types.ObjectId,
      ref: "Person",
    },
    person_cat:String,
    role_name: String,
    thumb:String,
    position: Number,
    
 
  },
  { timestamps: true }
);

// Schema
const photoSchema = new Schema(
  {
    media_id:String,
    episode_id:String,
    url:String, 
  },
  { timestamps: true }
);

export const Media=  mongoose.models?.Media || mongoose.model("Media", mediaSchema);
export const Genre= mongoose.models?.Genre || mongoose.model("Genre", genreSchema);
export const Network= mongoose.models?.Network || mongoose.model("Network", networkSchema);
export const Season= mongoose.models?.Season || mongoose.model("Season", seasonSchema);
export const Episode= mongoose.models?.Episode || mongoose.model("Episode", episodeSchema);
export const Cast= mongoose.models?.Cast || mongoose.model("Cast", castSchema);
export const Photo= mongoose.models?.Photo || mongoose.model("Photo", photoSchema);