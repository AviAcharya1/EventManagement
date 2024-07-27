// src/routes.js
import Home from './pages/Home';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';

const routes = [
  { path: '/', component: Home },
  { path: '/events', component: EventList },
  { path: '/event/:id', component: EventDetails },
  { path: '/create-event', component: CreateEvent },
  { path: '/about-us', component: AboutUs },
  { path: '/services', component: Services },
  { path: '/gallery', component: Gallery },
  
];

export default routes;