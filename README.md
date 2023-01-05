

# MingUi Guideline

MingLabs UI guidelines for Web Project. 

### Background

* There are many web projects which share the foundation elements like: Typing, Button, Dialog etc.
* Lots duplicate works for basic settings
* Code style is varies across different project

### Road Map

* Basic atomic UI styles used in every project: Typing, Layout, Color, Button etc.
* Useful components which may not used in every project: Dialog, Form etc. 
* Generate Component based on Design Tokens, build design tools plugins (eg: figma) help to generate Vue3 Components.

### Project Structure

```
.
├── README.md 
├── Tech.md             // Technical details
├── babel.config.json   // Babel config for compile JS 
├── jest.config.js      // Unit test config
├── jest.preset.js      // Unit test default config
├── nx.json             // Build system config
├── packages
│   ├── components      // Atomic components
│   ├── docs            // Web Docs 
│   ├── playground      // Components playground to present all components
│   └── theme-chalk     // Global theme config
├── tools               // Build tools for generating
├── tsconfig.base.json  // TypeScript config
├── workspace.json      // NX workspace
```

### Steps to run

1. add global shortcuts: `alias pnx="pnpm nx --"`
2. run `pnx serve playground` to start dev server for view components
3. access `http://localhost:3000` 


`Built via Vue3 and WindCSS with ❤️.`
