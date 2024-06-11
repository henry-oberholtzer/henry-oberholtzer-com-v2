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

A simple website, build to expand based on an eventual connection to a database containing my work.

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

- Node package manager required for set up.
- To establish locally, download the [repository](https://github.com/henry-oberholtzer/henry-oberholtzer-com-v2.git) to your computer.
- Open the folder with your terminal and run `npm install` to gather necessary resources.
- To view the development server follow with, `npm run dev` after install is complete.
- The site will be live on the mentioned local port.

## Known Bugs

- Apart from content still being missing in some areas, no bugs are known at this time.

## Upcoming Changes / Planned Features

- Actual blog style posts from yours truly
- More theme option, switch for themes
- Alternate styling options (totally different looks possibly)
- SEO meta tags
- React Animations (react-spring /core?)
- Isomorphic Deployment (Next.js?)

## License

Copyright [Henry Oberholtzer](https://www.henryoberholtzer.com/) (c) 2023

Original code licensed under GNU GPLv3, other code bases and libraries as stated.

[CMU Serif](https://fontlibrary.org/en/font/cmu-serif) (C)
Donald Knuth and licensed under a SIL OFL
