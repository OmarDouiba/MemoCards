import React from 'react';
import Button from '../shared/Button';

function AboutUs() {
  return (
    <section className="mt-10 mb-10">
      <div className="container mx-auto px-4 flex flex-col items-center ">
        <header>
          <h2 className="text-2xl font-bold">About Us</h2>
        </header>
        <article className="max-w-2xl mt-10 mb-10 text-center">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            nostrum fugiat laboriosam nam veniam? Ad voluptate quae culpa ipsa
            illum laboriosam odit quos tempore, ratione excepturi suscipit
            dolor, maxime asperiores! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ad, voluptas explicabo. Placeat labore id
            cupiditate, aliquam consequuntur deserunt eum? Obcaecati provident
            nam aperiam ex eos ipsa accusamus architecto corrupti temporibus.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;
