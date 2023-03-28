import React, { useEffect, useState } from "react";
import BookBox from "../../Component/BookBox/BookBox";
import DisplayBook from "../../Component/DisplayBook/DisplayBook";
import Header from "../../Component/Header/Header";
import { GetAllBookApi } from "../../Services/BookService";

function Dashboard() {
    const [bookList, setBookList] = useState([]);
    const [toggleBook, setToggleBook] = useState(true);
    const [openBookData, setOpenBookData] = useState();

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

    const ListenToBookBox = (Book) => {
        setToggleBook(false)
        setOpenBookData(Book)
    }
    
    return (
        <>
            <Header />
            {
                toggleBook ?
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', border: '1px solid red', width: '80vw', marginLeft: '10.8vw' }}>
                        {
                            bookList.map(book => (<BookBox key={book.book_id} book={book} ListenToBookBox={ListenToBookBox} />))
                        }
                    </div> : <DisplayBook openBookData={openBookData}/>
            }
        </>
    )
}

export default Dashboard;