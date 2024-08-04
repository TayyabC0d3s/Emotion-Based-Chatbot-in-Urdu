import React, { useState } from "react"

export const useData = () => {
    const [Fname,setFname] = useState('')
    const [Lname,setLname] = useState('')
    const [Email,setEmail] = useState('')
    const [Phone,setPhone] = useState('')
    const [isRemember, setRemember] = useState(false)

    return  {Fname, setFname, Lname, setLname, Email, setEmail, Phone, setPhone, isRemember, setRemember}
}

export const useExp = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        city: '',
        country: '',
        startDate: '',
        endDate: '',
        comments: '',
    });
    const [workExperiences, setWorkExperiences] = useState([]);


    return {formData, setFormData, workExperiences, setWorkExperiences}
}

export const useEducation = () => {
    const [formData, setFormData] = useState({
        Degree: '',
        Institute: '',
        city: '',
        country: '',
        startDate: '',
        endDate: '',
    })
    const [Education, setEducation] = useState([]);

    return {formData, setFormData, Education, setEducation}

}
