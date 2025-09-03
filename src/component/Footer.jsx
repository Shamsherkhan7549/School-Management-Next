import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#144c7dd4]  text-white w-full  bottom-0 left-0 shadow-inner">
  <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    {/* Important Links */}
    <div>
      <h3 className="font-semibold mb-2">Important Links</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-green-400">Schools in India</a></li>
        <li><a href="#" className="hover:text-green-400">Other Schools in India</a></li>
        <li><a href="#" className="hover:text-green-400">Colleges in India</a></li>
        <li><a href="#" className="hover:text-green-400">Advertise With Us</a></li>
      </ul>
    </div>

    {/* Common Admissions */}
    <div>
      <h3 className="font-semibold mb-2">Common Admissions</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-green-400">Edunify India</a></li>
        <li><a href="#" className="hover:text-green-400">Support</a></li>
        <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-green-400">Terms and Conditions</a></li>
      </ul>
    </div>

    {/* Contact & About */}
    <div>
      <h3 className="font-semibold mb-2">Contact & About</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-green-400">Refund Policy</a></li>
        <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
        <li><a href="#" className="hover:text-green-400">About Us</a></li>
        <li><a href="#" className="hover:text-green-400">CGPA Converter</a></li>
      </ul>
    </div>

  </div>
  <div className="text-center text-gray-400 text-sm mt-4">
    &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
  </div>
</footer>

  )
}

export default Footer