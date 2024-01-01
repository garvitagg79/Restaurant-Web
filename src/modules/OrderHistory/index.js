import { Card, Table, Tag } from "antd";
import orderHistory from "../../assests/data/dashboard/orders-history.json";

const tableColumns = [
  {
    title: "Order ID",
    dataIndex: "orderID",
    key: "orderID",
  },
  {
    title: "Delivery Address",
    dataIndex: "deliveryAddress",
    key: "deliveryAddress",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => `₹ ${price}`,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Delivered" ? "green" : "red"}>{status}</Tag>
    ),
  },
];
const OrderHistory = () => {
  return (
    <Card title={"History Orders"} style={{ margin: 20 }}>
      <Table
        dataSource={orderHistory}
        columns={tableColumns}
        rowKey="orderID"
      />
    </Card>
  );
};

export default OrderHistory;
