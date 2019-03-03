const express = require('express')
const bodyParser = require('body-parser')

const controller = require('../controllers/AlgorithmsController')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/binary_search', controller.AlgorithmBinarySearchGet)
router.post('/tree_search', controller.AlgorithmTreeSearchGet)