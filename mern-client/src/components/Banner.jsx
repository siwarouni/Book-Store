import React, { useState } from 'react'
import BannerCard from '../home/BannerCard'
import { Link } from 'react-router-dom'

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBooks, setFilteredBooks] = useState([])
  const [notFound, setNotFound] = useState(false)

  const handleSearch = () => {
    if (!searchTerm) return

    fetch(`http://localhost:5000/all-books?category=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setFilteredBooks(data)
          setNotFound(false)
        } else {
          setFilteredBooks([])
          setNotFound(true)
        }
      })
      .catch(err => {
        console.error("Erreur de recherche :", err)
        setFilteredBooks([])
        setNotFound(true)
      })
  }

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex flex-col items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span>
          </h2>
          <p className='md:w-4/5'>
            is a trusted online platform where you can easily buy used books at low prices and sell your own for a fair value.
            We connect buyers and sellers to make book trading simple, affordable, and reliable.
          </p>

          <div className='flex'>
            <input
              type="search"
              name="search"
              id="search"
              placeholder='Search by category (e.g. Horror, Romance)'
              className='py-2 px-4 rounded-l-sm outline-none w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-sm'
            >
              Search
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>

      {/* Résultats de recherche */}
      <div className='w-full py-8'>
        {filteredBooks.length > 0 && (
          <>
            <h3 className='text-2xl font-semibold mb-4 text-center'>
              Books in "{searchTerm}" category:
            </h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredBooks.map(book => (
                <li key={book._id} className='bg-white p-4 rounded shadow'>
                  <img src={book.imageURL} alt={book.bookTitle} className='w-full h-60 object-cover rounded' />
                  <h4 className='text-lg font-bold mt-2'>{book.bookTitle}</h4>
                  <p className='text-sm text-gray-600'>By {book.authorName}</p>
                  <p className='text-sm text-blue-700 italic'>{book.category}</p>
                  <Link
                    to={`/book/${book._id}`}
                    className='text-sm text-indigo-600 underline mt-2 block'
                  >
                    View Book
                </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {notFound && (
          <div className='text-center text-red-500 text-lg mt-8'>
            No books found in the "{searchTerm}" category.
          </div>
        )}
      </div>
    </div>
  )
}

export default Banner
