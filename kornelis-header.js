/*
============================================
; Title:  kornelis-header.js
; Author: Professor Krasso
; Date:   04 December 2019
; Modified By: Izabella Kornelis
; Description: Displays a formatted header
;===========================================
*/

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns a well-formatted string header
 */
exports.display = function (firstName, lastName, assignment) {
  let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
    new Date().toLocaleDateString()

  return output
}
