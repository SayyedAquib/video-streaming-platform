import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
import store from "./utils/store";
// import ResultsPage from "./components/ResultsPage";
import { lazy, Suspense, useState } from "react";
import ButtonsContext from "./utils/ButtonsContext";
import { ErrorPage } from "./components/ErrorPage";

const WatchPage = lazy(() => import("./components/WatchPage"));
const ResultsPage = lazy(() => import("./components/ResultsPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense fallback=<h1>Loading...</h1>>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback=<h1>Loading...</h1>>
            <ResultsPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [text, setText] = useState("MERN");

  return (
    <ButtonsContext.Provider value={{ text, setText }}>
      <Provider store={store}>
        <div>
          <RouterProvider router={appRouter} />
          {/*
           *
           * Header
           * Body
           *  Sidebar
           *    MenuItems
           *  MainContainer
           *    ButtonsList
           *    VideoContainer
           *      VideoCard
           *
           */}
        </div>
      </Provider>
    </ButtonsContext.Provider>
  );
}

export default App;
