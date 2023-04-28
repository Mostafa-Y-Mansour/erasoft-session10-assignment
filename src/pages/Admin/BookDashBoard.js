import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddBook, EditBook, GetBook } from "../../services/api";

export default function BookDashBoard(props) {
  const params = useParams();
  const [book, setBook] = useState({
    title: "",
    cover_image: "",
    author: "",
    pages: "",
    releaseDate: "",
  });
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("1");
  const [releaseDate, setReleaseDate] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getBookDetail = async () => {
    try {
      const res = await GetBook(params.id);
      setBook(res.data);
      setTitle(book.title);
      setCoverImage(book.cover_image);
      setAuthor(book.author);
      setPages(book.pages);
      setReleaseDate(book.releaseDate);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (window.location.pathname === `/admin/edit-book/${params.id}`) {
      getBookDetail();
    }
  }, [isLoading]);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (window.location.pathname === "/admin/add-book") {
      AddBook({
        title,
        cover_image: coverImage,
        author,
        pages,
        releaseDate,
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          navigate("/admin");
        }
      });
    }

    if (window.location.pathname === `/admin/edit-book/${params.id}`) {
      EditBook(params.id, {
        title,
        cover_image: coverImage,
        author,
        pages,
        releaseDate,
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          navigate("/admin");
        }
      });
    }
  };
  return isLoading && !(window.location.pathname === "/admin/add-book") ? (
    <h1 className="text-center">Loading...</h1>
  ) : (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cover_image">
        <Form.Label>cover image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add your image Url"
          value={coverImage ?? ""}
          onChange={(e) => setCoverImage(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Author Name"
          value={author ?? ""}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pages">
        <Form.Label>Pages</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Book Pages Number"
          value={pages ?? ""}
          onChange={(e) => setPages(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="releaseDate">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Release Date"
          value={releaseDate ?? ""}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}
