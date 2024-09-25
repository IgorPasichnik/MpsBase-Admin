import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useGetProductionQuery,
  useRemoveProductionMutation,
} from "../../app/services/productions";
import { Layout } from "../../components/layout-admin";
import { Descriptions, Divider, Modal, Space } from "antd";
import { CustomButton } from "../../components/custom-button-admin";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ErrorMessage } from "../../components/error-message";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const Production = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetProductionQuery(params.id || null);
  const [removeProduction] = useRemoveProductionMutation();

  if (isLoading) {
    return <span>Загрузка</span>;
  }

  if (!data) {
    return <Navigate to="/admin/productions" />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async () => {
    hideModal();

    try {
      await removeProduction(data.id).unwrap();

      navigate(`${Paths.status}/deleted`);
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
      <Descriptions title="Информация об услуге" bordered>
        <Descriptions.Item label="Категория" span={3}>
          {`${data.type}`}
        </Descriptions.Item>
        <Descriptions.Item label="Тип услуги" span={3}>
          {`${data.name}`}
        </Descriptions.Item>
        <Descriptions.Item label="Характеристика" span={3}>
          {`${data.description}`}
        </Descriptions.Item>
      </Descriptions>
      <ErrorMessage message={error} />
      <Divider orientation="left">Действия</Divider>
      <Space>
        <Link to={`/admin/productions/edit/${data.id}`}>
          <CustomButton shape="round" type="default" icon={<EditOutlined />}>
            Редактировать
          </CustomButton>
        </Link>
        <CustomButton
          shape="round"
          danger
          onClick={showModal}
          icon={<DeleteOutlined />}
        >
          Удалить
        </CustomButton>
      </Space>
      <ErrorMessage message={error} />
      <Modal
        title="Подтвердите удаление"
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={hideModal}
        okText="Подтвердить"
        cancelText="Отменить"
      >
        Вы действительно хотите удалить элемент?
      </Modal>
    </Layout>
  );
};
