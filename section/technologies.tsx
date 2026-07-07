import React from 'react'

const languages = [
    {value: "React.js"   
    },
    {value: "Next.js"   
    },
    {value: "TypeScript"   
    },
    {value: "JavaScript"   
    },
    {value: "Tailwind CSS"   
    },
    {value: "MongoDB"   
    },
    {value: "Prisma"   
    },
    {value: "Git"
    },
    {value: "Github"   
    },
    {value: "Vercel"   
    },
]

const technologies = () => {
    return (
        <>
        <div className="technologi flex flex-wrap justify-center gap-4 p-10  bg-gray-900 border-y-1 border-gray-700">
            {languages.map((lang, index) => (
                <div key={index} className="technology">
                    <p className="bg-gray-800 text-white rounded-3xl p-3 min-w-[100px] text-center hover:border hover:transition:1s ease-in-out">{lang.value}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default technologies
