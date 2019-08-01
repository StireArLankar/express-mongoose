import mongoose, { Schema, Document } from 'mongoose'

export interface IPost extends Document {
  date?: Date
  description: string
  title: string
}

const PostSchema = new Schema({
  date: {
    default: Date.now,
    type: Date,
  },
  description: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
})

export default mongoose.model<IPost>('Posts', PostSchema)
