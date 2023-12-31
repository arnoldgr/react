// 12/26/21 Jeff Rosengarden

// this code file will contains routes that different people can go to.

import express from 'express'                                       // needed middleware installed in package.json
import MoviesController from './movies.controller.js'               // needed controller defined in movies.controller.js
import ReviewsController from './reviews.controller.js'
 
const router = express.Router()                                     // get access to express router
 
// initial route for testing, in following line, that will send 'hello world'
//router.route('/').get((req,res) => res.send('hello world'))       // test route to confirm everything is working

router.route('/').get(MoviesController.apiGetMovies)   
             // first route available in project from 
router.route("/id/:id").get(MoviesController.apiGetMovieById)
router.route("/ratings").get(MoviesController.apiGetRatings)                                                                  // MoviesController class and apiGetMovies method
                                                                    // will be called when there is a request for the URL
                                                                    // localhost:5050/api/v1/movies

                                                                    // next route available in project which will handle
                                                                    // post, put and delete http requests
                                                                    // post = add new review so call apiPostReview
                                                                    // put = edit existing review so call apiUpdateReview
                                                                    // delete = delete existing review so call apiDeleteReview
router
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)
 
export default router
