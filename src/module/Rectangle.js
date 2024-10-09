/**
 * @file Module for the class Rectangle.
 * @module src/Rectangle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.2
 */

import { Validate } from './Validate.js'

/**
 * Represents a rectangle.
 */
export class Rectangle {
  #length
  #width

  set length(length) {
    const validate = new Validate()
    validate.validatePositiveNumber(length)
    this.#length = length
  }

  get length() {
    return this.#length
  }

  set width(width) {
    const validate = new Validate()
    validate.validatePositiveNumber(width)
    this.#width = width
  }

  get width() {
    return this.#width
  }

  /**
   * Returns the area.
   *
   * @throws {Error} Throws an error if the length or width property is not defined.
   * @returns { number } The area of the rectangle.
   */
  getArea() {
    if (!this.#length || !this.#width) {
      throw new Error('Function call must contain length and width.')
    }
    return this.#length * this.#width
  }

  /**
  * Returns the perimeter.
  *
  * @throws {Error} Throws an error if the length or width property is not defined.
  * @returns { number } The perimeter of the rectangle.
  */
  getPerimeter() {
    if (!this.#length || !this.#width) {
      throw new Error('Function call must contain length and width.')
    }
    return 2 * (this.#length + this.#width)
  }

  /**
   * Increases the rectangle by a percentage and sets the new properties.
   *
   * @throws {Error} Throws an error if the length or width property is not defined.
   * @param { number } percent The percentage to increase or decrease the rectangle with.
   */
  increaseOrDecreaseByPercent(percent) {
    if (!this.#length || !this.#width) {
      throw new Error('Function call must contain length and width.')
    }
    const validate = new Validate()
    validate.validateNumber(percent)

    const p = (100 + percent) / 100
    const a = Math.sqrt(p)

    this.#length = a * this.#length
    this.#width = a * this.#width
  }
}