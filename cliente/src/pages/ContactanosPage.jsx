import React from 'react'
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

function ContactanosPage() {
  return (
    <div>
      <div>
        <Sidenav />
      </div>

      <section className="relative block h-[30vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1691725013692-29eb3f6bca64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-white/30 bg-cover bg-center" />
      </section>

      <section className="relative bg-blue-gray-50/50 py-48 px-10">
        <div className="container mx-auto">
          <div className="relative -mt-72 flex w-full min-w-0 flex-col break-words rounded-3xl bg-gray-50 shadow-xl shadow-gray-500/5">
            <div className=" px-10 py-16">

              <div className="container mx-auto px-6 md:px-12 xl:px-32 text-center">
                <h2 className="mb-4 text-center text-2xl text-purple-900 font-bold md:text-4xl">Contactanos</h2>
                <p className="py-3 text-gray-600 lg:w-20/12 lg:mx-auto">Bienvenido </p>
              </div>

              <div>
                <section className="text-gray-700 body-font relative">
                  <div className="container px-5 py-15 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                      <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                          <div className="relative">
                            <label htmlFor='name' className="leading-7 text-sm text-gray-600">
                              Name
                            </label>
                            <input
                              autoComplete="off"
                              type="text"
                              id="name"
                              name="name"
                              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-1/2">
                          <div className="relative">
                            <label
                              htmlFor='email'
                              className="leading-7 text-sm text-gray-600"
                            >
                              Email
                            </label>
                            <input
                              autoComplete="off"
                              type="email"
                              id="email"
                              name="email"
                              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <div className="relative">
                            <label
                              htmlFor='message'
                              className="leading-7 text-sm text-gray-600"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                          </button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                          <a className="text-indigo-500">example@email.com</a>
                          <p className="leading-normal my-5">
                            49 Smith St.
                            <br />
                            Saint Cloud, MN 56301
                          </p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                              </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                              <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  width="20"
                                  height="20"
                                  x="2"
                                  y="2"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                              </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                              <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactanosPage