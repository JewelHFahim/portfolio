import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";

function App() {

  return (
    <div className="px-12">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
