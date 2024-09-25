import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout-admin";
import { Row } from "antd";
import { ProductsForm } from "../../components/products-form-admin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAddProductionMutation } from "../../app/services/productions";
import { selectUser } from "../../features/auth/authSlice";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

export const AddProductions = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [addProduction] = useAddProductionMutation();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    }
  }, [navigate, user]);

  const handleAddProductions = async (data) => {
    try {
      await addProduction(data).unwrap();
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
          title="Добавить услугу"
          btnText="Добавить"
          onFinish={handleAddProductions}
          error={error}
        />
        <ErrorMessage message={error} />
      </Row>
    </Layout>
  );
};
