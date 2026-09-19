import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ContactSection.css';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
      
      const result = await response.json();
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for contacting me. I will get back to you soon.',
          confirmButtonColor: '#0ef' // var(--main-color)
        });
        e.target.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.message || "Something went wrong!"
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong! Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form id="contactForm" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="85dfcfae-91d2-4e1d-85bc-21447b577e90" />

        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" required aria-label="Full Name" />
          <input type="email" name="email" placeholder="Email Address" required aria-label="Email Address" />
        </div>
        <div className="input-box">
          <input type="tel" name="phone" placeholder="Mobile Number" aria-label="Mobile Number" />
          <input type="text" name="subject" placeholder="Email Subject" aria-label="Email Subject" />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message" required aria-label="Message"></textarea>

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <input type="submit" value={isSubmitting ? "Sending..." : "Send Message"} className="btn" disabled={isSubmitting} />
      </form>
    </section>
  );
};

export default ContactSection;
