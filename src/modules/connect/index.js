import { Form, Input, Button, Card, InputNumber, message } from "antd";
import { Auth, DataStore } from "aws-amplify";
import { Connect } from "../../models";
import { useState } from "react";

//amplify codegen models

const { TextArea } = Input;

const ConnectUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const Submit = async () => {
    try {
      await DataStore.save(
        new Connect({
          name: name,
          phoneNumber: String(phone),
          email: email,
          query: query,
        })
      );
      setSuccessMessage("Your query has been submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setQuery("");
    } catch (e) {
      setErrorMessage("Oops! Something went wrong. Please try again later.");
      console.log(e.message);
    }
  };
  return (
    <Card title="Connect with Us" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Name" required>
          <Input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Phone Number" required>
          <InputNumber value={phone} onChange={(value) => setPhone(value)} />
        </Form.Item>
        <Form.Item label="Query" required>
          <TextArea
            rows={4}
            placeholder="Enter your query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={Submit}>
            Send
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

export default ConnectUs;
