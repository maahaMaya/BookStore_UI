import React, { useEffect, useState } from "react";
import BookBox from "../../Component/BookBox/BookBox";
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
            <div>
                {
                    bookList.map(book => (<BookBox key={book.book_id} book={book}/>))
                }
            </div>
        </>
    )
}

export default Dashboard;