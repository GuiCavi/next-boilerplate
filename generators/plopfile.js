module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      // Component
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "templates/component/Styles.css.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/component/index.ts.hbs",
      },
      {
        type: "modify",
        path: "../src/components/index.ts",
        pattern: /(\/\/ -- PLOP --)/gi,
        template: "$1\nexport * from \"./{{pascalCase name}}\";",
      }
      // {
      //   type: "add",
      //   path: "../src/components/{{pascalCase name}}/stories.tsx",
      //   templateFile: "templates/component/stories.tsx.hbs",
      // },
      // {
      //   type: "add",
      //   path: "../src/components/{{pascalCase name}}/test.tsx",
      //   templateFile: "templates/component/test.tsx.hbs",
      // },
    ],
  });
};