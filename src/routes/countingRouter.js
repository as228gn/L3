/**
 * @file Defines the counting router.
 * @module countingRouter
 * @author Anna Ståhlberg
 */
import express from 'express'
import { CountingController } from '../controllers/CountingController.js'

export const router = express.Router()

const controller = new CountingController()

router.get('/', (req, res, next) => controller.index(req, res, next))

router.get('/counting', (req, res, next) => controller.index(req, res, next))

