import { Form, Input, Button, Card, InputNumber } from "antd";
import { DataStore } from "aws-amplify";
import { NewItem } from "../../models";
import { useState } from "react";

const { TextArea } = Input;
const CreateMenuItem = () => {
  const [dishName, setdishName] = useState("");
  const [dishDescription, setdishDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Submit = async () => {
    try {
      await DataStore.save(
        new NewItem({
          dishName: dishName,
          dishDescription: dishDescription,
          price: price,
        })
      );
      setSuccessMessage("Your item has been submitted successfully!");
      setdishName("");
      setdishDescription("");
      setPrice();
    } catch (e) {
      setErrorMessage("Oops! Something went wrong. Please try again later.");
      console.log(e.message);
    }
  };

  return (
    <Card title="New Menu Item" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Dish Name" required>
          <Input
            placeholder="Enter dish name"
            value={dishName}
            onChange={(e) => setdishName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Dish Description" required>
          <TextArea
            rows={4}
            placeholder="Enter dish description"
            value={dishDescription}
            onChange={(e) => setdishDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Price (₹)" required>
          <InputNumber value={price} onChange={(value) => setPrice(value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={Submit}>
            Submit
          </Button>
          {successMessage && (
            <div style={{ color: "green", marginTop: 10 }}>
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div style={{ color: "red", marginTop: 10 }}>{errorMessage}</div>
          )}
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateMenuItem;
