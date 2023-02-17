// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!license) {
  return ``
}else{
return `[![${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) {
  return ``
}else if (license === 'MIT'){
  return `https://choosealicense.com/licenses/mit/`
}else if (license === 'apache'){
  return `https://www.apache.org/licenses/LICENSE-2.0`
}else if (license === 'GNU'){
  return `https://choosealicense.com/licenses/agpl-3.0/`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
  return ``
}else{
  return (license)
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  ${data.title}



  ## Description
  ${data.description}



  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## Credits
  ${data.credits}


  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}



`;
}

module.exports = generateMarkdown;

// ## Table of Contents
// ###[Installation] (#installation)
// ###[Usage](#usage)
// ###[Credits](#credits)
// ###[License](#license)

// to add if needed \|/
// ## Table of Contents
// ##Badges
// ##Features
// ## How to Contribute
// ##Tests
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
