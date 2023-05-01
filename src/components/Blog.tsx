import React from "react";

function Blog() {
  return (
    <div className="min-h-[600px] bg-white w-full" id="blogs">
      <div className="container mx-auto py-16">
        <div className="text-center text-5xl font-bold">Latest Blogs</div>
        <div className="flex justify-between mt-8">
          {[1, 2, 3].map((obj, index) => {
            return (
              <div key={index} className=" w-[31%] h-[400px]">
                <div
                  className="w-full h-full bg-gray-50 rounded bg-cover bg-center bg-no-repeat "
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/practicaldev/image/fetch/s--y5c1DL6T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eu8bjg1j02hyszloqfk4.jpg")',
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="border px-4 py-2 border-black cursor-pointer text-xl font-semibold hover:bg-black hover:text-white">
            <a href="https://devpenzil.medium.com/">Read Blogs</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
