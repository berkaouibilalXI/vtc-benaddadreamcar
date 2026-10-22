import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes.jsx';
import './index.css';

// Rendu côté client (dev) + pré-rendu statique au build + hydratation en production.
export const createRoot = ViteReactSSG({ routes });
