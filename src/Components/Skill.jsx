import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BiBook } from 'react-icons/bi'

const Skill = () => {
    const data = {
        labels: ["skill"],
        datasets: [
            {
                label: "java",
                data: [23]
            }
        ]
    }
    const options = {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      };
  return (
    <div className='bg-custom-dark text-white py-5'>
        <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center'>
            {/* education section */}
            <div className='w-full space-y-5 p-10 min-h-[400px] bg-slate-800 rounded-3xl'>
                <h1 className='text-4xl font-semibold text-yellow-500'>Education</h1>
                <div className=''>
                    <BiBook className='text-4xl text-yellow-500 '/>
                    <p className='text-xl'>2020-present</p>
                    <h1 className='text-4xl font-bold'>B.A in Philosophy</h1>
                </div>
                <div>
                    <BiBook className='text-4xl text-yellow-500 '/>
                    <p className='text-xl'>2020</p>
                    <h1 className='text-4xl font-bold'>Higher Secondery School Certificate</h1>
                </div>
                <div>
                    <BiBook className='text-4xl text-yellow-500 '/>
                    <p className='text-xl'>2018</p>
                    <h1 className='text-4xl font-bold'>Sinior Secondery School Certificate</h1>
                </div>
            </div>
            {/* skill section */}
            <div className='w-full space-y-5 p-10 min-h-[400px] bg-slate-800 rounded-3xl'>
                <Bar data={data} options={options}/>
            </div>
        </div>
    </div>
  )
}

export default Skill;

