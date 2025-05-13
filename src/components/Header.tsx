type NavbarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map(item => (
          <li className="navbar-item" key={item.id}>
            <button
              className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
