import { BrowserRouter } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Sidebar from "../components/common/Sidebar/Sidebar";
import AppRouter from "../routes";
import classes from "./App.module.scss";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className={classes.app}>
          <Sidebar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
