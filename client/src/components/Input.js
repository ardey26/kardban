import React, { useState } from 'react';

const Input = () => {
    const [description, setDesc] = useState("")

    const handleChange = (event) => {
        const newTodo = event.target.value;
        setDesc(newTodo)
    }

    const handleSubmit = async (event) => {

        try {
            const body = {description}    
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }); // uses GET by default so you have to specify which method, WIP replace with Axios
            
            window.location = "/";

            
            
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>

        <h1 className="text-center mt-5"> KardBan </h1>
        <form className="d-flex mt-5 mx-auto" style={{width: "40%"}} onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} onKeyPress={(e) => { if (e.key === 'Enter') { handleSubmit()}}}/>
            <button className="btn btn-outline-dark ml-5"> Add </button>
        </form>

        </>
        
    )
}

export default Input