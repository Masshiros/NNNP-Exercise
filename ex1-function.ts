/**
 * @name: twoFer
 * @param: string
 * @return: string
 */
function twoFer(name?: string): string {
  if (!name) {
    return `one for you, one for me`;
  }
  return `one for ${name}, one for me`;
}

/**
 * @name: isLeapYear
 * @param: number
 * @return: boolean
 */
function isLeapYear(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
}
