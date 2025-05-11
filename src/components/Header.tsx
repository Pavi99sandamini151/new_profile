const Header = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">John Doe</h1>
    <nav className="space-x-4">
      <a href="#about" className="hover:text-blue-500">About</a>
      <a href="#projects" className="hover:text-blue-500">Projects</a>
      <a href="#contact" className="hover:text-blue-500">Contact</a>
    </nav>
  </header>
);

export default Header;