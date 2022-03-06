import { PAGE_TITLE } from '../../utils/constants';

import './header.scss';
import Logo from '../../images/logo-weather.png';

const Header = () => {
    return (
      <>
        <header>
          <div className="text-center">
            <img className="m-4 logo-icon" src={ Logo } alt={ PAGE_TITLE } />
            <h1 className="mb-4 page-title">{ PAGE_TITLE }</h1>
          </div>
        </header>
      </>
    )
}

export default Header;