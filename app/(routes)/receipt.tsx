import React from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const Reciept = () => {
  return (
    <>
      <div className='fixed top-0 z-50 w-full'>
        <header className='sticky-header headertop'>
          <div className='header-div1'>
            {/* <Link className='opacity-0' href={'/charging '}>
              <GoArrowLeft className='arrow' />
            </Link> */}
            <h1 className='header-div1-h1'>Session Receipt</h1>
            <img
              className='h-6 w-[10%]'
              src={'/images/image1.png'}
              alt='logo'
            />
          </div>
        </header>
        <div className='bg-blue padding-big2 sticky top-16 z-50 flex gap-[10px] rounded-b-2xl text-white'>
          {/* <p className='mt-1 text-base'>
            <IoLocationSharp />
          </p> */}
          <div className=''>
            <h2 className='text-base font-semibold'>
              Station ID - UZX67CH0943
            </h2>
            <p className='font-work-sans text-xs font-normal'>
              21 Avenue, Metropolitan Mall, Downtown, New York City
            </p>
          </div>
        </div>
      </div>

      <div className='mb-20 mt-[147px] flex min-h-screen flex-col items-center justify-center gap-4 px-8 py-4'>
        <div className='flex flex-col items-center gap-[10px]'>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#2196F3] text-white'>
            <img className='' src={'/images/Vector.png'} alt='logo' />
          </div>
          <h1 className='text-base font-normal'>Charging Complete!</h1>
          <p className='text-gray-600'>Session ID - 112038548</p>
        </div>
        <div className='w-full rounded-2xl'>
          <ul className='overflow-hidden rounded-2xl'>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Energy</p>
              <p>$8.30</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Idle Fee</p>
              <p>$0.99</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Session Fee</p>
              <p>$0.99</p>
            </li>
            <li className='padding4 flex justify-between bg-[#DADADA]'>
              <p className='font-semibold'>Total</p>
              <p>$14.18</p>
            </li>
          </ul>
        </div>

        <div className='text-s w-full space-y-1'>
          <p className='text-gray-400'>Transaction ID - 00112388950</p>
          <p className='text-gray-400'>Payment Details - AMEX 90033</p>
        </div>

        <div className='w-full rounded-2xl'>
          <ul className='overflow-hidden rounded-2xl'>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#DADADA] font-bold'>
              <p>Time slot - 2.00 PM - 6.00 PM</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Energy Delivered</p>
              <p>3 kW</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Start Time</p>
              <p>2.30 PM</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>End Time</p>
              <p>5.30 PM</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Duration</p>
              <p>3.00.00</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Price</p>
              <p>$0.44 kWh</p>
            </li>
            <li className='padding4 flex justify-between bg-[#DADADA]'>
              <p className='font-semibold'>Energy Cost</p>
              <p>$3.42</p>
            </li>
          </ul>
        </div>
        <div className='w-full rounded-2xl'>
          <ul className='overflow-hidden rounded-2xl'>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#DADADA] font-bold'>
              <p>Time slot - 6.00 PM - 10.00 PM</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Start Time</p>
              <p>6.00 PM</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>End Time</p>
              <p>6.45 PM</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Duration</p>
              <p>0.45.00</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Energy Delivered</p>
              <p>1 kW</p>
            </li>
            <li className='padding4 flex justify-between border-b border-[#DADADA] bg-[#F0F0F0]'>
              <p>Price</p>
              <p>$0.44 kWh</p>
            </li>
            <li className='padding4 flex justify-between bg-[#DADADA]'>
              <p className='font-semibold'>Energy Cost</p>
              <p>$0.44</p>
            </li>
          </ul>
        </div>
        <p className='text-lg font-medium leading-5'>
          Your receipt has been sent to clark.kent@gmail.com.
        </p>
      </div>
      <div className='btn-text padding-big2 fixed bottom-0 w-full border-t border-[#F5F5F5] bg-white p-2'>
        <button className='h-[43px] w-[85%] rounded-s bg-blue-600 p-2 text-xl text-white'>
          Close
        </button>
      </div>
    </>
  );
};

export default Reciept;
