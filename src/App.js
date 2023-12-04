
import './App.css';
import Main from './Layout/Main';
import Admins from './Pages/Admins';
import HackingLogin from './Pages/HackingLogin';
import Login from './Pages/Login';
import Waiting from './Pages/waiting';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Main/>,
      children: [
        {
          path: '/',
          element: <Login />,
           
        },
        {
          path: '/admins',
          element: <Admins />,
           
        },
        {
          path: '/hackingLogin',
          element: <HackingLogin />,
           
        },
        {
          path: '/waiting',
          element: <Waiting />,
           
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}>
        <Login/>
      </RouterProvider>
      
    </div>
  
  );
}

export default App;
