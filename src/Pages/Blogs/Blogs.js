import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div style={{borderRadius:'5px'}} class="collapse">
                <input type="checkbox" class="peer" />
                
                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                   <span>Questions: 1</span> How will you improve the performance of a React Application?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>tabindex="0" attribute is necessary to make the div focusable lorem tabindex="0" attribute is necessary to make the div focusable lorem tabindex="0" attribute is necessary to make the div focusable lorem tabindex="0" attribute is necessary to make the div focusable lorem</p>
                </div>
            </div>

            <div style={{borderRadius:'5px'}} class="collapse">
                <input type="checkbox" class="peer" />
                
                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                  <span>Questions: 2</span>  What are the different ways to manage a state in a React application?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div style={{borderRadius:'5px'}} class="collapse">
                <input type="checkbox" class="peer" />
                
                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                  <span>Questions: 3</span>  How does prototypical inheritance work?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div style={{borderRadius:'5px'}} class="collapse">
                <input type="checkbox" class="peer" />
                
                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                   <span>Questions: 4</span> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div style={{borderRadius:'5px'}} class="collapse">
                <input type="checkbox" class="peer" />
                
                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                  <span>Questions: 5</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div style={{borderRadius:'5px'}} class="collapse">
                <input type="checkbox" class="peer" />
                
                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                  <span>Questions: 6</span>  What is a unit test? Why should write unit tests?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
           
        </div>
    );
};

export default Blogs;