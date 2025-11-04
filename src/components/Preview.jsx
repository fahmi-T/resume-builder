import React,{userInput,useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Edit from '../components/Edit'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { addDownloadHistoryAPI } from '../services/allAPI';

function preview({userInput,finish,resumeId,setUserInput}) {
  //console.log(resumeId);
 const[downloadStatus,setDownloadStatus]=useState(false)
 
 // console.log(userInput);
  const downloadCV=async()=>{
//getElement for screeshot
const input =document.getElementById('result')
const canvas =  await html2canvas(input,{scale:2})
const imgUrl= canvas.toDataURL('img/png')

const pdf= new jsPDF()
const pdfWidth=pdf.internal.pagesize.getWidth()
const pdfHeight=pdf.internal.pagesize.getHeight()
pdf.addImage(imgUrl,'PNG',0,0,pdfWidth,pdfHeight)
pdf.save('resume.pdf')

//getData
const localTimeDate=new Date()
const timeStamp=`${localTimeDate.toLocalDateString()},${localTimeDate.toLocalTimeString()}`
try{
  const result=await addDownloadHistoryAPI({...userInput,imgUrl,timeStamp})
console.log(result);
setDownloadStatus(true)
}catch(err){



console.log(err);

}
}
  return (
    <>
    <div>
      <div style={{marginTop:'100px'}}>
      {userInput.personalDetails.name!=""&&
      <div className="flex-column">
        { finish&&
        <div className='d-flex justify-content-end align-items-center'>
              {/*download*/}       
              <button onClick={downloadCV} className='btn fs-3 text-primary '><FaFileDownload /></button>
              {/*edit*/}
               <div><Edit resumeId={resumeId} setUpdateResume={setUserInput}/></div>   
             {/*history*/}
             {downloadStatus&&<div>
             <Link to={'/history'}  className='btn fs-3 text-primary '><FaHistory /></Link>   
             </div>
              }
             {/*back */} 
             <Link to={'/resume-generator'} className='btn text-primary'>BACK</Link>

            </div> }
     
     <Box>

        <Paper elevation={5} id="result">
          <Typography variant="h4" align='center' components="h2">
          <h2>Name:{ userInput.personalDetails.name}</h2>
          </Typography>
           <Typography variant="subtitle1" align='center' color='#00b0ff'>
          <p>job title:{ userInput.personalDetails.jobtitle}</p>
          </Typography>
           <Typography variant='body2' align='center'>
            { userInput.personalDetails.location}| { userInput.personalDetails.email}|
             { userInput.personalDetails.phone}
          </Typography>
           <Typography variant='body2' align='center' mb={4}>
          <Link href={ userInput.personalDetails.github} target="_blank">Github</Link>
          <Link href={ userInput.personalDetails.linkedIn} target="_blank">LinkedIn</Link>
          <Link href={ userInput.personalDetails.name.portpolio} target="_blank">Portpolio</Link>
          </Typography>
          <Divider>Summary</Divider>
          <Typography mb={3}>
           <p>{userInput.summary}</p> 
           </Typography>    
          <Divider>Education</Divider>   
          <Typography variant='h6' align='center'>
            <h5>{userInput.education.course}</h5>
            <p><span>{userInput.education.college}</span> |
            <span>{userInput.education.university}</span>|  
                                  <span>{userInput.education.year}</span></p>

            </Typography> 
          
          <Divider>Professional Experience</Divider>
          <Typography variant='h6' align='center'>
            <h5>{userInput.experience.job}</h5>
            <p><span>{userInput.experience.company}</span> |
            <span>{userInput.experience.location}</span>|  
                                  <span>{userInput.experience.duration}</span></p>
                                  </Typography>

                   <Divider>Skills</Divider>
                    <Stack spacing={2} direction="row" sx={{flexWrap:'wrap',gap:"10px",
                      padding:'10px'}}>
                      {
                      userInput.skills.map(skill=>(
           <Button variant="contained">{skill}</Button>
                      ))
                    }
    </Stack>
 </Paper>
      </Box>
      </div>
}
    </div>
    </div>
  </>
  )
}

export default preview
