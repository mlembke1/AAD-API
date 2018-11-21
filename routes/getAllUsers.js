const express = require('express')

const router = express.Router()
const knex = require('../knex')

const getAllUsers = (req, res, next) => {
    return knex('users')
      .select(['username', 'email', 'firstName', 'lastName', 'jobTitle', 'company', 'role'])
      .then((result) => {
        res.json(result)
      })
  }

router.get('/', getAllUsers)
module.exports = router