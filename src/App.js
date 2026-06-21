import "./App.css";
import "./index.css";

import { Body } from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import SearchWatch from "./components/SearchWatch";
const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
       {
        path:"/watch",
        element:<WatchPage/>
      },
       {
        path:"/demo",
        element:<Demo/>
      },
       {
        path:"/search",
        element:<SearchWatch/>
      }
    ]
  }
])
function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
    <div className="App">

    
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  
  );
}

export default App;
