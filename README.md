# henryoberholtzer.com

My personal portfolio website, intended to be a home for all my development and creative projects

This project is a fork/re-writer of [digital_oberholtzer](https://github.com/henry-oberholtzer/digital_oberholtzer) and has been rebuilt to use TypeScript, React and React-Router

By Henry Oberholtzer

## Technologies Used

- TypeScript
- React
- Redux
- Redux Toolkit
- React-Router
- JavaScript
- Vite
- Webpack

## Description

### Routes

```
/ --- Home
/resume --- Resume
/about --- About
/projects
  ./{project-title}
/music
  ./mixes
  ./releases
/design
```

### Component Tree

```md
App
├── Header
│ │ - Displays Henry Oberholtzer title
│ │ - Adapts to mobile sizing by resizing name
│ │ - On click, redirects to main page
│ ├── Navigation
│ │ │ - NavigationButton [iterated]
│ │ │ - Route users to each page
│ │ │ - Shifts from horizontal to vertical in mobile display
│ │ │ - In horizontal, non mobile form, set close under the navigation
├── Page
│ │ - Container for content
│ ├── PostContainer [iterated]
│ │ - Component used to render projects and related information
```

## Setup/Installation Requirements

- TBD

## Known Bugs

- TBD

## Upcoming Changes / Planned Features

- React Router
- Context Provider?
- SEO meta tags
- React Animations (react-spring /core?)
- Switchable themes
- Isomorphic Deployment (Next.js?)

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023

Original code licensed under GNU GPLv3, other code bases and libraries as stated.

[MU Serif](https://fontlibrary.org/en/font/cmu-serif) (C)
Donald Knuth and licensed under a SIL OFL
