import { Col, Row, Form, Input, Button } from "antd";
import { useState } from "react";

export default function ContactUs() {

  const [loading, setLoading] = useState(false);


  return (
    <div className="container contact-us-section">
      {/* <div className="title-text">Contact Us</div> */}
      <div className="img-wrapper">
        <div className="title-image-wrapper">
          <img width="100%" height="259" src={"/images/Contact Us.jpg"} />
        </div>
      </div>

      <div className="row" style={{ marginTop: 30 }}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <p className="title">We&apos;d love to hear from you</p>
          <p style={{ fontSize: 16 }}>
            Feel free to contact us on your queries and we will get back to you
            as soon as possible
          </p>
          <div>
            <div style={{ marginBottom: 20, color: "#005574" }}>GENERAL</div>
            <a href="ask@sixedes.com">ask@sixides.com</a>
          </div>
          <div style={{ marginBottom: 20, color: "#005574", marginTop: 33 }}>
            <div>SALES</div>
            <a href="sales@sixedes.com">sales@sixides.com</a>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <Form
            scrollToFirstError={true}
            requiredMark={false}
            name="contactForm"
            layout="vertical"
           
          >
            <Row justify="space-between">
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please enter first name" },
                  ]}
                >
                  <Input disabled={loading} placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: "Please enter lastName" }]}
                >
                  <Input disabled={loading} placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Email Address"
              name="emailId"
              rules={[
                { required: true, message: "Please enter email address" },
              ]}
            >
              <Input disabled={loading} placeholder="Email Address" />
            </Form.Item>

            <Form.Item
              label="Mobile Number"
              name="mobileNo"
              rules={[
                { required: true, message: "Please enter Mobile number" },
              ]}
            >
              <Input disabled={loading} placeholder="Mobile Number" />
            </Form.Item>

            <Form.Item
              label="Your message here"
              name="query"
              rules={[
                { required: true, message: "Please enter Your message here" },
              ]}
            >
              <Input.TextArea
                rows={5}
                disabled={loading}
                placeholder="Your message here..."
              />
            </Form.Item>

            <Button
              style={{
                textTransform: "uppercase",
                marginTop: 10,
                marginBottom: 10,
              }}
              size="large"
              loading={loading}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
