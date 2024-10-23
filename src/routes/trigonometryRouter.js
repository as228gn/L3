/**
 * @file Defines the trigonometry router.
 * @module trigonometryRouter
 * @author Anna Ståhlberg
 */
import express from 'express'
import { TrigonometryController } from '../controllers/TrigonometryController.js'

export const router = express.Router()

const controller = new TrigonometryController()

router.get('/area', (req, res, next) => controller.area(req, res, next))
router.post('/area', (req, res, next) => controller.areaPost(req, res, next))

router.get('/hypotenuse', (req, res, next) => controller.hypotenuse(req, res, next))
router.post('/hypotenuse', (req, res, next) => controller.hypotenusePost(req, res, next))

router.get('/perimeter', (req, res, next) => controller.perimeter(req, res, next))
router.post('/perimeter', (req, res, next) => controller.perimeterPost(req, res, next))

router.get('/hight', (req, res, next) => controller.hight(req, res, next))
router.post('/hight', (req, res, next) => controller.hightPost(req, res, next))

router.get('/base', (req, res, next) => controller.base(req, res, next))
router.post('/base', (req, res, next) => controller.basePost(req, res, next))

router.get('/angleA', (req, res, next) => controller.angleA(req, res, next))
router.post('/angleA', (req, res, next) => controller.angleAPost(req, res, next))

router.get('/angleB', (req, res, next) => controller.angleB(req, res, next))
router.post('/angleB', (req, res, next) => controller.angleBPost(req, res, next))