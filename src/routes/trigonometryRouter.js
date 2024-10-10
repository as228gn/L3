/**
 * @file Defines the geometry router.
 * @module geometryRouter
 * @author Anna Ståhlberg
 */
import express from 'express'
import { TrigonometryController } from '../controllers/TrigonometryController.js'

export const router = express.Router()

const controller = new TrigonometryController()

router.get('/', (req, res, next) => controller.index(req, res, next))

router.get('/area', (req, res, next) => controller.area(req, res, next))
router.post('/area', (req, res, next) => controller.areaPost(req, res, next))

router.get('/hypotenuse', (req, res, next) => controller.hypotenuse(req, res, next))
router.post('/hypotenuse', (req, res, next) => controller.hypotenusePost(req, res, next))