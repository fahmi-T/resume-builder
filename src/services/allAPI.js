import commonAPI from "./commonAPI"
import baseUrl from "./baseurl"


//addResumeAPI
export const addResumeAPI=async(resume)=>{
    return await commonAPI("POST",`${baseUrl}/resumes`,resume)
}
//editResumeAPI-PUT

    export const editResumeAPI=async(id,resume)=>{
    return await commonAPI("PuT",`${baseUrl}/resumes/${id}`,resume)
}
//addDownloadHistory  
 
    export const addDownloadHistoryAPI=async(id,resume)=>{
    return await commonAPI("POST",`${baseUrl}/history`,resume)
}


//getDownloadHistory

    export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${baseUrl}/history`,{})
}
////deleteDownloadHistory
    export const deleteDownloadHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${baseUrl}/history/${id}`,{})
}

//getResumeAPI

export const getResumeAPI=async(id)=>{
       return await commonAPI("GET",`${baseUrl}/resumes/${id}`,{})
 
}