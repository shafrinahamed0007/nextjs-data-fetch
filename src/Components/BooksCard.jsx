import Link from "next/link";

const BooksCard = ({ book }) => {
  const { title, author, price, publishedYear, description } = book;
  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="card-body space-y-5">
        <h2 className="card-title text-xl font-semibold">{title}</h2>

        <p>{description}</p>
        <div className="flex justify-between">
          <p>${price}</p>
          <p>{author}</p>
        </div>
        <div className="justify-end card-actions">
          <Link href={`/books/${book.id}`}>
            <button className="btn">Details...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
