import { links } from '../../utils';
import { Navigation } from '../index.js';

function AuthNavigation() {
  return <Navigation links={links.authLinks} />;
}

export default AuthNavigation;
