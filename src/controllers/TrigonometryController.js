/**
 * @file Defines the TrigonometryController class.
 * @module TrigonometryController
 * @author Anna Ståhlberg
 */
import { RightAngledTriangle } from 'geometry_ltwo'

export class TrigonometryController {
  #triangle = new RightAngledTriangle()

  /**
   * Renders the page for calculating area.
   *
   */
  area(req, res, next) {
    const viewData = {}
    res.render('trigonometry/area', { viewData })
  }

  /**
   * Renders the page for when the area has been calculated.
   *
   */
  areaPost(req, res, next) {
    try {
      const { base, hight, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.#calcArea(baseN, hightN, hypotenuseN)
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

  /**
   * Calculates the area.
   *
   */
  #calcArea(base, hight, hypotenuse) {
    this.#triangle.adjacentSide = hight
    this.#triangle.oppositeSide = base
    this.#triangle.hypotenuse = hypotenuse
    const area = Math.ceil(this.#triangle.getArea())
    return area
  }

  /**
   * Renders the page for calculating the hypotenuse.
   *
   */
  hypotenuse(req, res, next) {
    const viewData = {}
    res.render('trigonometry/hypotenuse', { viewData })
  }

  /**
   * Renders the page for when the hypotenuse has been calculated.
   *
   */
  hypotenusePost(req, res, next) {
    try {
      const { base, hight } = req.body
      const baseN = parseInt(base);
      const hightN = parseInt(hight);
      const result = this.#calcHypotenuse(baseN, hightN)
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

  /**
   * Calculates the hypotenuse.
   *
   */
  #calcHypotenuse(base, hight) {
    this.#triangle.oppositeSide = base
    this.#triangle.adjacentSide = hight
    const hypotenuse = Math.ceil(this.#triangle.getHypotenuse())
    return hypotenuse
  }

  /**
   * Renders the page for calculating the perimeter.
   *
   */
  perimeter(req, res, next) {
    const viewData = {}
    res.render('trigonometry/perimeter', { viewData })
  }

  /**
   * Renders the page for when the perimeter has been calculated.
   *
   */
  perimeterPost(req, res, next) {
    try {
      const { base, hight, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.#calcPerimeter(baseN, hightN, hypotenuseN)
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

  /**
   * Calculates the perimeter.
   *
   */
  #calcPerimeter(base, hight, hypotenuse) {
    this.#triangle.oppositeSide = base
    this.#triangle.adjacentSide = hight
    this.#triangle.hypotenuse = hypotenuse
    const perimeter = Math.ceil(this.#triangle.getPerimeter())
    return perimeter
  }

  /**
   * Renders the page for calculating the hight.
   *
   */
  hight(req, res, next) {
    const viewData = {}
    res.render('trigonometry/hight', { viewData })
  }

  /**
   * Renders the page for when the hight has been calculated.
   *
   */
  hightPost(req, res, next) {
    try {
      const { base, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.#calcHight(baseN, hypotenuseN)
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

  /**
   * Calculates the hight.
   *
   */
  #calcHight(base, hypotenuse) {
    this.#triangle.oppositeSide = base
    this.#triangle.hypotenuse = hypotenuse
    const hight = Math.ceil(this.#triangle.getAdjacentSide())
    return hight
  }

  /**
   * Renders the page for calculating the base.
   *
   */
  base(req, res, next) {
    const viewData = {}
    res.render('trigonometry/base', { viewData })
  }

  /**
   * Renders the page for when the base has been calculated.
   *
   */
  basePost(req, res, next) {
    try {
      const { hight, hypotenuse } = req.body
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.#calcBase(hightN, hypotenuseN)
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

  /**
   * Calculates the base.
   *
   */
  #calcBase(hight, hypotenuse) {
    this.#triangle.adjacentSide = hight
    this.#triangle.hypotenuse = hypotenuse
    const base = Math.ceil(this.#triangle.getOppositeSide())
    return base
  }

  /**
   * Renders the page for calculating the angleA.
   *
   */
  angleA(req, res, next) {
    const viewData = {}
    res.render('trigonometry/angleA', { viewData })
  }

  /**
   * Renders the page for when the angleA has been calculated.
   *
   */
  angleAPost(req, res, next) {
    try {
      const { hight, hypotenuse } = req.body
      const hightN = parseInt(hight);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.#calcAngleA(hightN, hypotenuseN)
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

  /**
   * Calculates angleA.
   *
   */
  #calcAngleA(hight, hypotenuse) {
    this.#triangle.adjacentSide = hight
    this.#triangle.hypotenuse = hypotenuse
    const angleA = Math.ceil(this.#triangle.getAdjacentAngleWithSide())
    return angleA
  }

  /**
   * Renders the page for calculating angleB.
   *
   */
  angleB(req, res, next) {
    const viewData = {}
    res.render('trigonometry/angleB', { viewData })
  }

  /**
   * Renders the page for when the angleB has been calculated.
   *
   */
  angleBPost(req, res, next) {
    try {
      const { base, hypotenuse } = req.body
      const baseN = parseInt(base);
      const hypotenuseN = parseInt(hypotenuse);
      const result = this.#calcAngleB(baseN, hypotenuseN)
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

  /**
   * Calculates angleB.
   *
   */
  #calcAngleB(base, hypotenuse) {
    this.#triangle.oppositeSide = base
    this.#triangle.hypotenuse = hypotenuse
    const angleB = Math.ceil(this.#triangle.getOppositeAngleWithSide())
    return angleB
  }

}