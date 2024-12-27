import React from 'react';

const PostPage = () => {
  return (
    <section className=" ">
      <div className="px-4 mx-auto max-w-screen-md bg-[#021024]">
        <h1 className="heading text-center text-[#a9dcfa] font-mono font-bold">
          CREATE YOUR OWN BLOG!
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-center text__para text-[#c1e8ff]">
          Have something interesting? SHARE WITH US!!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label text-[#c1e8ff]">
              TOPIC
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Write your Topic Name"
              className="form__input mt-1"
            />
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label text-[#c1e8ff]">
              What's in your Blog?
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="Write"
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn sm:w-fit bg-[#3d8def]" style={{ borderRadius: "0px" }}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostPage;
