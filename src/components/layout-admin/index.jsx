import { Header } from "../header-admin/index";
import Styles from "./index.module.css";
import { Layout as AntLayout } from "antd";

export const Layout = ({ children }) => {
  return (
    <div className={Styles.main}>
      <Header />
      <AntLayout.Content>{children}</AntLayout.Content>
    </div>
  );
};
