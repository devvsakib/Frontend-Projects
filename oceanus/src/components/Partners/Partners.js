import React from 'react'

const Partners = () => {
  const sponsoreLogo = [
    { brand: "Google", logo: "/images/Google.png" },
    { brand: "Webflow", logo: "/images/webflow.png" },
    { brand: "YouTube", logo: "/images/YouTube.png" },
    { brand: "Facebook", logo: "/images/Facebook.png" }
  ]
  return (

    <div className='mb-36 -mt-5'>
      <div className='text-center  bg-gradient-to-t from-[#061C35] opacity-30 to-white bg-clip-text text-transparent'>
        <h1 className='text-2rem lg:text-[9rem] font-black  uppercase lg:inline-block'>Our Partners</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10  mb-14 -mt-10 gap-x-20'>
        {
          sponsoreLogo.map((sponsore, idx) => (
            <div key={idx} className='border-r-2 partners border-white/30'>
              <img src={sponsore.logo} alt={sponsore.brand} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Partners