import React from "react";

function Cta() {
  return (
    <div className="container mx-auto py-20 px-6 lg:px-10 flex">
      <div className="w-1/2">
        <img src="../images/brainstorming.svg" alt="teamwork brainstorm" />
      </div>

      <div className="w-1/2 flex items-center">
        <div className="p-5">
          <h2 className="text-2xl font-medium text-codeninja">Who We Are?</h2>
          <p className="text-stone-light">
            Code Ninja: A decade of driving innovation in custom software
            development and product design. 260+ successful projects, 140+
            satisfied clients worldwide.
          </p>
          <div className="mt-10 flex items-start justify-start">
            <a
              href="#"
              className="flex items-center justify-between overflow-hidden bg-stone-dark px-3 py-2 text-2xl font-normal text-white hover:text-codeninja shadow-sm hover:bg-white border hover:border hover:border-codeninja ease-in-out duration-100"
            >
              <span>Read Full</span>

              <span className="pl-8">
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 42 34"
                  fill="currentColor"
                  class="hover:text-codeninja"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.909 30.034C23.0303 30.9127 23.0303 32.3373 23.909 33.216C24.7877 34.0947 26.2123 34.0947 27.091 33.216L40.125 20.182C41.8824 18.4246 41.8824 15.5754 40.125 13.818L27.091 0.784011C26.2123 -0.0946702 24.7877 -0.0946702 23.909 0.784011C23.0303 1.66269 23.0303 3.08731 23.909 3.96599L34.693 14.75H3C1.75736 14.75 0.75 15.7574 0.75 17C0.75 18.2426 1.75736 19.25 3 19.25H34.693L23.909 30.034Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              {/* <img class="inline h-5 w-auto" src="../components/public/images/Union.svg" alt="" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
