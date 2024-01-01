import { useParams } from "react-router-dom";
import { Card, Descriptions, Divider, List, Button } from "antd";
import dishes from "../../assests/data/dashboard/dishes.json";

const DetailerOrder = () => {
  const { id } = useParams();
  return (
    <Card title={`Order ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer">Garvit Aggarwal</Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          New Delhi
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {dishItem.name} * {dishItem.quantity}
            </div>
            <div>₹{dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total: </h2>
        <h2 style={styles.totalPrice}>₹42</h2>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button block type="danger" size="large" style={styles.button}>
          Decline Order
        </Button>
        <Button block type="primary" size="large" style={styles.button}>
          Accept Order
        </Button>
        <Button block type="primary" size="large">
          Food is done
        </Button>
      </div>
    </Card>
  );
};

const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
  },
};

export default DetailerOrder;
