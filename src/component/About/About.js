import React from 'react';
import profile from "../../Assets/Profile.jpeg"

const About = () => {
    return (

       <div className='grid grid-cols-2 pt-4 mx-10'>
        <div className='text-slate-400 mx-10'>
        <div className=' flex items-center'>
        <p className='text-3xl font-semibold mt-2 pb-4 text-slate-300'>About me</p>
        <div className='w-72 h-[1px] bg-slate-400 ml-4'></div>
        </div>
        <p className='text-justify'>Hello! My name is Jewel Hossain Fahim and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p className='my-3 text-justify'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>

        <p className='my-3 text-justify'>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>

        <p className='mt-3'>Here are a few technologies I’ve been working with recently:</p>
        <div className='grid grid-cols-3 mt-2'>
            <p><span className='text-secondary text-xl'>•</span> JavaScript (ES6+)</p>
            <p><span className='text-secondary text-xl'>•</span> React.js</p>
            <p><span className='text-secondary text-xl'>•</span> Redux</p>
            <p><span className='text-secondary text-xl'>•</span> Node.js</p>
            <p><span className='text-secondary text-xl'>•</span> Express.js</p>
            <p><span className='text-secondary text-xl'>•</span> MongoDB</p>
            <p><span className='text-secondary text-xl'>•</span> MongoDB</p>
        </div>
            
        </div>
        <div className='mt-20 ml-8'>
            <img className='border border-secondary p-2' style={{ width: "350px", height:"380px" }} src={profile} alt="" />
        </div>
       </div>
    );
};

export default About;