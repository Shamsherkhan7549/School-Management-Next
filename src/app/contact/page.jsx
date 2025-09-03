import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* Page Header */}
      <header className="bg-gray-200 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-300 mt-2">We would love to hear from you!</p>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex justify-center items-start py-12 px-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea placeholder="Your message..." rows="5" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">Send Message</button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="space-y-4 text-gray-700">
              <li><strong>Address:</strong> 123 Street, City, India</li>
              <li><strong>Email:</strong> contact@yourwebsite.com</li>
              <li><strong>Phone:</strong> +91 123 456 7890</li>
              <li><strong>Working Hours:</strong> Mon - Fri, 9:00AM - 6:00PM</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-green-500">Facebook</a>
                <a href="#" className="text-gray-500 hover:text-green-500">Twitter</a>
                <a href="#" className="text-gray-500 hover:text-green-500">Instagram</a>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
      </footer>
      
    </div>
  );
};

export default ContactPage;
