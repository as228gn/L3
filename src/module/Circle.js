/**
 * @file Module for the class Circle.
 * @module src/Circle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.2
 */

import { Validate } from './Validate.js'

/**
 * Represents a circle.
 */
export class Circle {
  #diameter
  #radius

  set diameter(diameter) {
    const validate = new Validate()
    validate.validatePositiveNumber(diameter)
    this.#diameter = diameter
  }

  get diameter() {
    return this.#diameter
  }

  set radius(radius) {
    const validate = new Validate()
    validate.validatePositiveNumber(radius)
    this.#radius = radius
  }

  get radius() {
    return this.#radius
  }

 /**
  * Returns the area.
  *
  * @throws {Error} Throws an error if the radius property is not defined.
  * @returns { number } The area of the circle.
  */
  getArea() {
    if (!this.#radius) {
      throw new Error('Function call must contain radius.')
    }
    return Math.PI * Math.pow(this.#radius, 2)
  }

  /**
   * Returns the circumference.
   *
   * @throws {Error} Throws an error if the radius property is not defined.
   * @returns { number } The circumference of the circle.
   */
  getCircumferenceWithRadius() {
    if (!this.#radius) {
      throw new Error('Function call must contain radius.')
    }
    return 2 * this.#radius * Math.PI
  }

  /**
   * Returns the circumference.
   *
   * @throws {Error} Throws an error if the diameter property is not defined.
   * @returns { number } The circumference of the circle.
   */
  getCircumferenceWithDiameter() {
    if (!this.#diameter) {
      throw new Error('Function call must contain diameter.')
    }
    return this.#diameter * Math.PI
  }

  /**
   * Increases the circle by a percentage and sets the new properties.
   *
   * @throws {Error} Throws an error if the radius property is not defined.
   * @param { number } percent The percentage to increase or decrease the circle with.
   */
  increaseOrDecreaseByPercent(percent) {
    if (!this.#radius) {
      throw new Error('Function call must contain radius.')
    }
    const validate = new Validate()
    validate.validateNumber(percent)

    const p = (100 + percent) / 100
    const a = Math.sqrt(p)

    this.#radius = a * this.#radius
    this.#diameter = this.#radius * 2
  }

}