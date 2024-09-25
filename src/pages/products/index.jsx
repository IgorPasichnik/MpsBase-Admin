import { PlusCircleOutlined } from "@ant-design/icons";
import { Layout } from "../../components/layout-admin";
import { CustomButton } from "../../components/custom-button-admin";
import { Table, Typography, Row } from "antd";
import { useGetAllProductsQuery } from "../../app/services/products";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEffect, useState } from "react";

const columns = [
  { title: "Категория", dataIndex: "type", key: "type" },
  { title: "Тип товара", dataIndex: "name", key: "name" },
  { title: "Характеристика", dataIndex: "description", key: "description" },
];

export const Products = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { data, isLoading } = useGetAllProductsQuery();
  const [sortedData, setSortedData] = useState();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    } else if (data && !sortedData) {
      setSortedData([...data].sort((a, b) => a.type.localeCompare(b.type)));
    }
  }, [navigate, user, data, sortedData]);

  const goToAddProduct = () => navigate(Paths.productsAdd);

  return (
    <Layout>
      <Typography.Title level={3}>Продукция</Typography.Title>
      <Row justify="space-between">
        <CustomButton
          type="primary"
          onClick={goToAddProduct}
          icon={<PlusCircleOutlined />}
        >
          Добавить
        </CustomButton>
      </Row>
      <Table
        loading={isLoading}
        dataSource={sortedData}
        pagination={{ pageSize: 10 }}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.product}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
