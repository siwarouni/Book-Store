import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const { _id, bookTitle, imageURL, authorName, category, bookDescription, bookPDFURL } = useLoaderData();

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg'>
                {/* Book Image */}
                <img
                    src={imageURL}
                    alt={bookTitle}
                    className='h-96 w-full object-cover rounded-lg shadow-md'
                />

                {/* Book Details */}
                <div>
                    <h2 className='text-4xl font-bold text-gray-800 mb-6'>{bookTitle}</h2>
                    <p className='mb-3 text-lg text-gray-700'>
                        <span className='font-semibold text-gray-800'>Author:</span> {authorName}
                    </p>
                    <p className='mb-3 text-lg text-gray-700'>
                        <span className='font-semibold text-gray-800'>Category:</span> {category}
                    </p>
                    <p className='mb-6 text-gray-700'>
                        <span className='font-semibold text-gray-800'>Description:</span> {bookDescription}
                    </p>

                    {/* View PDF Button */}
                    <a
                        href={bookPDFURL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300 mr-4'
                    >
                        View PDF
                    </a>

                    {/* Buy Now Button */}
                    <button
                        onClick={() => alert('Buying functionality coming soon!')}
                        className='inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition duration-300'
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleBook
