import { Button, Result, Row } from "antd";
import { Link, useParams } from "react-router-dom";

const Statuses = {
  created: "Элемент успешно добавлен",
  updated: "Элемент успешно обновлен",
  deleted: "Элемент успешно удален",
};

export const Status = () => {
  const { status } = useParams();

  return (
    <Row align="middle" justify="center" style={{ width: "100%" }}>
      <Result
        status={status ? "success" : 404}
        title={status ? Statuses[status] : "Не найдено"}
        extra={
          <Button key="dashboard">
            <Link to="/admin/products">На главную</Link>
          </Button>
        }
      ></Result>
    </Row>
  );
};
