# Use React App

No config one-stop shop web app based on React with hooks.

### Getting Started

Create project

```sh
git clone https://github.com/expelledboy/use-react-app.git my-app && cd $_
rm -rf .git
git init
git add .
git commit -m 'Initial commit'
```

Run project with live-reloading

```sh
npm start
open http://localhost:3000
```

Develop with interactive tests functionality (hooks)

```sh
npm test
```

Develop with live-reloading web components (jsx)

```sh
npm run styleguide
open http://localhost:6060
```

Production build

```sh
npm run build
```

### Project Overview

- Uses `react-scripts` under the cover
- Using new [`hooks`](https://reactjs.org/docs/hooks-intro.html) feature
- Theme and styling using Material-UI
- Includes basic examples of functionality found in 80% of apps
  - Authentication and signin
  - Permissions based view components
- Should never be too complex

### TODO

- [ ] Dummy development graphql API
- [ ] CRUD on user which only admin can view
- [ ] Permissions based page and content feature flags
- [ ] https://medium.com/@oliver.grack/using-eslint-with-typescript-and-react-hooks-and-vscode-c583a18f0c75
