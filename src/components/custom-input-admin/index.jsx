import { Form, Input } from "antd";
import React from "react";

export const CustomInput = ({ name, placeholder, type = "text" }) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};
