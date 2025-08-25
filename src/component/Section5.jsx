import React, { useState } from 'react'
import mail from "/icons/mail.png"
import location from "/icons/location.png"
import whiteArrow from "/icons/white_diagonal_arrow.png"



export default function Section5() {

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleOnchange = (e) => {
        const {name , value} = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('form-date: ', data);
    }
    return (
        <section className='home_section5' id='section5'>
            <div className="container">
                <div className="contentWrap">
                    <h2>
                        Contact Me!
                    </h2>
                    <div className="content">
                        <div className="textContainer">
                            <p className='sloganPara'>Let's build something great together!
                                <span>Open to exciting opportunities or freelance projects.</span>
                            </p>

                            <div className="infoContainer">
                                <img src={mail} alt="" />
                                <div>
                                    <h3>
                                        Mail
                                    </h3>
                                    <p className='infoText'>ashwithsalian2003@gmail.com</p>
                                </div>
                            </div>

                            <div className="infoContainer">
                                <img src={location} alt="" />
                                <div>
                                    <h3>
                                        Location
                                    </h3>
                                    <p className='infoText'>Mangaluru-574242</p>
                                </div>
                            </div>

                        </div>
                       
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='name' value={data.name || ''} onChange={handleOnchange}/>
                            <input type="text" placeholder='Email' name='email' value={data.email || ''} onChange={handleOnchange}/>
                            <textarea type='text' placeholder='Message' name='message' value={data.message || ''} onChange={handleOnchange}/>
                            <button type='submit'>Submit <img src={whiteArrow} alt="" /></button>
                        </form>
                        

                    </div>

                </div>
            </div>
        </section>
    )
}
