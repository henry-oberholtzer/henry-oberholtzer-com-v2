interface NavigationBarProps {
  links: NavigationButtonProps[]
}

interface NavigationButtonProps {
	link: string;
  title: string;
}

interface HeaderBlockProps {
  children: React.ReactNode;
}
