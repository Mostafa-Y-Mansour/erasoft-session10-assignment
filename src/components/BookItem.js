import Card from "react-bootstrap/Card";

function BookItem({ book }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        height={"300px"}
        style={{ objectFit: "contain" }}
        src={book.cover_image}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>Pages: {book.pages}</Card.Text>
        <Card.Text>Release Date: {book.releaseDate}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookItem;
