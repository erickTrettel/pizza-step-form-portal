import logo from '../../assets/logo.png';

import './styles.css';

export default function Header() {
  return (
    <header className='app-header'>
      <img src={logo} className='logo-header' alt='logo monte sua pizza' />
    </header>
  );
}
