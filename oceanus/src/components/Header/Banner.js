import { useEffect, useState } from "react";
import Button from "../Common/Button";

const Banner = () => {
  const [typed, setTyped] = useState("Planet")
  const data = [
    { numbers: "2.5B", desc: "Solid waste" },
    { numbers: "275M", desc: "Plastic waste" },
    { numbers: "700+", desc: "Species might extinct" },
    { numbers: "1500%", desc: "Increased polution" }
  ]

  //  write a t

  return (
    <div className="h-auto grid items-center gap-2">
      <div className="flex flex-col gap-5 mt-36">
        <div className="border-l-4 border-white pl-10">
          <div className="no-select"><img src="/images/bannertext.png" /></div>
          <p className="text-white/80 mt-7">Oceans & Us creates circular economies for river and ocean clean-ups, promoting<br /> sustainability, education, and empowerment for a better future</p>
        </div>
        <div className="mt-3 pl-10">
          <div className="mt-5">
            <Button content={"Discover our cause"} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 items-center my-20 mt-36">
        <p className="border-l-4 font-thin italic border-white pl-10 text-3xl">Our vision is to promote sustainable scalable solutions and a balanced approach to <span id="typing" className="text-tertiary font-semibold">{typed}</span></p>
        <div className="capitalize grid grid-cols-1 md:grid-cols-2 justify-between flex-1 gap-y-20 mt-10 md:mt-10 lg:mt-0">
          {
            data.map((item, idx) => (
              <div key={idx} className="text-center">
                <h2 className="text-5xl font-extrabold">{item.numbers}</h2>
                <p className="text-base mt-5 font-thin">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Banner