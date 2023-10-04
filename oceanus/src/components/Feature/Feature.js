import FeatureCard from "../Card/FeatureCard"

const Feature = () => {
    const features = [
        { icon: "/images/bag.png", bg: "/images/featurebg1.png" },
        { icon: "/images/seabottle.png", bg: "/images/featurebg2.png" },
        { icon: "/images/economy.png", bg: "/images/featurebg3.png" }
    ]
    return (
        <div className="mt-10 lg:mt-24 justify-center gap-10">
            <img className="absolute w-2/6 md:w-3/12  -mt-10 rotateImage -left-14 lg:-left-[30vw] md:-left-[15vw]" src="/images/circle.png" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  lg:pl-20">
                {
                    features.map((feature, idx) => (
                        <FeatureCard
                            icon={feature.icon}
                            bg={feature.bg}
                            key={idx}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Feature