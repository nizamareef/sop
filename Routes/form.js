const express = require("express");
const router = express.Router();
const Form = require('../Models/Form');
const transporter = require('./emailer'); 

router.post('/create', async (req, res) => {
    try {
        const data = await new Form(req.body);
        await data.save();

        const mail = {
            from: process.env.MAIL,
            to: data.email,
            subject: "SOP",
            text: `Statement of Purpose

            Full Name: ${data.fullName}
            Email: ${data.email}
            Age: ${data.age}
            Applying From Country: ${data.applyingFromCountry}
            
            I am writing this statement to express my strong interest in the Master of Science in Computer Science program at Stanford University. This program aligns perfectly with my academic aspirations and career goals, and I am excited about the opportunity to contribute to and learn from the academic community at Stanford.
            
            Educational Background
            
            I have always been passionate about education, and my journey in academia has been a fulfilling one. I completed my education up to a Bachelor's Degree at ${data.instituteCompletedEducation}, majoring in ${data.fieldOfStudy}. These years of learning have not only equipped me with knowledge but also instilled in me a deep curiosity for further exploration in my field.
            
            Work Experience
            
            I have had the privilege of gaining valuable work experience that has enriched my understanding of the practical aspects of my field. ${data.hasWorkExperience},where I was responsible for developing innovative software solutions. This experience has given me a real-world perspective and enhanced my problem-solving skills.
            
            Admission Details
            
            I am thrilled about the prospect of continuing my education in Canada. I have been admitted to the University of Toronto to pursue a Master's Degree in Computer Science. This is a significant step towards achieving my academic and career objectives.
            
            Future Goals
            
            My future goals are deeply rooted in my passion for computer science. I aspire to become a leading researcher in the field of artificial intelligence, and I believe that the Master of Science in Computer Science program at Stanford University will provide me with the necessary knowledge and skills to achieve these goals.
            
            English Scores
            
            I have achieved commendable scores in English proficiency tests:
            
            Listening: ${data.listening} points
            Reading: ${data.reading} points
            Speaking: ${data.speaking} points
            Writing: ${data.writing} points
            These scores reflect my ability to excel in an English-speaking academic environment.
            
            Financial Information
            
            I understand the financial responsibilities that come with studying abroad. I have paid the first-year tuition fee, and the details are as follows:
            
            Paid First-Year Tuition: ${data.paidFirstYearTuition}
            Tuition Fee Paid: ${data.tuitionFeePaid}
            I have also considered the Graduate International Collaborative (GIC) program, and while I have not participated in it yet, I am open to exploring this option in the future.
            
            In conclusion, I am enthusiastic about joining the Stanford University community and contributing to its academic excellence. This program represents the next step in my academic journey, and I am confident that it will provide me with the knowledge and experiences I need to excel in my field.
            
            Thank you for considering my application. I am looking forward to the possibility of becoming a part of the vibrant academic environment at Stanford University.
            
            Sincerely,
            
            ${data.fullName}`
        };

        transporter.sendMail(mail, (error) => {
            if (error) {
                console.error("Error sending mail:", error);
                res.status(500).send('Error sending mail');
            } else {
                console.log("Email sent");
                res.send(data);
            }
        });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
