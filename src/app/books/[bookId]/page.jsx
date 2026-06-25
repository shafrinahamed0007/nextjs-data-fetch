const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:3004/books/${bookId}`);
  const { title, author, price } = await res.json();
  return (
    <div className="my-10 container mx-auto">
      <h2>Book Degtails: {bookId}</h2>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default BookDetailsPage;
