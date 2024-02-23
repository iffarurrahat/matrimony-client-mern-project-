import axiosPublic from "./axiosPublic";
import axiosSecure from "./axiosSecure";

// Fetch all rooms for host
export const getProfileCandidates = async email => {
    const { data } = await axiosSecure(`/candidates/${email}`)
    return data
}

// Fetch all candidates from db
export const getAllCandidates = async () => {
    const { data } = await axiosPublic('/candidates')
    return data
}


// Fetch single Candidate data from db
export const getCandidate = async (id) => {
    const { data } = await axiosSecure(`/candidate/${id}`)
    return data
}


// Save a candidate info in db
export const addCandidate = async (candidateInfo) => {
    const { data } = await axiosPublic.post('/candidates', candidateInfo)
    return data;
}