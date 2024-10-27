import React from 'react';
import Button from '../shared/Button';

function ExploreSection({
  title,
  children,
  image,
  orderd = true,
  addButton = false,
  buttonText,
}) {
  return (
    <section className="my-5">
      <div className="container mx-auto flex items-left justify-center flex-col md:flex-row md:items-center">
        <article
          className={`text-left mb-6 ${orderd ? 'md:order-1' : 'md:order-2'}`}
        >
          <header>
            <h1 className="text-2xl font-bold mb-4 max-w-md md:text-xl">
              {title}
            </h1>
          </header>
          <p className="mb-6 text-lg max-w-md">{children}</p>
          {image}
          {addButton && <Button>{buttonText}</Button>}
        </article>
        <img
          src={'https://placehold.co/600x400'}
          alt="Course illustration"
          className={`mb-10 md:ml-10 md:w-[400px] md:h-[400px] ${
            orderd ? 'md:order-2 ' : 'md:order-1 md:mr-20'
          }`}
        />
      </div>
    </section>
  );
}

export default ExploreSection;
