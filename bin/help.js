const colors = require('colors/safe');

module.exports = `
${colors.bgYellow.gray('------------------------------------------ HELP ------------------------------------------')}

                      ${colors.bold.yellow('ESBNB, the ESLint airbnb config installer')}

Install ESLint with the Airbnb ESLint rules, including ECMAScript 6+ and React (default)
${colors.bold('$ esbnb')}

Install ESLint with the Airbnb ESLint rules, including ECMAScript 6+ (base)
${colors.bold('$ esbnb base')}

Install ESLint with the Airbnb ESLint rules, including ECMAScript 5 and below (legacy)
${colors.bold('$ esbnb legacy')}

${colors.gray('.eslintrc file will be created if not already and properly configured.')}

${colors.bgYellow.gray('---------------------------------------- END HELP ----------------------------------------')}
`;
