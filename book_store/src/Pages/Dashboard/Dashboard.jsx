import React, { useEffect, useState } from "react";
import BookBox from "../../Component/BookBox/BookBox";
import DisplayBook from "../../Component/DisplayBook/DisplayBook";
import Header from "../../Component/Header/Header";
import { GetAllBookApi } from "../../Services/BookService";

function Dashboard() {
    const [bookList, setBookList] = useState([]);

    const GetAllBookApiCall = () => {
        GetAllBookApi()
            .then(res => {
                setBookList(res.data.data)
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetAllBookApiCall();
    },
        [])
    return (
        <>
            <Header />
            {/* <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                {
                    bookList.map(book => (<BookBox key={book.book_id} book={book}/>))
                }
            </div> */}
            <DisplayBook />
        </>
    )
}

export default Dashboard;