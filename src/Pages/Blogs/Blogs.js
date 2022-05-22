import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div style={{ borderRadius: '5px' }} class="collapse">
                <input type="checkbox" class="peer" />

                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                    <span>Questions: 1</span> How will you improve the performance of a React Application?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">

                    <strong>Optimizing performance in a React application:</strong> In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:
                    <ol>
                        <li>* Keeping component state local where necessary</li>
                        <li>* Memoizing React components to prevent unnecessary re-renders</li>
                        <li>* Windowing or list virtualization in React</li>
                        <li>* Lazy loading images in React</li>
                        <li>* Code-splitting in React using dynamic import()</li>
                    </ol>
                    <br />
                    <strong>Dependency optimization: </strong>
                    When considering optimizing the application bundle size, it’s worth checking how much code you are actually utilizing from dependencies. For example, you could be using Moment.js which includes localized files for multi-language support. If you don’t need to support multiple languages, then you can consider using moment-locales-webpack-plugin to remove unused locales for your final bundle.

                    Another example is loadash. Let’s say you are only using 20 of the 100+ methods, then having all the extra methods in your final bundle is not optimal. So for this, you can use lodash-webpack-plugin to remove unused functions.

                    Here is an extensive list of dependencies which you can optimize.
                    <br /> <br />
                    <strong>Use Reselect in Redux to Avoid Frequent Re-render: </strong>
                    Reselect is a simple selector library for Redux, which can be used for building memorized selectors. You can define selectors as a function, retrieving snippets of the Redux state for React components.
                </div>
            </div>

            <div style={{ borderRadius: '5px' }} class="collapse">
                <input type="checkbox" class="peer" />

                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                    <span>Questions: 2</span>  What are the different ways to manage a state in a React application?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <strong>the different ways to manage a state in a React application:</strong> When we talk about state in our applications, it’s important to be clear about what types of state actually matte. There are <strong>four</strong> main types of state you need to properly manage in your React apps.
                    <ul>
                        <li>1. Local state</li>
                        <li>2. URL state</li>
                        <li>3. Server state</li>
                        <li>4. Global state</li>
                    </ul>
                    <br />

                    <strong>* Local(UI)state: </strong>
                    Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                    <br /> <br />

                    <strong>* URL state: </strong>
                    Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    <br /><br />
                    <strong>* Server state: </strong>
                    Data that comes from an external server that must be integrated with our UI state.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    <br /><br />
                    <strong>* Global(UI)state: </strong>
                    Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    Sometimes state we think should be local might become global.
                </div>
            </div>
            <div style={{ borderRadius: '5px' }} class="collapse">
                <input type="checkbox" class="peer" />

                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                    <span>Questions: 3</span>  How does prototypical inheritance work?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p><strong>The prototypical inheritance work: </strong>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                        Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values). <br /> <br />
                        JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
                        Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                    <br />JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                </div>
            </div>
            <div style={{ borderRadius: '5px' }} class="collapse">
                <input type="checkbox" class="peer" />

                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                    <span>Questions: 4</span> Why you do not set the state directly in React?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p><strong>The do not set the state directly in React: </strong>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.
                    </p>
                    One should never update the state directly because of the following reasons:

                    If you update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.
                    <br /><br />Despite React’s popularity, one of its biggest drawbacks is its components re-rendering excessively. When developing React applications, you may have noticed that state updates don’t immediately reflect new values after being changed. React state is a plain JavaScript object that holds information that influences the output of a render.

                    When building your project, if you intend to alter any attributes of a React component in the future, you should store the attribute in a state. The state starts with an initial default value on mount and is then altered later on as a result of a user’s actions. Each React component manages its own state internally.
                </div>
            </div>
            <div style={{ borderRadius: '5px' }} class="collapse">
                <input type="checkbox" class="peer" />

                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                    <span>Questions: 5</span> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p>I’ve been wanting to publish this guide for a long while. As a WooCommerce development freelancer, every day I repeat many operations that make me waste time… and one of them is indeed “How to get ____ if I have the $product variable/object?“.

                        For example, “How can I get the product SKU“? Or “How can I get the product short description“? Or maybe the product stock level, shipping class, tax class, price, regular price, sale price, and so on… hopefully this article will save you time.

                        Of course, not always you have access to the $product variable (I’m talking about WooCommerce hooks for example), so you’re also required to understand your case scenario and see if you can “get” that $product object in another way.

                        For example, you might know the $product_id. In this case, you have to find a way to “get the $product object from $product_id” – you find this example below.</p> <br />
                    <p><strong>1. You have access to $product variable</strong>Hooks (do_action and apply_filters) use additional arguments which are passed on to the function. If they allow you to use the “$product” object you’re in business. Alternatively, you can declare the “global $product” inside your function.</p>
                    <br />
                    <p><strong>2. You have access to the Order object or Order ID </strong>
                        How to get the product information inside the Order? In this case you will need to loop through all the items present in the order, and then apply the rules above.</p><br />
                    <p><strong>3. You have access to $product_id </strong>
                        If you have access to the product ID (once again, usually the do_action or apply_filters will make this possible to you), you have to get the product object first. Then, do the exact same things as above.</p><br />
                    <p><strong>4. You have access to $post object</strong>
                        In certain cases (e.g. the backend) you can only get access to $post. So, how do we “calculate” $product from $post? Easy peasy:</p>
                </div>
            </div>
            <div style={{ borderRadius: '5px' }} class="collapse">
                <input type="checkbox" class="peer" />

                <div class="collapse-title  bgblogcolor
                peer-checked:bgblogcolor">
                    <span>Questions: 6</span>  What is a unit test? Why should write unit tests?
                </div>

                <div class="collapse-content  bgblogcolor text-primary-content 
                peer-checked: bg2blogcolor
                peer-checked:">
                    <p><strong>What is a unit test and Reasons for writing unit test: </strong> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    <br /><p>Software testing is a detailed procedure that requires many steps. It is an essential part of the software development process and is done so that only the best product reaches the end-user. Unit testing is a method that is used to test programs and applications to see if they function according to the clients’ specifications.

                        If any problems persist, they should ideally be taken care of earlier on so that they don’t show up when the final version is sent out to clients. Software unit testing mainly involves checking individual modules for errors.</p>
                    <br /><p> <strong>Unit Testing Definition </strong>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p><br />
                    <p>
                        <strong>Find Software Bugs Easily </strong>
                        Unit testing helps identify all kinds of issues with the software at a very early stage. Software developers can then work on those issues first before progressing any further. The main advantage of this is when the issues are resolved at an early stage, no other part of the software is impacted. This leads to increased efficiency, reduced downtime, and reduced costs that would otherwise arise as a result of the whole design process stalling.
                    </p> <br/>
                    <p>
                        <strong>Unit Testing in Performance Lab </strong>
                        Unit testing has its own importance, and the absence of it might cause problems and can significantly impact the overall performance of the program. Unit testing ensures that all the individual units are performing as they’re supposed to and is usually done in the developmental phase. To ensure optimum performance of the software, this form of testing needs to be implemented when required.It is difficult to find a reliable testing provider who can handle the testing phase of your project. Performance Lab specializes in testing software across all major industries. They have qualified professionals with many years of experience who can guide through the entire procedure
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;