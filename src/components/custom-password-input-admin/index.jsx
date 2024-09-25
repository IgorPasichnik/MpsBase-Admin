import { Form, Input } from "antd";
import React from "react";

export const CustomPasswordInput = ({ name, placeholder, dependencies }) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      rules={[
        { required: true, message: "Обязательное поле" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }

            if (name === "confirmPassword") {
              if (value || getFieldValue("password") === value) {
                return Promise.resolve(new Error("Пароли не совпадают"));
              }
              return Promise.reject();
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error("Длина пароля должна быть не менее 6 символов")
                );
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
      shouldUpdate={true}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};
