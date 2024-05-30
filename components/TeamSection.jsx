import React from 'react'





const teamMembers = [
    {
      name: 'Holden Caulfield',
      role: 'UI Designer',
      image: 'https://dummyimage.com/80x80',
    },
    {
      name: 'Henry Letham',
      role: 'CTO',
      image: 'https://dummyimage.com/84x84',
    },
    {
      name: 'Oskar Blinde',
      role: 'Founder',
      image: 'https://dummyimage.com/88x88',
    },
    {
      name: 'John Doe',
      role: 'DevOps',
      image: 'https://dummyimage.com/90x90',
    },
    {
      name: 'Martin Eden',
      role: 'Software Engineer',
      image: 'https://dummyimage.com/94x94',
    },
    {
      name: 'Boris Kitua',
      role: 'UX Researcher',
      image: 'https://dummyimage.com/98x98',
    },
    {
      name: 'Atticus Finch',
      role: 'QA Engineer',
      image: 'https://dummyimage.com/100x90',
    },
    {
      name: 'Alper Kamu',
      role: 'System',
      image: 'https://dummyimage.com/104x94',
    },
    {
      name: 'Rodrigo Monchi',
      role: 'Product Manager',
      image: 'https://dummyimage.com/108x98',
    },
  ];






const TeamSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.image}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{member.name}</h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default TeamSection
