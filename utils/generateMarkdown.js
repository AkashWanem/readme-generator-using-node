// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseOption = data.license;
  let licenseString = ' ';
  if (licenseOption === "MIT") {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseOption === "GNU General Public License 2.0") {
    licenseString = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  };
  if (licenseOption === "Apache License 2.0") {
     licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
  if (licenseOption === "ISC") {
      licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    };
  if (licenseOption === "Mozilla Public License 2.0") {
    licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  };
  return licenseString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseOption = data.license;
  let licenseLink = ' ';
  if (licenseOption === "MIT") {
    licenseLink = `https://opensource.org/licenses/MIT`
  };
  if (licenseOption === "GNU General Public License 2.0") {
    licenseLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  };
  if (licenseOption === "Apache License 2.0") {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`
    };
  if (licenseOption === "ISC") {
    licenseLink = `https://opensource.org/licenses/ISC`
    };
  if (licenseOption === "Mozilla Public License 2.0") {
    licenseLink = `https://opensource.org/licenses/MPL-2.0`
  };
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contribution)
  5. [Tests](#test)
  6. [License](#license)
  7. [Question](#questions)

  ## Description
  ${data.description}

  ## Installation

  _Instructions for installation of this application:_
  ${data.installation}

  ## Usage

  _Instructions for usage:_
  ${data.usage}

  ## Tests

  _Instructions for testing your application:_
  ${data.test}

  ## License

  This application uses [${data.license}](${renderLicenseLink(license)}) license.

  ## Questions

  If you have any questions regarding the project please contact me on ${data.email} or visit (https://www.github.com/${data.username}), Thank You!

`;
}

module.exports = generateMarkdown;
