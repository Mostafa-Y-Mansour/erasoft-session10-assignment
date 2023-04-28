import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { GetBook } from "../services/api";

function BookDetails(props) {
  const params = useParams();

  const [book, setBook] = useState({});

  const { id } = params;

  const getBookDetail = async () => {
    const res = await GetBook(id);
    return setBook(res.data);
  };

  useEffect(() => {
    getBookDetail();
  }, []);

  return (
    <Container>
      <Card className="bg-dark text-white">
        <Card.Img src={book.cover_image} alt="Card image" />
        <Card.ImgOverlay style={{ background: "#000000", opacity: ".5" }}>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default BookDetails;
