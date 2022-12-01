module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) =>
  plop.setGenerator('component', {
    description: 'Generate a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the component's name ?"
      },
      {
        type: 'input',
        name: 'folder',
        message: "What's the folder's name ?"
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{folder}}/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'generators/Component/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{folder}}/{{properCase name}}/index.ts',
        templateFile: 'generators/Component/index.ts.hbs'
      }
    ]
  })
