interface NavigationBarProps {
  links: NavigationButtonProps[]
}

interface NavigationButtonProps {
	target?: string;
	link: string;
  title: string;
}

interface HeaderBlockProps {
  children: React.ReactNode;
}
