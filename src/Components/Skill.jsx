import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BiBook } from 'react-icons/bi'
import { Chart, LinearScale } from 'chart.js';
import { Background } from 'react-parallax';
Chart.register(LinearScale);

const Skill = () => {
    const data = {
        labels: ["Html and css", "psd to html", "javascript", "react", "tailwind"],
        datasets: [
            {
                label: "Skill",
                data: [80, 96, 99, 87, 90],
                backgroundColor : "yellow",
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };
    const options = {

        scales: {
            x: {
                type: 'category',
                position: 'bottom'
            },
            y: {
                type: 'linear',
                position: 'left'
            }
        }
    }
   
  return (
    <div className='bg-custom-dark text-white py-5'>
        <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center'>
            {/* education section */}
            <div className='w-full space-y-5 p-10 min-h-[600px] bg-slate-800 rounded-3xl'>
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
            <div className='w-full space-y-5 p-10 min-h-[600px] bg-slate-800 rounded-3xl'>
                {/* header */}
                <h1 className='text-4xl font-semibold text-yellow-500'>Skills</h1>
                <Bar data={data} options={options} />
            </div>
        </div>
    </div>
  )
}

export default Skill;

