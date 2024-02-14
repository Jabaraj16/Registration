import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
function Home() {
  return (
    <div>
        <Header/>
        <div className='container-fluid'>
            <div className="row"  style={{height:'100vh'}}>
                <div className="col-lg-2"></div>
                <div className="col-lg-4 d-flex flex-column justify-content-center " style={{height:'500px'}}>
                    <div>
                        <h3 className='fw-bolder'>Education</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nobis non numquam, repellat aut facilis quia aliquam eius molestiae! Maxime sit asperiores vitae voluptatem similique repudiandae eligendi blanditiis, quasi quo!</p>
                    </div>
                    <Link to={'/register'}><div><button className='btn btn-primary float-start'>Get started</button></div></Link>
                </div>
                <div className="col-lg-4 mt-4">
                    <img src="https://img.freepik.com/free-vector/education-concept-illustration_114360-7928.jpg" alt="" />
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
  )
}

export default Home