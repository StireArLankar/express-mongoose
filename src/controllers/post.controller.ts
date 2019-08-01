import Post, { IPost } from '../models/post.model'

interface ICreatePostInput {
  title: IPost['title']
  description: IPost['description']
  date?: IPost['date']
}

const CreatePost = async ({ title, description, date }: ICreatePostInput): Promise<IPost> => {
  return Post.create({
    date,
    description,
    title,
  })
    .then((data) => data)
    .catch((error) => { throw error })
}

const GetAllPosts = async (): Promise<IPost[]> => {
  return Post.find()
    .then((data) => data)
    .catch((error) => { throw error })
}

const GetPostById = async (postId: string): Promise<IPost> => {
  return Post.findById(postId)
    .then((data) => {
      if (data) return data
      throw Error('No such post')
    })
    .catch((error) => { throw error })
}

const RemovePostById = async (postId: string): Promise<any> => {
  return Post.deleteOne({ _id: postId })
    .then((data) => data)
    .catch((error) => { throw error })
}

export default { CreatePost, GetAllPosts, GetPostById, RemovePostById }
