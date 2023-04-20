// TODO: Create a function that returns a license badge based on which license is passed in - look for license badge icons - look up switch statements - make a case for each badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD':
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    default:
      badge = '';
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let link;
    switch (license) {
      case 'MIT':
        link = '(https://opensource.org/license/mit/)';
        break;
      case 'ISC':
        link = '(https://opensource.org/license/isc-license-txt)';
        break;
      case 'Apache':
        link = '(https://opensource.org/license/apache-2-0/)';
        break;
      case 'BSD':
        link = '(https://opensource.org/license/bsd-2-clause/)';
        break;
      default:
        link = '';
        break;
    }
    return link;
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = `Licensed under the ${license} license, which can be viewed at: ${renderLicenseLink(license)}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
# ${data.title}

${renderLicenseBadge(data.license)};

## Description 
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## License
${renderLicenseSection(data.license)};

## Questions
You can view my GitHub profile here: [${data.github}](https://github.com/${data.github})<br>
If you have any questions and would like to contact me, you can email me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
