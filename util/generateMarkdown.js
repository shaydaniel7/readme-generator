function generateMarkdown(data) {
  return `# **${data.title}**

<br/>

## Description
${data.description}

<br/>

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Information](#info)

<br/>

## Installation
To install necessary dependencies, run this command:
\`\`\`
${data.installation}
\`\`\`

<br/>

## Usage
${data.usage}    

<br/>

## License
This project is licensed by ${data.license}.

<br/>

## Contributing
${data.contribution}

<br/>

## Tests
To run tests, run this command:
\`\`\`
${data.tests}
\`\`\`

<br/>

## Information
If you have any questions about this project, you can open an issue or contact me directly at ${data.email}. You can find more of my work on Github at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
