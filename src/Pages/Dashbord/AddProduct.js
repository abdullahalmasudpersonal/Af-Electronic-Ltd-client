import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`;
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
        <h2>Add Product</h2>
        <div className='flex justify-center items-center'>
            <div className='mt-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name='name' placeholder="Product name" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("name", { required: true, maxLength: 50 })} />

                    <input type="number" name='minOrderQuantity' placeholder="Min Order Quantity" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("minOrderQuantity")}   />
                    <br/>
                    <input type="number" name='' placeholder="Available Quantity" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("availableQuantity")}   />

                    <input type="number" name='price' placeholder="Enter Price" class="input input-bordered input-md w-full max-w-xs mb-3" {...register("price")}   />
                    <br />
                    <textarea type="text" name='dec' placeholder="Description" class="input input-bordered input-md w-full max-w-xs mb-3"  {...register("dec")} />

                    <input type="text" name='img' placeholder="Photo URL" class="input input-bordered input-md w-full max-w-xs mb-3"  {...register("img")} />

                    <input type="submit" value='Add Product' class="input input-bordered input-md w-full max-w-xs font-bold cursor-pointer bg-purple-200 hover:bg-purple-400 " />
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;