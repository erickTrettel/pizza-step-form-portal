import { toast } from 'react-toastify';

import Routes from './routes';

toast.configure({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  newestOnTop: true,
});

function App() {
  return <Routes />;
}

export default App;
