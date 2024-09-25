import { Card, Form, Space } from "antd";
import React from "react";
import { CustomInput } from "../custom-input-admin";
import { ErrorMessage } from "../error-message";
import { CustomButton } from "../custom-button-admin";

export const ProductsForm = ({ onFinish, title, btnText, error, product }) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="product-form" onFinish={onFinish} initialValues={product}>
        <CustomInput type="text" name="type" placeholder="Категория" />
        <CustomInput type="text" name="name" placeholder="Тип" />
        <CustomInput
          type="text"
          name="description"
          placeholder="Характеристика"
        />
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};
