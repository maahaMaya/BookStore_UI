import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Wishlist from './Wishlist';
import { GetWishlistApi } from '../../Services/WishlistService';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3)
];

export default function WishlistPage() {

  const [wishlistData, setWishlistData] = useState([]);
  const [wishlistDataLength, setLishlistDataLength] = useState(0)

  const GetWishlistData = () => {
    GetWishlistApi()
      .then(res => {
        setWishlistData(res.data.data)
        setLishlistDataLength(res.data.data.length)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    GetWishlistData()
  }, [])

  return (<>
    <br /><br />
    <TableContainer component={Paper} sx={{ maxWidth: 1100, marginLeft: '16vw' }}>
      <Table sx={{ maxWidth: 1100, border: '1px solid #E4E4E4' }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: '1px solid #E4E4E4', backgroundColor: '#F5F5F5', fontSize: '18px', fontWeight: '600', paddingLeft: '3vw' }}>My Wishlist ({wishlistDataLength})</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wishlistData.map(wishlistRowData => (
            <TableRow
              key={wishlistRowData.wishlist_id}
            >
              <TableCell component="th" scope="row" sx={{ border: '1px solid #E4E4E4' }}>
                <Wishlist wishlistRowData={wishlistRowData}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}