import React from 'react';
import { useState } from "react";
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories =[
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
    "Romance"
  ]
  const [selectedBookCategory, setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }
  // handle book on submition
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form =event.target;

    const bookTitle =form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL = form.imageUrl.value;
    const category =form.categoryName.value;
    const bookDescription =form.bookDescription.value;
    const bookPDFURL =form.bookPDFURL.value;

    const bookObj ={
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    console.log(bookObj)
    //send data to db
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book uploaded successfully !!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle">Book Title</Label>
          </div>
          <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
        </div>
        {/* author name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName">Author Name</Label>
          </div>
          <TextInput id="authorName" name='authorName' type="text" placeholder="Author Nam" required />
        </div>
       </div>
      
       {/* second row */}
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageUrl">Book image URL</Label>
          </div>
          <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book image URL" required />
        </div>
        {/* category */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState">Book Category</Label>
          </div>
          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
          onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option)=> <option key={option} value={option}>{option}</option>)
            }

          </Select>
        </div>
       </div>

       {/* book description */}
       <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription">Book Description</Label>
        </div>
        <Textarea id="bookDescription" 
        name="bookDescription" 
        placeholder="Write your book description..." 
        required
        className='w-full' 
        rows={6} />
      
      </div>
      {/* book pfd link */}
      <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL">Book PDFURL</Label>
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Bookpdf url" required />
        </div>
        <Button type="submit" color="blue" className='mt-5' >Upload Book</Button>
      </form>
      
    </div>
  )
}

export default UploadBook