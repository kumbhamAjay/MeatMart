const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">About MeatMart</h3>
              <p className="text-sm mr-40">
                At MeatMart, we pride ourselves on delivering fresh, high-quality meats directly to your doorstep. From farm to table, we ensure the best for your family.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@meatmart.com"
                    className="hover:underline"
                  >
                    support@meatmart.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +91 9876543210
                </li>
                <li>
                  <strong>Address:</strong> 12th floor,Manjeera Trinity,Kphb,Hyd.
                </li>
              </ul>
            </div>
          </div>
  
          {/* Social Media Icons */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.99 3.657 9.128 8.438 9.879v-6.99h-2.54v-2.889h2.54v-2.197c0-2.505 1.492-3.889 3.774-3.889 1.094 0 2.238.195 2.238.195v2.462h-1.261c-1.244 0-1.63.771-1.63 1.56v1.869h2.773l-.443 2.889h-2.33v6.99C18.344 21.128 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1a9.2 9.2 0 0 1-2.89 1.1 4.52 4.52 0 0 0-7.69 4.13A12.8 12.8 0 0 1 3 2.17a4.51 4.51 0 0 0 1.4 6.03A4.4 4.4 0 0 1 2 7.87v.06a4.51 4.51 0 0 0 3.63 4.42 4.52 4.52 0 0 1-2 .08 4.52 4.52 0 0 0 4.22 3.14A9 9 0 0 1 2 19.54a12.79 12.79 0 0 0 6.93 2.03c8.32 0 12.86-6.9 12.86-12.89 0-.2 0-.39-.01-.58A9.23 9.23 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 1H8C4.14 1 1 4.14 1 8v8c0 3.86 3.14 7 7 7h8c3.86 0 7-3.14 7-7V8c0-3.86-3.14-7-7-7zm5 15c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5h8c2.76 0 5 2.24 5 5v8zm-5.5-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </a>
          </div>
  
          {/* Copyright */}
          <div className="text-center mt-8 text-sm">
            © {new Date().getFullYear()} MeatMart. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  