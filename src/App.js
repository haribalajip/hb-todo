import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Items from "./routes/Items";
import Root from "./routes/Root";
import Login from "./routes/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "items", element: <Items /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
