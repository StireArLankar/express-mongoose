import express from 'express'
import PostController from '../controllers/post.controller'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await PostController.GetAllPosts()
    return res.json(posts)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const post = await PostController.CreatePost({
      description: req.body.description,
      title: req.body.title,
      date: req.body.date
    })
    return res.json(post)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

router.get('/:postId', async (req, res) => {
  try {
    const postId = req.params.postId
    const post = await PostController.GetPostById(postId)
    return res.json(post)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

router.delete('/:postId', async (req, res) => {
  try {
    const postId = req.params.postId
    const response = await PostController.RemovePostById(postId)
    return res.json({ message: 'Succes!' })
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

export default router
