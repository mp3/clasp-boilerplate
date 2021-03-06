import * as inquirer from 'inquirer'
import * as cpx from 'cpx'

const askProjectName = async () => {
  const name = 'New project name'
  const question: inquirer.Question = {
    name,
    type: 'input',
    message: 'Enter new project name'
  }
  const answer = await inquirer.prompt(question)

  return answer[name]
}

const copyFromBaseDir = async (dest: string) => {
  await cpx.copy('./base/{*,.*}', `./projects/${dest}`)
  await cpx.copy('./base/src/*', `./projects/${dest}/src`)
}

(async () => {
  const projectName = await askProjectName()
  await copyFromBaseDir(projectName)
})()
