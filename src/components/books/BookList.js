import useBooksContext from "../../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useBooksContext();

  return (
    <div className="book-list flex flex-wrap gap-4">
      {!books[0] ? (
        <div> Please run server</div>
      ) : (
        books.map((book) => <BookShow key={book.id} book={book} />)
      )}
    </div>
  );
}

export default BookList;
