import React from "react"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function Commentbox() {
    const [setError] = useState(null)
    const {
        register, handleSubmit, formState: { errors }, reset, } = useForm();

    const onSubmit = async (data) => {
        let copyData={
            ...data,
            newspost:localStorage.getItem('postId')
        }
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data : copyData}),
            };
            const response = await fetch('http://localhost:1337/api/comments', requestOptions);
            const userResponse = await response.json();
            console.log(userResponse);
            if (!response.ok) {
                alert('Here we got some errors');
                setError(response.error);
                throw new Error(response.error);
            }

            alert('Submision successful');
            reset();
        } catch (error) {
            console.log(`error ${error}`);
        }
    };
    return (
        <form action="/" onSubmit={handleSubmit(onSubmit)}>
            <div className="commentbox">
                <div className="box mb-3" >
                    <label htmlFor="exampleFormControlInput1" className="form-label text-light">Username</label>
                    {/* <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="username" /> */}
                    <i className="fas fa-user"></i>
                    <input type="text"
                        {...register("fullName", {
                            required: {
                                value: true,
                                message: "Field required. Please enter your name"
                            },
                            minLength: {
                                value: 3,
                                message: "Name should have atleast 3 characters"
                            },
                        })}
                        className={errors.fullname ? "is-invalid form-control" : " form-control"} placeholder="User Name" required />
                    <span className="text-danger">{errors.fullName && errors.fullName.message}
                    </span>
                </div>
                <div className="box mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-light">Email address</label>
                    <i className="fas fa-envelope"></i>
                    <input type="text"
                        className={errors.email ? "is-invalid form-control" : " form-control"}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Kindly enter a valid email address"
                            },
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "invalid format"
                            }
                        })} placeholder="Enter your email" required />
                    <span className="text-danger">  {errors.email && errors.email.message}
                    </span>
                </div>
                <div className="box mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Drop Me a Line.Let Me Know What You Think.</label>
                    <textarea className="form-control"
                        {...register("commentText", {
                            required: true
                        })} id="exampleFormControlTextarea1" rows="3"
                    />
                    {errors.commentText && <span>This field is required</span>}
                </div>
                <div className="col-auto  bttn d-flex">
                    <button type="submit" className="boton ">Submit</button>
                </div>
            </div>
        </form >
    )
}

