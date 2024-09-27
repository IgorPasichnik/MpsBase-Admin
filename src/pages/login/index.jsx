import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Row, Space } from "antd";
import { Layout } from "../../components/layout-admin";
import { CustomInput } from "../../components/custom-input-admin";
import { CustomPasswordInput } from "../../components/custom-password-input-admin";
import { CustomButton } from "../../components/custom-button-admin";
import { useLoginMutation } from "../../app/services/auth";
import { ErrorMessage } from "../../components/error-message";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const login = async (data) => {
    try {
      await loginUser(data).unwrap();
      navigate("/admin/products");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        console.log(err.data.message);
        setError(err.data.message);
      } else {
        console.log(process.env.REACT_APP_API_URL);
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: "30rem" }}>
          <Form onFinish={login}>
            <CustomInput
              type="name"
              name="name"
              placeholder="Имя пользователя"
            />
            <CustomPasswordInput name="password" placeholder="Пароль" />
            <CustomButton
              type="primary"
              htmlType="submit"
              loading={loginUserResult.isLoading}
            >
              Войти
            </CustomButton>
          </Form>
          <Space>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
