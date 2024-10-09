/**
 * @file Defines the geometry router.
 * @module geometryRouter
 * @author Anna Ståhlberg
 */
import express from 'express'
import { GeometryController } from '../controllers/GeometryController.js'

export const router = express.Router()

const controller = new GeometryController()

router.get('/', (req, res, next) => controller.index(req, res, next))

router.get('/geometry', (req, res, next) => controller.index(req, res, next))