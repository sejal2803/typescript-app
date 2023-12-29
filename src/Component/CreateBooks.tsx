import React, { useState } from 'react'
import BooksList from './BooksList';

interface FormValue{
  title:string;
  author:string;
  price:string;
}

export interface Books {
  id:number;
  title:string;
  author:string;
  price:string;
}

const CreateBooks = () => {


  const [books, setBooks] = useState<Books[]>([])

  const [formvalue, setFormValue] =useState<FormValue>({
    title: "",
    author: "",
    price: ""
  })

  const handleSubmit =(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {title, author,price} = formvalue;
    setBooks([...books,{id:Math.random(), title:title, author:author,price:price }])
  }

  const handleOnChange =(e:React.ChangeEvent<HTMLInputElement>)=>{

    const {name, value}=e.target
    setFormValue({
      ...formvalue,
      [name]:value
    })

  }
  
  return (
    <div>
      <div className='form-conatiner'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="\">Title</label>
            <input type="text" name="title" value={formvalue.title} onChange={handleOnChange} />
            <label htmlFor="">author</label>
            <input type="text" name="author" value={formvalue.author} onChange={handleOnChange} />
            <label htmlFor="">price</label>
            <input type="text" name="price" value={formvalue.price} onChange={handleOnChange} />

            <button type='submit' >Add Book</button>
            
        </form>
      </div>
      <BooksList books = {books} />
    </div>
  )
}

export default CreateBooks