import Navbar from './header';
import { useState } from 'react';
import {ContactUs} from './contactUs';
import {AboutMe} from './aboutMe';
import {Expereince} from './experience';
import {Skills} from './skills';
import {Projects} from './projects';
import { Certifications } from './certifications';
import { Blogs } from './Blogs';

export default function MainContent() {
  const [activePage, setActivePage] = useState('about'); // default to 'about'

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <AboutMe />;
      case 'resume': return <Expereince />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'certificates': return <Certifications />;
      case 'blog': return <Blogs />;
      case 'contact': return <ContactUs />;
      default: return <AboutMe />;
    }
  };

  return (
    <div className="main-content">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}
