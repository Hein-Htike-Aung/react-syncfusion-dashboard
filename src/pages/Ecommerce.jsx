import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import Pie from '../components/Charts/Pie';
import LineChart from '../components/Charts/LineChart';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';
import Button from '../components/Button';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {

  const { currentColor, currentMode } = useStateContext();

  return <div className="mt-14">
    <div className="flex flex-wrap lg:flex-nowrap justify-center ">

      {/* header section */}

      <div className="bg-white dark:text-gray-600 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-[url('https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center">
          <div>
            <p className='font-bold text-gray-400'>Earnings</p>
            <p className='text-2xl '>$32,232</p>
          </div>
        </div>
        <div className="mt-6">
          <Button color='white'
            bgColor={currentColor}
            text='Download'
            borderRadius='10px'
            size='md' />
        </div>
      </div>

      {/* Cards */}
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {earningData.map((item => (
          <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
            <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
            >
              {item.icon}
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
          </div>
        )))}
      </div>
    </div>

    {/*  */}
    <div className="flex gap-10 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780 p-4">
        <div className='flex justify-between'>
          <p className='font-semibold text-xl'>
            Revenue Updates
          </p>
          <div className="flex items-center gap-4">
            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
              <span>
                <BsCurrencyDollar />
              </span>
              <span>Expense</span>
            </p>
            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
              <span>
                <BsCurrencyDollar />
              </span>
              <span>Budget</span>
            </p>
          </div>
        </div>
        {/* Charts */}
        <div className="mt-10 flex gap-10 flex-wrap  justify-center">
          {/* Left */}
          <div className="border-r-1 border-color m-4 pr-10">
            <div>
              <p>
                <span className='text-3xl font-semibold'>$223,233</span>
                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 text-xs ml-3'>32%</span>
              </p>
              <p className='text-gray-500 mt-1'>Budget</p>
            </div>
            <div className='mt-8'>
              <p>
                <span className='text-3xl font-semibold'>$223</span>
              </p>
              <p className='text-gray-500 mt-1'>Expense</p>
            </div>

            <div className="mt-5">
              <SparkLine
                currentColor={currentColor}
                id='line-sparkling'
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor}
              />
            </div>
            <div className="mt-10">
              <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px' />
            </div>
          </div>
          {/* right */}
          <div>
            <Stacked width='320px' height='360px' />
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Ecommerce;
