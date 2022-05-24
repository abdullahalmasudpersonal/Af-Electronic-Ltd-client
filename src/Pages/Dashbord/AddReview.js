import React from 'react';

const AddReview = () => {
    return (
        <div className='ml-6'>
            <h2>Add Review</h2>
            <div className='flex justify-center items-center'>
                <div className='mt-4'>
                    <form>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered input-md w-full max-w-xs mb-3" />

                        <input type="number" placeholder="Enter ratting" class="input input-bordered input-md w-full max-w-xs mb-3" />
                        <br />
                        <textarea type="text" placeholder="Type your review" class="input input-bordered input-md w-full max-w-xs mb-3" />

                        <input type="submit" value='submit' placeholder="Type here" class="input input-bordered input-md w-full max-w-xs font-bold cursor-pointer bg-purple-100 hover:bg-purple-400 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;