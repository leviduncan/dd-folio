

function ExperienceCard({ exp }) {
    return (
        <div className="flex flex-col sm:flex-row justify-between mb-10">
            <h3  className="text-start w-1/4 text-gray-500">{exp.date}</h3>
            <div className="flex flex-col justify-start text-start w-3/4">
                <h4 className="text-white">{exp.title} - {exp.company}</h4>
                <p className="text-gray-400">{exp.content}</p>
                <div className="flex flex-row justify-start pills gap-2 flex-wrap">
                        {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="">{tech.name}</span>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard