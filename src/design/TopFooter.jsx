const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid plus cursor-pointer  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-16">
        <div>
           
        <div className=" text-white   font-bold md:text-xl plus">
          Job<span className=" text-blue-400">Finder.</span>
        </div>
          
           </div>
          {/* Column 1 */}
          
          {/* Column 2 */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-200 space-y-2">
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Home
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                About
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Contact
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                FAQs
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Terms of Service
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Privacy Policy
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Blog
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Cart
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Partnerships</h2>
            <ul className="text-gray-200 space-y-2">
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                LinkedIn
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Google
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Facebook
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
               Netflix
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Dribble
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Walmart
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Amazon
              </li>
             
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Services</h2>
            <ul className="text-gray-200 space-y-2">
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                D2D business
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Quick Refunds
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Delivery
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                24/7 Customer Support
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Secure Payment Options
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Personalized Recommendations
              </li>
              <li className="plus text-zinc-300 smooth hover:text-zinc-500 hover:pl-3 text-sm font-noemal py-1">
                Free Shipping on Orders Over $50
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
