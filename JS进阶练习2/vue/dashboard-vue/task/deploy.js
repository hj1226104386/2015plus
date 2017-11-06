const { exec } = require('child_process')
const ora = require('ora')
const chalk = require('chalk')
const config = require('../config')

const spinner = ora('Deploy to gh-pages...')
spinner.start()

const message = `Update @ ${new Date()}`
const check = `cd ${config.paths.output} && git status -s`
const commit = `cd ${config.paths.output} && git add --all && git commit -m '${message}' && git push -u origin gh-pages`

module.exports = () => exec(check, (err, stdout, stderr) => {
  if (err) throw err
  if (!stdout.toString().trim()) {
    console.log(chalk.yellow(`\n\n  No change in ${config.paths.output}\n`))
    return spinner.stop()
  }
  exec(commit, (err, stdout, stderr) => {
    if (err) throw err
    console.log(chalk.green(`\n\n  ${message}\n`))
    spinner.stop()
  })
})

// Execute when root
if (!module.parent) {
  module.exports()
}
