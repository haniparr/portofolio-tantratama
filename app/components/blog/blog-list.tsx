// components/BlogListHalf.tsx
"use client";
import React from "react";
import Image from "next/image";

const BlogListHalf = () => {
  return (
    <section className="py-20 bg-gray-700/5 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20">
          <h6 className="text-green-500 uppercase text-sm mb-6">Our Blog</h6>
          <div className="border-t border-gray-600 pt-6 flex items-center">
            <h2 className="text-4xl font-semibold">
              Read Latest <span className="font-light text-gray-300">News</span>
            </h2>
            <div className="ml-auto">
              <a
                href="/blog-list2"
                className="text-green-400 flex items-center gap-2 hover:underline"
              >
                <span>View all posts</span>
                <span className="inline-block rotate-45">↑</span>
              </a>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="bg-gray-800/5 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <img
                  src="/assets/imgs/blog/b/2.jpg"
                  alt="Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center bg-black/50 px-2 py-1 rounded-full">
                  <Image
                    src="/assets/imgs/blog/author.png"
                    width={40}
                    height={40}
                    alt="Author"
                    className="rounded-full"
                  />
                  <div className="ml-3 text-sm">
                    <span className="text-gray-400 block">Posted by</span>
                    <span>UiCamp</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <a
                      href="/blog-list"
                      className="text-sm text-green-400 hover:underline"
                    >
                      Marketing
                    </a>
                  </div>
                  <h5 className="text-xl font-medium mb-4">
                    <a
                      href="/blog-details"
                      className="hover:text-green-400 transition"
                    >
                      Free advertising for your online business.
                    </a>
                  </h5>
                </div>
                <span className="text-xs uppercase text-gray-400 mt-6">
                  August 6, 2022
                </span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-gray-800/5 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <img
                  src="/assets/imgs/blog/b/3.jpg"
                  alt="Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center bg-black/50 px-2 py-1 rounded-full">
                  <Image
                    src="/assets/imgs/blog/author.png"
                    width={40}
                    height={40}
                    alt="Author"
                    className="rounded-full"
                  />
                  <div className="ml-3 text-sm">
                    <span className="text-gray-400 block">Posted by</span>
                    <span>UiCamp</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4 space-x-2">
                    <a
                      href="/blog-list"
                      className="text-sm text-green-400 hover:underline"
                    >
                      Marketing
                    </a>
                    <a
                      href="/blog-list"
                      className="text-sm text-green-400 hover:underline"
                    >
                      Design
                    </a>
                  </div>
                  <h5 className="text-xl font-medium mb-4">
                    <a
                      href="/blog-details"
                      className="hover:text-green-400 transition"
                    >
                      Business meeting 2023 in San Francisco.
                    </a>
                  </h5>
                </div>
                <span className="text-xs uppercase text-gray-400 mt-6">
                  August 6, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListHalf;
