import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditProductionMutation,
  useGetProductionQuery,
} from "../../app/services/productions";
import { Layout } from "../../components/layout-admin";
import { Row } from "antd";
import { ProductsForm } from "../../components/products-form-admin";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

export const EditProductions = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetProductionQuery(params.id || "");
  const [editProduction] = useEditProductionMutation();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  const handleEdit = async (production) => {
    try {
      const editedProductions = {
        ...data,
        ...production,
      };

      editProduction(editedProductions).unwrap();

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
          title="Редактировать услугу"
          btnText="Редактировать"
          error={error}
          product={data}
          onFinish={handleEdit}
        />
        <ErrorMessage message={error} />
      </Row>
    </Layout>
  );
};
