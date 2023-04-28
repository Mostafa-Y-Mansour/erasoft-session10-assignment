import React, { useEffect, useState } from "react";
import { GetAllBooks } from "../services/api";
import BookItem from "../components/BookItem";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Homepage(props) {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const BookList = books.map((book) => {
    return (
      <Col
        lg="4"
        className="mt-3"
        key={book.id}
        onClick={() => navigate(`/book/${book.id}`)}
      >
        <BookItem book={book} />;
      </Col>
    );
  });

  const getAll = async () => {
    const res = await GetAllBooks();
    return setBooks(res.data);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Container>
      <Row>{BookList}</Row>
    </Container>
  );
}
