import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditProductMutation,
  useGetProductQuery,
} from "../../app/services/products";
import { Layout } from "../../components/layout-admin";
import { Row } from "antd";
import { ProductsForm } from "../../components/products-form-admin";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

export const EditProducts = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [error, setError] = useState("");
  const { data, isLoading } = useGetProductQuery(params.id || "");
  const [editProduct] = useEditProductMutation();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  const handleEdit = async (product) => {
    try {
      const editedProducts = {
        ...data,
        ...product,
      };

      editProduct(editedProducts).unwrap();

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
          title="Редактировать товар"
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
