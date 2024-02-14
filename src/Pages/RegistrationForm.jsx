import React from 'react'
import Header from '../Components/Header'
import StudentForm from '../Components/StudentForm'

function RegistrationForm() {
  return (
    <div>
         <Header insideRegister/>
        <div >
            <div className='row'>
                <div className="col-lg-5">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4489363-3723270.png" alt="no" />
                </div>
                <div className="col-lg-7">
                    <StudentForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationForm