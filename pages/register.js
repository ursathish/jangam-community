import { Col, Row, Form, Input, Button, InputNumber } from "antd";
import { useState } from "react";

export default function Register() {
  const [adultCount, setAdultCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  return (
    <div className="container">
      <div className="title-text">Register</div>

      <Form
        scrollToFirstError={true}
        requiredMark={false}
        name="contactForm"
        layout="vertical"
        className="register-form"
      >
        <Form.Item label="குல தெய்வம்" name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="குலப்பெயர்" name="lastName">
          <Input />
        </Form.Item>

        <Form.Item label="Email Address" name="emailId">
          <Input />
        </Form.Item>

        <Form.Item label="Mobile Number" name="mobileNo">
          <Input />
        </Form.Item>
        <Form.Item label="Mobile Number" name="mobileNo">
          <Input />
        </Form.Item>
        <Form.Item label="Mobile Number" name="mobileNo">
          <Input />
        </Form.Item>

        <Form.Item label="Your message here" name="query">
          <Input.TextArea rows={5} showCount maxLength={500} />
        </Form.Item>

        <Form.Item label="Mobile Number" name="mobileNo">
          <Input />
        </Form.Item>

        <Form.Item label="Mobile Number" name="mobileNo">
          <Input />
        </Form.Item>
        <div style={{ marginBottom: 15 }}>Label</div>

        <Row justify="space-between">
          <Col span={8}>
            <Form.Item label="Adults" name="adults">
              <InputNumber
                onChange={(value) => {
                  setAdultCount(value);
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Others" name="others">
              <InputNumber
                onChange={(value) => {
                  setOtherCount(value);
                }}
                placeholder=""
              />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item label="Total" name="total" initialValue={adultCount + otherCount}>
              <Input disabled placeholder="" value={adultCount + otherCount} />
            </Form.Item>
          </Col>
        </Row>

        <Button
          style={{
            textTransform: "uppercase",
            marginTop: 30,
            marginBottom: 20,
          }}
          size="large"
          type="primary"
          htmlType="submit"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}
