import { PlusCircleOutlined } from "@ant-design/icons";
import { Layout } from "../../components/layout-admin";
import { CustomButton } from "../../components/custom-button-admin";
import { Table, Typography } from "antd";
import { useGetAllProductionsQuery } from "../../app/services/productions";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useEffect, useState } from "react";

const columns = [
  { title: "Категория", dataIndex: "type", key: "type" },
  { title: "Тип услуги", dataIndex: "name", key: "name" },
  { title: "Характеристика", dataIndex: "description", key: "description" },
];

export const Productions = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { data, isLoading } = useGetAllProductionsQuery();
  const [sortedData, setSortedData] = useState();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    } else if (data && !sortedData) {
      setSortedData([...data].sort((a, b) => a.type.localeCompare(b.type)));
    }
  }, [navigate, user, data, sortedData]);

  const goToAddProduction = () => navigate(Paths.productionsAdd);

  return (
    <Layout>
      <Typography.Title level={3}>Производство</Typography.Title>
      <CustomButton
        type="primary"
        onClick={goToAddProduction}
        icon={<PlusCircleOutlined />}
      >
        Добавить
      </CustomButton>
      <Table
        loading={isLoading}
        dataSource={sortedData}
        pagination={{ pageSize: 10 }}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.production}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
