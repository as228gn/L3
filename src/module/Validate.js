/**
 * @file Module for the class Validate.
 * @module src/Validate
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.2
 */

export class Validate {

  /**
   * Validate the value as a positive number.
   *
   * @throws {Error} Throws an error if the value is not a positive number.
   * @param { number } value The value to validate as a positive number.
   */
  validatePositiveNumber(value) {
    if (typeof value != 'number' || isNaN(value)) {
      throw new Error('Parameter must be a positive number.')
    }
    if (value < 1) {
      throw new Error('Parameter must be a positive number')
    }
  }

  /**
   * Validate the value as a number.
   *
   * @throws {Error} Throws an error if the value is not a number.
   * @param { number } value The value to validate as a number.
   */
  validateNumber(value) {
    if (typeof value != 'number' || isNaN(value)) {
      throw new Error('Parameter must be a number.')
    }
  }
}