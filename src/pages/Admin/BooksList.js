import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { DeleteBook, GetAllBooks } from "../../services/api";
import { Button, Image, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [isDeleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  const DeleteBookHandler = (id) => {
    DeleteBook(id).then((res) => {
      if (res.status === 200 || res.status === 204) {
        setDeleted(true);
      }
    });
  };

  const renderBookRows = books.map((book, index) => {
    return (
      <tr key={book.id}>
        <td>{index + 1}</td>
        <td style={{ width: "10%" }}>
          <Image src={book.cover_image} alt="book_cover" thumbnail></Image>
        </td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.pages}</td>
        <td>{book.releaseDate}</td>
        <td>
          <Stack gap={3} className="mx-auto">
            <Button variant="danger" onClick={() => DeleteBookHandler(book.id)}>
              Delete
            </Button>
            <Button
              variant="info"
              onClick={() => navigate(`edit-book/${book.id}`)}
            >
              Edit
            </Button>
          </Stack>
        </td>
      </tr>
    );
  });

  useEffect(() => {
    GetAllBooks().then((res) => {
      setBooks(res.data);
      setDeleted(false);
    });
  }, [isDeleted]);

  return (
    <div className="my-3">
      <Stack direction="horizontal">
        <h3>Books</h3>
        <Button as={Link} to="add-book" className="ms-auto" variant="primary">
          Add New Book
        </Button>
      </Stack>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Release Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderBookRows}</tbody>
      </Table>
    </div>
  );
}

export default BooksList;
