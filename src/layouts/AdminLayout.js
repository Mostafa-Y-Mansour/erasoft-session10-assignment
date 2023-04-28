import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function AdminLayout(props) {
  return (
    <>
      <div className="text-center bg-primary p-3">
        <h1 className="text-light">Admin Area</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
