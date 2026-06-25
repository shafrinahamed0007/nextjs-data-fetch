import BooksCard from "@/Components/BooksCard";
/**
 *   * cache: no-store -> it will fetch the data on every request, and it will not cache the data. SSR
 *   * cahce: force, and it will cache the data, and it will not fetch the data every request. SSG
 *   * revalidate: 20 -> it will cache the data for 20 seconds, and it will fetch the data after 20 seconds. ISR
 *
 */

const BooksPage = async () => {
  //   const books = await fetch("http://localhost:3004/books", {
  //     cache: "no-store",
  //   }).then((res) => res.json());

  //   const books = await fetch("http://localhost:3004/books", {
  //     cache: "force-cache",
  //   }).then((res) => res.json());

  const books = await fetch("http://localhost:3004/books", {
    next: { revalidate: 20 },
  }).then((res) => res.json());
  return (
    <div className="container mx-auto my-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
