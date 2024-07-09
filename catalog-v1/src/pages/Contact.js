import React from 'react';

const Contact = () => {
   return (
    <div className='body'>
        <div className='container-contact'>
    <header className='subHeaderContact'>
        <h1 className='subHeaderContactTitle'>Brodie Busby</h1>
        <p>Senior in College | Software Engineering</p>
    </header>

    <section className='sectionContact' id="about">
        <h2 className='sectionContactTitle'>About Me</h2>
        <p className='paragraphContact'>
            Hello! I'm Brodie Busby, a senior in college studying Software Engineering. I hold certificates in Embedded Systems and Software Design. Although I sometimes find the journey challenging, I'm passionate about technology and enjoy solving complex problems.
        </p>
    </section>

    <section className='sectionContact' id="education">
        <h2 className='sectionContactTitle'>Education and Certifications</h2>
        <p className='paragraphContact'>
            <strong>Degree:</strong> Bachelor's in Software Engineering<br />
            <strong>Certificates:</strong> Embedded Systems, Software Design
        </p>
    </section>

    <section className='sectionContact' id="contact">
        <h2 className='sectionContactTitle'>Contact Information</h2>
        <p className='paragraphContact'>
            Feel free to reach out to me through my LinkedIn profile or check out my projects on GitHub.
        </p>
        <div>
            <p>
                <a href="https://github.com/brodiembusby" target="_blank" className='linksContact'>GitHub</a> | 
                <a href="https://www.linkedin.com/in/brodiembusby" target="_blank" className='linksContact'>LinkedIn</a>
            </p>
        </div>
    </section>
        </div>
    </div>
   );
};

export default Contact;