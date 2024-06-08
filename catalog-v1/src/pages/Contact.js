import React from 'react';
const styles = {

   container: {
       width: '80%',
       margin: '0 auto',
       padding: '20px',
   },
   subHeader: {
       textAlign: 'center',
       padding: '50px 0',
   },
   subHeaderTitle: {
       fontSize: '3em',
       margin: 0,
   },
   section: {
       margin: '40px 0',
   },
   sectionTitle: {
       fontSize: '2em',
       borderBottom: '2px solid black',
       paddingBottom: '10px',
   },
   paragraph: {
       fontSize: '1.2em',
       lineHeight: '1.6em',
   },
   links: {
       color: 'black',
       textDecoration: 'none',
       fontWeight: 'bold',
   },

};
const Contact = () => {
   return (
       <div style={styles.body}>
           <div style={styles.container}>
               <header style={styles.subHeader}>
                   <h1 style={styles.subHeaderTitle}>Brodie Busby</h1>
                   <p>Senior in College | Software Engineering</p>
               </header>

               <section style={styles.section} id="about">
                   <h2 style={styles.sectionTitle}>About Me</h2>
                   <p style={styles.paragraph}>
                       Hello! I'm Brodie Busby, a senior in college studying Software Engineering. I hold certificates in Embedded Systems and Software Design. Although I sometimes find the journey challenging, I'm passionate about technology and enjoy solving complex problems.
                   </p>
               </section>

               <section style={styles.section} id="education">
                   <h2 style={styles.sectionTitle}>Education and Certifications</h2>
                   <p style={styles.paragraph}>
                       <strong>Degree:</strong> Bachelor's in Software Engineering<br />
                       <strong>Certificates:</strong> Embedded Systems, Software Design
                   </p>
               </section>

               <section style={styles.section} id="contact">
                   <h2 style={styles.sectionTitle}>Contact Information</h2>
                   <p style={styles.paragraph}>
                       Feel free to reach out to me through my LinkedIn profile or check out my projects on GitHub.
                   </p>
                   <div>
                       <p>
                           <a href="https://github.com/brodiembusby" target="_blank" style={styles.links}>GitHub</a> | 
                           <a href="https://www.linkedin.com/in/brodiembusby" target="_blank" style={styles.links}>LinkedIn</a>
                       </p>
                   </div>
               </section>
           </div>
       </div>
   );
};

export default Contact;