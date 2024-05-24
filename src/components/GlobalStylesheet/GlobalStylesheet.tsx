import { createGlobalStyle } from "styled-components"

const GlobalStylesheet = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
}

#root {
width: 100%;
height: 100%;
display: flex;
justify-content: center;
font-family: 'Gyre Bonum', 'Computer Modern', 'Georgia', 'Times New Roman', serif;
text-rendering: geometricPrecision !important;
-webkit-font-smoothing: antialiased !important;
}

html {
scrollbar-gutter: stable both-edges;
background-color: ${props => props.theme.background};
}

a {
	text-decoration: none;
	color: ${props => props.theme.text};
	font-weight: normal;
	transition: opacity ease-in-out 50ms;
}`

export { GlobalStylesheet }
