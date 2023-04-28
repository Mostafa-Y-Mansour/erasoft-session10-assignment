import { Outlet } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";

function HomeLayout() {
  return (
    <>
      <MainNavBar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
