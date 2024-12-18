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
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/story/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/component/stories.tsx.hbs",
      },
      {
        type: "modify",
        path: "../src/components/index.ts",
        pattern: /(\/\/ -- PLOP --)/gi,
        template: "$1\nexport * from \"./{{pascalCase name}}\";",
      },
    ],
  });

  plop.setGenerator("provider", {
    description: "",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your provider name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/providers/{{pascalCase name}}.tsx",
        templateFile: "templates/provider/provider.tsx.hbs",
      },
      {
        type: "modify",
        path: "../src/providers/index.ts",
        pattern: /(\/\/ -- PLOP --)/gi,
        template: "$1\nexport { default as {{pascalCase name}} } from \"./{{pascalCase name}}\";",
      },
    ],
  });
};
