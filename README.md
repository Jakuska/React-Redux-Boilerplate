# FE Dashboard Boilerplate 

This is a minimal boilerplate for creating applications with React, Material-UI, and Redux. 

## VS Code Setup

* To enable ESLint, install a plugin for ESlint integration. I use "ESLint" by Dirk Baeumer.
* To enable `.editorconfig`, install this plugin: "EditorConfig for VS Code" by EditorConfig.
* To view Redux state, install this Chrome plugin: Redux DevTools.
* Misspellings can and have created bugs, so please use "Code Spell Checker" by Street Side Software.

I recommend that you set ESLint to format on save. To do this, add this to settings.json (this is VS Code settings):
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

and then reload VS Code.

If you're not familiar with ESLint, please google some tutorials to make sure that you have done this correctly. 

## Before Going to Production Checklist

* Check that an appropriate favicon is used (default favicon image is located in `public/images/icon.png`).
* Check that an appropriate page title is being used (this is set in `public/index.html`).
