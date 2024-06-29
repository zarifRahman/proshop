import React, { FC, ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
