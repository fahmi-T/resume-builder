import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { addResumeAPI } from '../services/allAPI';
import swal from 'sweetalert';
 

function Steps({userInput, setUserInput,setFinish,setResumeId}) {
  //console.log(userInput);
  
  const steps = ['Basic Information', 'Contact Details', 'Education Details','Work Experience','Skills and Certifications','Review & Submit'];

  const suggestionSkills=['REACT','ANGULAR','NODE','EXPRESS','MONGODB','JAVASKRIPT','GIT','TAILWIND' ]
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const userSkillRef=React.useRef()

  const isStepOptional = (step) => {
    return step === 1;
  };
const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
       const handleReset = () => {
      setActiveStep(0);

  }; 
  //Add skill//
  const addskill=(inputskill)=>{
    if(inputskill){
      if(userInput.skills,includes(inputskill)){
        alert("skill already exist...add another")
    }else{
      setUserInput({...userInput,skills:[...userInput,inputSkill]})
    }

  }
  }
  const removeSkill=(skill)=>{
setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
  }
  const renderStepContent =(step)=> {
   switch(step) {
   case 0: return(
    <div>
      <h3>Personal Details</h3>
      <div className='d-flex row p-3'>
      <TextField id="standard-basic" label="Full Name" variant="standard"
       onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       name: e.target.value}})}value={userInput.experience.name}   />
      <TextField id="standard-basic" label="Job Title" variant="standard" 
        onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       jobTitle: e.target.value}})}value={userInput.experience.jobTitle}   />
     
      <TextField id="standard-basic" label="Location" variant="standard" 
       onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       Location: e.target.value}})} value={userInput.experience.Location}  />
      
    </div>
    </div>
   )

    case 1: return(
    <div>
      <h3>Contact Details</h3>
      <div className='d-flex row p-3'>
      <TextField id="standard-basic" label="Email" variant="standard"
        onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       email: e.target.value}})} value={userInput.experience.email}  />
      
      <TextField id="standard-basic"  label="Phone Number" variant="standard"
       onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       phone: e.target.value}})} value={userInput.experience.phone}  />
      


      <TextField id="standard-basic" label="Github Profile Link" variant="standard" 
      onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       github: e.target.value}})}value={userInput.experience.github}  />
      
          <TextField id="standard-basic" label="LinkedIn Profile Link " variant="standard" 
           onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       linkedIn: e.target.value}})} value={userInput.experience.linkedIn}  />
       
              <TextField id="standard-basic" label=" Portpolio Link " variant="standard"
               onChange={e=> setUserInput({ ...userInput, personalDetails: { ...userInput.personalDetails,
       portpolio: e.target.value}})} value={userInput.experience.portpolio}  />
      
          </div>
          </div>
    )
    
    case 2: return(
    <div>
      <h3>Educational Details</h3>
      <div className='d-flex row p-3'> 
      <TextField id="standard-basic" label="Course Name" variant="standard"
       onChange={e=> setUserInput({ ...userInput, education: { ...userInput.education,
       course: e.target.value}})} value={userInput.experience.course}  />
      

      <TextField id="standard-basic" label="College Name" variant="standard" 
       onChange={e=> setUserInput({ ...userInput, educations: { ...userInput.education,
       college: e.target.value}})} value={userInput.experience.college}  />
      
      <TextField id="standard-basic" label="University" variant="standard"
       onChange={e=> setUserInput({ ...userInput, education: { ...userInput.education,
       University: e.target.value}})} value={userInput.experience.University}  />
      

      <TextField id="standard-basic" label="Year of Passout" variant="standard" 
       onChange={e=> setUserInput({ ...userInput, education: { ...userInput.education,
       year: e.target.value}})} value={userInput.experience.year}  />
      
    </div>
    </div>

    
    )
    case 3: return(
    <div>
      <h3>professional Details</h3>
      <div className='d-flex row p-3'>
      <TextField id="standard-basic" label="Job or Internship" variant="standard" 
       onChange={e=> setUserInput({ ...userInput, experience: { ...userInput.experience,
       job: e.target.value}})}value={userInput.experience.jobinternship}   />
      
      <TextField id="standard-basic" label="Company Name" variant="standard" 
      onChange={e=> setUserInput({ ...userInput, professionalDetails: { ...userInput.experience,
       company: e.target.value}})}value={userInput.experience.companyname}   />
      
      <TextField id="standard-basic" label="Location" variant="standard"
       onChange={e=> setUserInput({ ...userInput, experience: { ...userInput.experience,
       location: e.target.value}})} value={userInput.experience.Location} />
      
      <TextField id="standard-basic" label="Duration" variant="standard"
       onChange={e=> setUserInput({ ...userInput, experience: { ...userInput.experience,
       duration: e.target.value}})} value={userInput.experience.duration} />
      
    </div>
    </div>
    )
    
    case 4: return(
    <div>
      <h3>Skills</h3>
      <Box sx={{width:'100%'}}>
      <Stack spacing={2} >   
         {/*<TextField id="standard-basic" label="Add Skill" variant="standard" />*/}

        <input ref={userSkillRef} type="text" className='form-control' placeholder='add skills'/>
      <Button onClick={()=>addskill(userSkillRef.current.value)}className='me-3' variant="text" sx={{maxWidth:'40px' }}>Add</Button>
       </Stack>
       
       <div>
      <h5>Suggestions :</h5>
       <div className="d-flex flex-wrap justify-content-between">
        {
        suggestionSkills.map(userSkill => (<Button  onClick={()=>addSkill(userSkill)}variant="outlined">{userSkill}</Button>))
        

        }
      </div>
      </div>
      <div>
      <h5>Added skills :</h5>
      <div className="d-flex justify-content-between">
        {
        userInput.skills.length>0?userInput.skills.map(skill=>(
        <span className='btn btn-primary d-flex align-items-center justify-content-center'>{skill}<button
        onClick={()=>removeSkill(skill)} className='btn text-light'>X</button></span>
       )):<p>nothing to display</p>
      }
        </div>
      </div>
      </Box>
      </div>
    )
      
      case 5: return(
    <div>
      <h3>Professional Summary</h3>
      <div className='d-flex row p-3'>
      <TextField id="standard-multiline-static" label="Write a short summary of yourself"
       multiline
       rows={4}
      defaultValue="Eg: Iam a passionate full-stack developer 
      with hands-on experience in React, Node.."
      variant="standard" 
      value={userInput.Summary} 
      onChange={e=> setUserInput({ ...userInput,summary:e.target.value})} />
       </div>
      </div>
      )
     
        default: return Null
    }
  }
    //handleAddResume
    const handleAddResume=async()=>{
      //alert("api called")
      
      const {name,jobTitle,location}=userInput.personalDetails
      
      if (name && jobTitle && location){
        //alert("api call")
        try {
          const result=await addResumeAPI(userInput)
          console.log(result);
          swal("success", "Resume Added", "success");
          setFinish(true)
          setResumeId(result?.data.id)
          
        }catch(err){
          console.log(err);
          swal("Error", "Resume Failed", "error");


        }


      }else{
        alert("please fill missing fields")
      }
    }


   return(
    <div>

  <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            { renderStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {
              activeStep === steps.length - 1 ?
              <Button onclick={handleAddResume}>Finish</Button>:<Button
                onClick={handleNext}>Next</Button>
              }
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}

export default Steps
