import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout-admin";
import { Row } from "antd";
import { ProductsForm } from "../../components/products-form-admin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddProductMutation } from "../../app/services/products";
import { selectUser } from "../../features/auth/authSlice";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

export const AddProducts = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [addProduct] = useAddProductMutation();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    }
  }, [navigate, user]);

  const handleAddProducts = async (data) => {
    try {
      await addProduct(data).unwrap();
      navigate(`${Paths.status}/created`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        console.log(err.data.message);
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <ProductsForm
          title="Добавить товар"
          btnText="Добавить"
          onFinish={handleAddProducts}
          error={error}
        />
        <ErrorMessage message={error} />
      </Row>
    </Layout>
  );
};
