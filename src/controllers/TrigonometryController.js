/**
 * @file Defines the TrigonometryController class.
 * @module TrigonometryController
 * @author Anna Ståhlberg
 */
import { RightAngledTriangle } from 'geometry_ltwo'

export class TrigonometryController {
  #triangle = new RightAngledTriangle()

  index(req, res, next) {
    res.render('trigonometry/index')
  }

  area(req, res, next) {
    const viewData = {}
    res.render('trigonometry/area', { viewData })
  }

  areaPost(req, res, next) {
    try {
      const { base, hight, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.calcArea(baseN, hightN, hypotenuseN)
      const viewData = {
        baseSide: base,
        hightSide: hight,
        hypotenuseSide: hypotenuse,
        area: result
      }
      res.render('trigonometry/area', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/area', { viewData })
    }
  }

  calcArea(base, hight, hypotenuse) {
    this.#triangle.adjacentSide = hight
    this.#triangle.oppositeSide = base
    this.#triangle.hypotenuse = hypotenuse
    const area = Math.ceil(this.#triangle.getAreaWithThreeSides())
    return area
  }

  hypotenuse(req, res, next) {
    const viewData = {}
    res.render('trigonometry/hypotenuse', { viewData })
  }

  hypotenusePost(req, res, next) {
    try {
      const { base, hight } = req.body
      const baseN = parseInt(base);
      const hightN = parseInt(hight);
      const result = this.calcHypotenuse(baseN, hightN)
      const viewData = {
        baseSide: base,
        hightSide: hight,
        hypotenuse: result
      }
      res.render('trigonometry/hypotenuse', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/hypotenuse', { viewData })
    }
  }

  calcHypotenuse(base, hight) {
    this.#triangle.oppositeSide = base
    this.#triangle.adjacentSide = hight
    const hypotenuse = Math.ceil(this.#triangle.getHypotenuse())
    return hypotenuse
  }

  perimeter(req, res, next) {
    const viewData = {}
    res.render('trigonometry/perimeter', { viewData })
  }

  perimeterPost(req, res, next) {
    try {
      const { base, hight, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.calcPerimeter(baseN, hightN, hypotenuseN)
      const viewData = {
        baseSide: base,
        hightSide: hight,
        hypotenuseSide: hypotenuse,
        perimeter: result
      }
      res.render('trigonometry/perimeter', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/perimeter', { viewData })
    }
  }

  calcPerimeter(base, hight, hypotenuse) {
    this.#triangle.oppositeSide = base
    this.#triangle.adjacentSide = hight
    this.#triangle.hypotenuse = hypotenuse
    const perimeter = Math.ceil(this.#triangle.getPerimeter())
    return perimeter
  }

  hight(req, res, next) {
    const viewData = {}
    res.render('trigonometry/hight', { viewData })
  }

  hightPost(req, res, next) {
    try {
      const { base, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.calcHight(baseN, hypotenuseN)
      const viewData = {
        baseSide: base,
        hypotenuseSide: hypotenuse,
        hight: result
      }
      res.render('trigonometry/hight', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/hight', { viewData })
    }
  }

  calcHight(base, hypotenuse) {
    this.#triangle.oppositeSide = base
    this.#triangle.hypotenuse = hypotenuse
    const hight = Math.ceil(this.#triangle.getAdjacentSideWithOppositeSideAndHypotenuse())
    return hight
  }

  base(req, res, next) {
    const viewData = {}
    res.render('trigonometry/base', { viewData })
  }

  basePost(req, res, next) {
    try {
      const { hight, hypotenuse } = req.body
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.calcBase(hightN, hypotenuseN)
      const viewData = {
        hightSide: hight,
        hypotenuseSide: hypotenuse,
        base: result
      }
      res.render('trigonometry/base', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/base', { viewData })
    }
  }

  calcBase(hight, hypotenuse) {
    this.#triangle.adjacentSide = hight
    this.#triangle.hypotenuse = hypotenuse
    const base = Math.ceil(this.#triangle.getOppositeSideWithAdjacentSideAndHypotenuse())
    return base
  }

  angleA(req, res, next) {
    const viewData = {}
    res.render('trigonometry/angleA', { viewData })
  }

  angleAPost(req, res, next) {
    try {
      const { hight, hypotenuse } = req.body
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.calcAngleA(hightN, hypotenuseN)
      const viewData = {
        hightSide: hight,
        hypotenuseSide: hypotenuse,
        angleA: result
      }
      res.render('trigonometry/angleA', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/angleA', { viewData })
    }
  }

  calcAngleA(hight, hypotenuse) {
    this.#triangle.adjacentSide = hight
    this.#triangle.hypotenuse = hypotenuse
    const angleA = Math.ceil(this.#triangle.getAdjacentAngleWithAdjacentSideAndHypotenus())
    return angleA
  }

  angleB(req, res, next) {
    const viewData = {}
    res.render('trigonometry/angleB', { viewData })
  }

  angleBPost(req, res, next) {
    try {
      const { base, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.calcAngleB(baseN, hypotenuseN)
      const viewData = {
        baseSide: base,
        hypotenuseSide: hypotenuse,
        angleB: result
      }
      res.render('trigonometry/angleB', { viewData })
    } catch (error) {
      const viewData = {}
      res.render('trigonometry/angleB', { viewData })
    }
  }

  calcAngleB(base, hypotenuse) {
    this.#triangle.oppositeSide = base
    this.#triangle.hypotenuse = hypotenuse
    const angleB = Math.ceil(this.#triangle.getOppositeAngleWithOppositeSideAndHypotenuse())
    return angleB
  }

}