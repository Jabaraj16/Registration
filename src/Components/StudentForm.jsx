import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { studentRegisterAPI } from '../Services/allAPI';

function StudentForm() {
    const [spinnerStatus, setspinnerStatus] = useState(false)
    const navigate = useNavigate()
    const [studentData, setStudentdata] = useState(
        { firstname: "", lastname: "", address: "", email: "", gender: "", phone: "", password: "", dob: "", course: "" }
    )

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const { firstname, lastname, address, email, gender, phone, password, dob, course } = studentData
            if (!firstname || !lastname || !address || !email || !gender || !phone || !password || !dob || !course) {
                toast.warning('Please fill the form  completely')
            } else {
                const result = await studentRegisterAPI(studentData)
                if (result.status == 200) {
                    toast.success('Registerd Sucessfully')
                    setspinnerStatus(true)
                    setStudentdata({ firstname: "", lastname: "", address: "", email: "", gender: "", phone: "", password: "", dob: "", course: "" })
                    setTimeout(() => {
                        navigate('/studentlist')
                    }, 4000)
                }
            }
        } catch (err) {

        }
    }
    //    console.log(studentData);


    return (
        <div className='ms-5'>
            <Form>
                <div className='row mt-4'>

                    <div className="col-lg-6">


                        <Form.Group className='w-75' as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                                onChange={e => setStudentdata({ ...studentData, firstname: e.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} className='mb-3 w-75' md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"

                                onChange={e => setStudentdata({ ...studentData, lastname: e.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <FloatingLabel className='mb-3 w-75' controlId="floatingTextarea2">

                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={e => setStudentdata({ ...studentData, address: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <FloatingLabel
                                controlId="floatingInputEmail"

                                className="mb-3 w-75"
                            >
                                <Form.Control type="email" placeholder="name@example.com" onChange={e => setStudentdata({ ...studentData, email: e.target.value })} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Select aria-label="Default select example" className='w-75' defaultValue={'DEFAULT'} onChange={e => setStudentdata({ ...studentData, gender: e.target.value })}>
                            <option value="DEFAULT" >Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </Form.Select>


                    </div>
                    <div className="col-lg-6">
                        <Form.Group className='mb-3'>
                            <label htmlFor="">Mobile Number</label>
                            <FloatingLabel className='w-75 '
                                controlId="floatingInputNumber"

                            >
                                <Form.Control type="text" placeholder="Enter mobile number" onChange={e => setStudentdata({ ...studentData, phone: e.target.value })} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className='w-75 mb-3'>
                            <Form.Label>Password</Form.Label>
                            <FloatingLabel controlId="floatingPassword">
                                <Form.Control type="password" placeholder="Enter your Password" onChange={e => setStudentdata({ ...studentData, password: e.target.value })} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className='w-75 mb-3'>
                            <Form.Label>Date of Birth</Form.Label>
                            <FloatingLabel controlId="floatingDate">
                                <Form.Control type="date" placeholder="Enter your Password" onChange={e => setStudentdata({ ...studentData, dob: e.target.value })} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className='w-75 mb-3'>
                            <Form.Label> Course</Form.Label>
                            <Form.Select aria-label="Default select example" defaultValue={'DEFAULT'}  onChange={e => setStudentdata({ ...studentData, course: e.target.value })}>
                                <option value="DEFAULT" >Select Course</option>
                                <option value="BCA">BCA</option>
                                <option value="BTECh">BTECh</option>
                                <option value="MCA">MCA</option>
                                <option value="Bcom">Bcom</option>
                                <option value="Bsc">Bsc</option>
                                <option value="BBA">BBA</option>
                            </Form.Select>
                        </Form.Group>
                        <div className='mt-4'><Button type="submit" onClick={handleRegister}>Register</Button>
                            {
                                spinnerStatus &&
                                <Spinner className='pt-2 ms-5' animation="border" variant="info" />
                            }

                        </div>

                    </div>

                </div>

            </Form>
            <ToastContainer theme='colored' />
        </div>
    )
}

export default StudentForm