import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://agile-reaches-45369.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        })
    };


    return (
        <div className='ml-6'>
            <h2>Add Review</h2>
            <div className='flex justify-center items-center'>
                <div className='mt-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("name", { required: true, maxLength: 20 })} />

                        <input type="number" name='ratting' placeholder="Enter ratting" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("ratting", { min: 1, max: 5 })}   />
                        <br />
                        <textarea type="text" name='review' placeholder="Type your review" class="input input-bordered input-md w-full max-w-xs mb-3 h-20"  {...register("dec")} />

                        <input type="submit" value='submit' placeholder="Type here" class="input input-bordered input-md w-full max-w-xs font-bold cursor-pointer bg-purple-100 hover:bg-purple-400 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;