import React from 'react'
import { useEffect,useState } from 'react';
import { MdDelete } from "react-icons/md";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { deleteDownloadHistoryAPI,getHistoryAPI , } from '../services/allAPI';


function History() {
const[resume,setResume]=useState([])
const getHistory=async()=>{
try{
  const result = await getHistoryAPI()
  console.log(result);
  setResume(result.date)
   }catch(err){
  console.log(err);
   }
}
useEffect(()=>{
  getHistory()
},[resume])
//console.log(resume);
const handleRemove=async(id)=>{
  try{
     await deleteDownloadHistoryAPI(id)
     getHistory()
}catch(err){
  console.log(err);
}
}

  return (
    <div>
                 <h1 className="text-center mt-5">Dwnload Resume History</h1>  
                  <Link to ={'/'}style={{marginTop:'-50px'}}className='float-end me-5'>BACK</Link>
                      <Box component="section" className='container-fluid'>
                      <div className="row" >  
                      
                      
                      {resume ?.length>0?resume.map((item,index)=>(
                        <div className='col-md-4' key={index}>
                      <Paper elevation={3} sx={{my:5, p: 5, textAlign:'center' }}>
                      <div className='d-flex align-items-center justify-content-evenly '>
                      <h6>Review At: <br/>{item?.timeStamp}</h6>
                      <button onClick={()=>handleRemove(item?.id)} className='btn text-danger fs-4 ms-4'><MdDelete/></button>
                       </div>
                      <div className='border rounded p-3'>  
                       <img src={item?.imgUrl}className='img-fluid'  alt="resume"/>
                       </div>
                      </Paper>
                        </div>
                      )):<p>Nothing To Display</p>
                      
                    }
                        </div>
                      </Box>
                

    </div>
  )
}

export default History
