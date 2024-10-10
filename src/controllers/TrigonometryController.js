import { RightAngledTriangle } from '../module/RightAngledTriangle.js'

export class TrigonometryController {
  

  index (req, res, next) {
    res.render('trigonometry/index')
  }

  area(req, res, next) {
    const viewData = {}
    res.render('trigonometry/area', { viewData })
  }

  areaPost(req, res, next) {    
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
  }

  calcArea(base, hight, hypotenuse){
    const triangle = new RightAngledTriangle()
    triangle.adjacentSide = hight
    triangle.oppositeSide = base
    triangle.hypotenuse = hypotenuse
    const area = Math.ceil(triangle.getAreaWithThreeSides())
    return area
  }

  hypotenuse(req, res, next) {
    const viewData = {}
    res.render('trigonometry/hypotenuse', { viewData })
  }

}