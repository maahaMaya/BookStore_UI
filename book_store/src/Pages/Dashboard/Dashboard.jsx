import React, { useEffect, useState } from "react";
import BookBox from "../../Component/BookBox/BookBox";
import DisplayBook from "../../Component/DisplayBook/DisplayBook";
import Header from "../../Component/Header/Header";
import { GetAllBookApi } from "../../Services/BookService";

function Dashboard() {
    const [bookList, setBookList] = useState([]);
    const [toggleBook, setToggleBook] = useState(true);
    const [openBookData, setOpenBookData] = useState();
    const [bookArraySortValue, setookArraySortValue] = useState("default")
    const [bookArrayLength, setBookArrayLength] = useState(0)

    const GetAllBookApiCall = () => {
        GetAllBookApi()
            .then(res => {
                let bookArray = [];
                if(bookArraySortValue === "default"){
                    bookArray = res.data.data;
                    setBookArrayLength(res.data.data.length);
                }
                else if(bookArraySortValue === "lowToHigh"){
                    bookArray = res.data.data.sort((firstItem, secondItem) => firstItem.book_discount_price - secondItem.book_discount_price);
                    setBookArrayLength(res.data.data.length);
                }
                else if(bookArraySortValue === "highToLow"){
                    bookArray = res.data.data.sort((firstItem, secondItem) =>  secondItem.book_discount_price - firstItem.book_discount_price);
                    setBookArrayLength(res.data.data.length);
                }
                else if(bookArraySortValue === "Availability"){
                    bookArray = res.data.data.filter((book) => {
                        if(book.book_stock > 1){
                            return book;
                        }
                    })
                    setBookArrayLength(bookArray.length);
                }
                setBookList(bookArray)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetAllBookApiCall();
    },
        [bookArraySortValue])

    const ListenToBookBox = (Book) => {
        setToggleBook(false)
        setOpenBookData(Book)
    }

    const ListenToHeader = (val) => {
        setookArraySortValue(val)
    }
    
    return (
        <>
            <Header ListenToHeader={ListenToHeader} bookArrayLength={bookArrayLength}/>
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