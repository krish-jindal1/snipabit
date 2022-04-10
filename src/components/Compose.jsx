import React, { useState } from "react";
import { useNavigate } from "react-router";

function Compose() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/composebit", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            const resJson = res.json();
            if (res.status === 200) {
                setInputs({});
            }
        }).catch((err) => {
            console.log(err);
        });
        navigate('/');
    }

    return(
        <div>
            <h1>Compose</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Post Title"
                            name="title"
                            value={inputs.title}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Post */}
                        <textarea 
                            className="form-control"
                            cols="40" rows="10"
                            placeholder="Post Content"
                            name="content"
                            value={inputs.content}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <button type="submit" className="btn btn-dark btn-md" name="button">Publish</button>
            </form>
        </div>
    )
}

export default Compose;