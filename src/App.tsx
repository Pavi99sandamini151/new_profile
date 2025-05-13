import { Sidebar } from './components/sideBar';
import  MainContent  from './components/mainContent';

import './App.css';
import './index.css';

export default function App() {

  return (
    <main className="app-layout" style={{ border: '1px solid green'}}>
      <Sidebar />
      <MainContent />
    </main>
  );
}
