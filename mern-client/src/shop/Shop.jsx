import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-12">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {Array.isArray(books) && books.map((book) => (
          <Card
            key={book._id}
            className="max-w-sm bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={book.imageURL}
              alt=""
              className="h-64 w-full object-cover rounded-t"
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {book.bookTitle}
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {book.authorName || "Unknown Author"}
              </p>
              
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </p>
            </div>
            <Button className="bg-blue-700 font-semibold text-white py-2 rounded flex justify-center items-center">Buy Now</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
