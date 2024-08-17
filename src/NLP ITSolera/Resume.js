import axios from "axios";
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const Resume = () => {
    const location = useLocation();
    const data = location.state;

    const [summary, setSummary] = useState('');

    alert(JSON.stringify(data))

    const personalInfo = data.PrevData.PrevData.PersonalInfo.Personal;
    const fullName = personalInfo.fullName;
    const email = personalInfo.email;
    const phone = personalInfo.phone;

    useEffect(() => {
       const fetchSummary = async () => {  
        const response = await axios.post('http://127.0.0.1:5000/generate_summary', { });
        setSummary(response.data.summary);
       }
            
       fetchSummary()
    })
       

    // Extract Work Info
    const workInfo = data.PrevData.PrevData.Work;
    // const jobTitle = workInfo.jobTitle;
    // const company = workInfo.company;
    // const city = workInfo.city;
    // const country = workInfo.country;
    // const startDate = workInfo.startDate;
    // const endDate = workInfo.endDate;
    // const comments = workInfo.comments;

    // Extract Education Info
    const educationInfo = data.PrevData.Education;
    // const degree = educationInfo.Degree;
    // const institute = educationInfo.Institute;
    // const eduCity = educationInfo.city;
    // const eduCountry = educationInfo.country;
    // const eduStartDate = educationInfo.startDate;
    // const eduEndDate = educationInfo.endDate;

    const skills = data.Skills;


    return(
        <div class="p-4 shadow-lg">
            <div>
                <h1 className="flex font-xl justify-center align-center">{fullName}</h1>
                <table>
                    <tr>
                        <th>{email}</th>
                        <th>{phone}</th>
                    </tr>
                </table>
                <hr />
            </div>
            <div>
                {summary}
                <hr />
            </div>
            <div>
            <h2>Work Experience</h2>
            <hr />
            <table>
                <tbody>
                    {workInfo.map((work, index) => {
                        const { jobTitle, company, city, country, startDate, endDate, comments } = work;
                        // Calculate duration, e.g., in months or years
                        const duration = `${endDate}`;
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <th>{jobTitle}</th>
                                </tr>
                                <tr>
                                    <td>{duration}</td>
                                    <td>{company}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">{comments}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
        <div>
            <h2>Education</h2>
            <table>
                <tbody>
                    {educationInfo.map((educationInfo, index) => {
                        const { Degree, Institute, city, country, startDate, endDate } = educationInfo;
                        // Display the duration as a concatenated string
                        const duration = `${startDate} - ${endDate}`;
                        return (
                            <>
                            <tr key={index}>
                                <th>{Degree}</th>
                            </tr>
                            <tr>
                                <td>{Institute}</td>
                                <td>{duration}</td>
                            </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
            <div>
                <h2>Skills</h2>
                {skills}
            </div>
        </div>
    )
}

export default Resume