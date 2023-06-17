import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainMenu from './Components/Menu/MainMenu';
import Service from './Components/Services/Service';
import About from './Components/About/About';
import Landing from './Components/LandingPage/Landing';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainMenu></MainMenu>,children:[
        {
          path:"/",
          element:<Landing/>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/services",
          element:<Service></Service>
        },
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
       <MainMenu></MainMenu>
      </RouterProvider>
       
    </div>
  );
}

export default App;
