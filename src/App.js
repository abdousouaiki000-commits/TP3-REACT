import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import Connexion from './Connexion';

import Notifications from './Notifications';
import ListeCourses from './ListeCourses';
import Galerie from './Galerie';

function App() {
  return (
    <div>
      <h1 className="titre">Mon Application React</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/apropos">À propos</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Exercice 1 */}
      <h2>Notifications</h2>
      <Notifications notifications={3} />

      {/* Exercice 2 */}
      <h2>Liste des courses</h2>
      <ListeCourses courses={["Lait", "Pain", "Fromage"]} />

      {/* Exercice 3 */}
      <Galerie />

      {/* Connexion */}
      <Connexion />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;