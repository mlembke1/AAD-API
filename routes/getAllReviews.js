const express = require('express')

const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
const KEY = process.env.JWT_KEY

const getAllReviews = (req, res, next) => {
    const payload = jwt.verify(req.cookies.aad_token, KEY)
    return knex('reviews')
    .where('user_id', payload.id)
      .select('*')
      .orderBy('id', 'asc')
      .then((result) => {
        res.json(result)
      })
  }

router.get('/', getAllReviews)
module.exports = router