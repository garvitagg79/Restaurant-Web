import React, { useState, useEffect } from "react";
import { Card, Table, Button } from "antd";
import { Link } from "react-router-dom";
import { DataStore } from "aws-amplify";
import { NewItem } from "../../models";

const RestaurantMenu = () => {
  const [items, setItems] = useState([]);

  const tableColumns = [
    {
      title: "Menu Item",
      dataIndex: "dishName",
      key: "dishName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹ ${price}`,
    },
  ];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await DataStore.query(NewItem);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const renderNewItemButton = () => (
    <Link to={"create"}>
      <Button type="primary">New Item</Button>
    </Link>
  );

  return (
    <Card title={"Menu"} style={{ margin: 20 }} extra={renderNewItemButton()}>
      <Table dataSource={items} columns={tableColumns} rowKey="id" />
    </Card>
  );
};

export default RestaurantMenu;
