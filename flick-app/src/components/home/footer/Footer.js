import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#6d435a]">
        {/* First Section */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h4>Company</h4>
            <p>About</p>
            <p>Pricing</p>
            <p>Jobs</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
          <div className="flex flex-col">
            <h4>Product</h4>
            <p>Sales softwares</p>
            <p>Features</p>
            <p>Privacy and security</p>
            <p>Marketplace</p>
            <p>API</p>
          </div>
          <div className="flex flex-col">
            <h4>Help Center</h4>
            <p>Community</p>
            <p>Knowledge Base</p>
            <p>Academy</p>
            <p>Support</p>
          </div>
          <div className="flex flex-col">
            <h4>Download</h4>
            <p>Join millions of people who build a fully integrated sales and maketing solution.</p>
          </div>
        </div>
        {/* Horizontal Rule */}
        <div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-red-600" />
        </div>
        {/* Third Section */}
        <div className="flex flex-row justify-between">
        <p>© 2024 Company Name. All rights reserved.</p>
        <p>Terms & Conditions • Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
