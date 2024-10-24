/**
 * @file The testing point of the application.
 * @module src/TestApp
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

import { RightAngledTriangle } from 'geometry_ltwo'
import { Rectangle } from 'geometry_ltwo'
import { Circle } from 'geometry_ltwo'

/**
 * Test for all functions in the public interface for RightAngledTriangle.
 */
const triangle = new RightAngledTriangle()

triangle.oppositeSide = 10
triangle.adjacentSide = 8
triangle.hypotenuse = 12.8
triangle.adjacentAngle = 51
triangle.oppositeAngle = 39

const areaTriangel = triangle.getArea()
if (areaTriangel != 39.999979999995) {
  console.log('getArea() in RightAngledTriangel failed')
}

const perimeterTriangel = triangle.getPerimeter()
if (perimeterTriangel != 30.8) {
  console.log('getPerimeter() in RightAngledTriangel failed')
}

const hypotenuse = triangle.getHypotenuse()
if (hypotenuse != 12.806248474865697) {
  console.log('getHypotenuse() in RightAngledTriangel failed')
}

const oppositeSide = triangle.getOppositeSide()
if (oppositeSide != 9.991996797437439) {
  console.log('getOppositeSide() in RightAngledTriangel failed')
}

const adjacentSide = triangle.getAdjacentSide()
if (adjacentSide != 7.989993742175273) {
  console.log('getAdjacentSide() in RightAngledTriangel failed')
}

const oppositeAngle = triangle.getOppositeAngle()
if (oppositeAngle != 39) {
  console.log('getOppositeAngle() in RightAngledTriangel failed')
}

const adjacentAngle = triangle.getAdjacentAngle()
if (adjacentAngle != 51) {
  console.log('getAdjacentAngle() in RightAngledTriangel failed')
}

const adjacentSideA = triangle.getAdjacentSideWithAngle()
if (adjacentSideA != 8.05530100543792) {
  console.log('getAdjacentSideWithAngle() in RightAngledTriangel failed')
}

const hypotenuseA = triangle.getHypotenuseWithAngle()
if (hypotenuseA != 12.712125832525995) {
  console.log('getHypotenuseWithAngle() in RightAngledTriangel failed')
}

const adjacentAngleA = triangle.getAdjacentAngleWithSide()
if (adjacentAngleA != 51.31781254651057) {
  console.log('getAdjacentAngleWithSide() in RightAngledTriangel failed')
}

const oppositeAngleA = triangle.getOppositeAngleWithSide()
if (oppositeAngleA != 51.37516712694704) {
  console.log('getOppositeAngleWithSide() in RightAngledTriangel failed')
}

const increaseTriangle = triangle.increaseOrDecreaseByPercent(45)
if (triangle.adjacentSide != 9.633275663033837 && triangle.oppositeSide != 12.041594578792296 && triangle.hypotenuse != 15.41324106085414) {
  console.log('increaseOrDecreaseByPercent() in RightAngledTriangel failed')
}

/**
 * Test for all functions in the public interface for Rectangle.
 */
const rectangle = new Rectangle()

rectangle.length = 10
rectangle.width = 8

const areaRectangle = rectangle.getArea()
if (areaRectangle != 80) {
  console.log('getArea() in Rectangle failed')
}

const getPerimeterRectangle = rectangle.getPerimeter()
if (getPerimeterRectangle != 36) {
  console.log('getPerimeter() in Rectangle failed')
}

const increaseRectangle = rectangle.increaseOrDecreaseByPercent(45)
if (rectangle.length != 12.041594578792296 && rectangle.width != 9.633275663033837) {
  console.log('increaseOrDecreaseByPercent() in Rectangle failed')
}

/**
 * Test for all functions in the public interface for Circle.
 */
const circle = new Circle()

circle.radius = 5
circle.diameter = 10

const areaCircle = circle.getArea()
if (areaCircle != 78.53981633974483) {
  console.log('getArea() in Circle failed')
}

const circumferenceR = circle.getCircumferenceWithRadius()
if (circumferenceR != 31.41592653589793) {
  console.log('getCircumferenceWithRadius() in Circle failed')
}

const circumferenceD = circle.getCircumferenceWithDiameter()
if (circumferenceD != 31.41592653589793) {
  console.log('getCircumferenceWithDiameter() in Circle failed')
}

const increaseCircle = circle.increaseOrDecreaseByPercent(45)
if (circle.radius != 6.020797289396148 && circle.diameter != 12.041594578792296) {
  console.log('increaseOrDecreaseByPercent() in Circle failed')
}

/**
 * Test for validate function.
 */
try {
  const trianglePositive = new RightAngledTriangle()
  trianglePositive.adjacentSide = -2
} catch {
  console.log('')
  console.log('Validate function for must be a positive number passed.')
}

try {
  const rectanglePositive = new Rectangle()
  rectanglePositive.length = '10'
} catch {
  console.log('Validate function for must be a number passed.')
}

try {
  const circleString = new Circle()
  circleString.increaseOrDecreaseByPercent('45')
} catch {
  console.log('Second validate function for must be a number passed.')
}



/**
 * Test for checking if the object has properties.
 */
try {
  //RightAngledTriangel
  const triangleEmpty = new RightAngledTriangle()
  triangleEmpty.getAreaWithThreeSides()
} catch {
  console.log('Error in RightAngledTriangel caught successfully.')
}

try {
  //Rectangle
  const rectangleEmpty = new Rectangle()
  rectangleEmpty.getArea()
} catch {
  console.log('Error in Rectangle caught successfully.')
}

try {
  //Circle
  const circleEmpty = new Circle()
  circleEmpty.getCircumferenceWithRadius()
} catch {
  console.log('Error in Circle caught successfully.')
}

console.log('')
console.log('Testing complete, any failed tests can be seen above.')
console.log('')