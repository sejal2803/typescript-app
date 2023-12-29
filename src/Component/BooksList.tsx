import React from 'react'
import { Books } from './CreateBooks'


interface Prop {
 books:Books[]
}

const BooksList = ({books}: Prop) => {
  return (
    <div>
      <table style={{border: "2px solid"}}>
        <thead>
          <tr>
            <td>title</td>
            <td>author</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {books.map((item:{id:number,title:string,author:string,price:string}) =>(
            <tr key = {item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.price}</td>
          </tr>

          ))}
          
        </tbody>
      </table> 
    </div>
  )
}

export default BooksList