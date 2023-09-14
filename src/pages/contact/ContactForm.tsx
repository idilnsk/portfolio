import React, { useState,useRef } from 'react';


import emailjs from "@emailjs/browser";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef<HTMLFormElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    emailjs.send('service_tccofth', 'template_c69jghg', {...formData}, '1rbXYZAv68RBMlM3s')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        form.current?.reset();
        
      }, error => {
        console.error('FAILED...', error);
      });
  };

  return (
    <>
    <h2 className="mb-4 text-2xl text-center font-mukta text-white">Contact Me</h2>

    <div className="h-auto flex justify-center items-center">
      <form ref={form} onSubmit={handleSubmit} className="w-96 p-4"> {/* removed bg-white, rounded, and shadow-lg */}
        <div className="mb-4">
          <label className="block text-white font-bold mb-2 font-mukta">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2 font-mukta">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2 font-mukta">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="font-mukta gradient-button">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
