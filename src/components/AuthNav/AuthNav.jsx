import { links } from '../../utils';
import { Navigation } from '../index.js';

function AuthNav() {
  return <Navigation links={links.authLinks} />;
}

export default AuthNav;
