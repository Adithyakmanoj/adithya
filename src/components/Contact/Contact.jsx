import React from 'react'

function Contact() {
    return (
        <div>
          <h2>Contact Me</h2>
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Your name"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Your email"
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      );
}

export default Contact
