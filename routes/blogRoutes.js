const express = require('express')
const router  = express.Router()
const blogController = require('../controllers/blogController')

router.get('/create', blogController.blog_create_get)

router.get('/', blogController.blog_index)

router.post('/', blogController.blog_create_post)

router.get('/:id', blogController.blog_detail)

router.delete('/:id',blogController.blog_delete)

//404 page
router.use((req,res) => {
    res.status(404).render('404',{ title: '404'})
})

module.exports = router
 