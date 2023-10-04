const FeatureCard = ({ icon, bg }) => {
    return (
        <div className={`relative overflow-hidden rounded-xl shadow-xl p-10`}>
            <div className="text-center">
                <img src={icon} className="mx-auto"/>
                <p className="mt-5">We aim to create 5000 jobs for women in low-income areas, providing a means of livelihood beyond minimum wage.</p>
                <img className="absolute top-0 right-0 left-0 bottom-0 w-full h-full  object-cover object-center -z-10" src={bg} />
            </div>
        </div>
    )
}

export default FeatureCard