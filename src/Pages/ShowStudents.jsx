import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { getAllStudentAPI } from '../Services/allAPI'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function ShowStudents() {
    const [studentsData, setstudentsData] = useState([])
    useEffect(() => {
        getAllStudent()
    }, [])

    const getAllStudent = async () => {
        try {
            const result = await getAllStudentAPI()
            if (result.status == 200) {
                setstudentsData(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    console.log(studentsData);
    return (
        <div>
            <Header />
            <div className='container-fluid mt-4'>
                <Table striped bordered hover>
                    <thead >
                        <tr className='bg-info'>
                            <th scope="col" >First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentsData?.length > 0 ? studentsData.map((student, index) => (
                                <tr >
                                    <td >{student.firstname}</td>
                                    <td>{student.lastname}</td>
                                    <td>{student.address}</td>
                                    <td>{student.email}</td>
                                    <td >{student.phone}</td>
                                    <td>{student.dob}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.course}</td>
                                </tr>
                            )) : <div className='text-danger'>No students Data</div>
                        }
                    </tbody>
                </Table>
                <Link to={'/registration'}><button className='btn btn-primary'>HOME</button></Link>
            </div>
        </div>
    )
}

export default ShowStudents