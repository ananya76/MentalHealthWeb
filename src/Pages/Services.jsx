import React from 'react'
import Card from '../components/Card'
import quizImg from "../assets/images/card-img01.png"
import journal from "../assets/images/card-img02.png"
import therapy from "../assets/images/card-img03.png"

const Services = () => {
  return (
    <div className='services'>
        <div className='heading'>
            <h1>Empower Your Mind</h1>
        </div>

    <div className='card-section'>
    <Card 
        img = {quizImg}
        btnText = "Take Quiz"
    ></Card>
    <Card
        img = {journal}
        btnText = "Write Journal"
    ></Card>
    <Card
        img = {therapy}
        btnText = "Book Appointment"
    ></Card>
    <Card></Card>
    </div>

    </div>

  )
}

export default Services