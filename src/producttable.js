import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import Styles from './app-style'
import { Typography } from '@material-ui/core';

function createData(feature, featureValues) {
  return { feature, featureValues }; 
}
export default function ProductTable(props) {
  
let row=[];
let arr=[];
var desc
    props.products.map((product)=>{
      desc = JSON.parse(product.pack_des);
     for (const key in desc) {
      row.push(key)
    }
    arr.push(desc);
    })
    var uniqueRow = [...new Set(row)]  
  // console.log(arr);

  const rows = [...
    uniqueRow.map((val)=>{
      return(createData(val,arr.map((ar)=>{return(ar[val])})))
    })
  ];

  const setIcons=(value)=>{
    var element=value.toLowerCase;
    if (element=='yes') return <CheckCircleOutlineIcon fontSize="large"/>

}
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><Typography variant ='h6' style={{...Styles.colorWhite}}>Services</Typography></TableCell>
          {
            props.products.map((productHead)=>(
            <TableCell><Typography variant ='h6' style={{...Styles.colorWhite}}>{productHead.service_caption}</Typography></TableCell>
            ))    //Take any number of headers
            
            }
          </TableRow>
        </TableHead>
 
        <TableBody>{console.log(rows)}
          {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell><Typography variant ='h6' style={{...Styles.colorWhite}}> {row.feature}</Typography></TableCell>
              {row.featureValues.map(val=>
              <TableCell>{val}
              </TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);
}