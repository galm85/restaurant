import React,{useEffect,useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import {url} from '../config.json';

const AdminJobs = () => {

    const [jobs,setJobs]= useState([]);

    const getData = async()=>{
        const jobsList = await axios.get(`${url}/jobs`);
        setJobs(jobsList.data);

    }

    const removeJob = async(jobId)=>{
        const res =await axios.delete(`${url}/jobs/${jobId}`);
        alert(res.data);
        window.location ='';
        
    }

    useEffect(()=>{
        getData()
    },[]);

    if(jobs.length === 0){
        return <div>Loading...</div>
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Jobs List</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job,index)=>(
                                <tr key={job._id}>
                                    <td>{index+1}</td>
                                    <td>{job.name}</td>
                                    <td>{job.email}</td>
                                    <td>{job.address}</td>
                                    <td>{job.phone}</td>
                                    <td>{job.title}</td>
                                    <td>{moment(job.createdAt).fromNow()}</td>
                                    <td><button className="btn btn-danger" onClick={()=>removeJob(job._id)}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     )
}
 
export default AdminJobs
