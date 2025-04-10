/**
 * @description Regular expression to check if there is any SQL code within the text
 */
export const SQL =
  /(["'`])(?:SELECT|CREATE|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|ON|LIKE|GROUP BY|ORDER BY|LIMIT)[^"'`]*\1/gi;

/**
 * @description Regular expression to find tables
 */
export const TABLE =
  /\b(FROM|JOIN|UPDATE|INTO|DELETE\s+FROM|TRUNCATE|REPLACE|MERGE\s+INTO)\s*$/i;
