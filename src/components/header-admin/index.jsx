import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { Layout, Space } from "antd";
import Styles from "./index.module.css";
import { CustomButton } from "../custom-button-admin";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
import { BarsOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "../../images/logo.jpg";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <Layout.Header className={Styles.header}>
      <Space>
        <Link to={Paths.products}>
          <img style={{ width: "150px" }} src={logo} />
        </Link>
      </Space>
      {user ? (
        <Space className={Styles.headerRight}>
          <Link to={Paths.products}>
            <CustomButton type="ghost" icon={<BarsOutlined />}>
              Продукция
            </CustomButton>
          </Link>
          <Link to={Paths.productions}>
            <CustomButton type="ghost" icon={<BarsOutlined />}>
              Производство
            </CustomButton>
          </Link>

          <CustomButton
            type="ghost"
            icon={<LogoutOutlined />}
            onClick={onLogoutClick}
          >
            Выйти
          </CustomButton>
        </Space>
      ) : null}
    </Layout.Header>
  );
};
