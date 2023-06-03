import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';

const UserSignUp = () => {
  const { useUserSignUp, handleUserInfo, userInfo, handleConfirmPass, isDisabled } = useAuthentication();
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if(handleConfirmPass() == true){
      useUserSignUp();
    }
    else{
      alert("pass was not match")
    }
    
    
  };

  return (
    <>
      <section className='flex flex-col md:flex-row '>
        <div className='flex items-center justify-center w-full px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12'>
          <div className='w-full '>
            <Link to="/" > 
            <h2 className=' text-[32px] font-bold text-[#0652DD] '>Paysweet</h2> </Link>
            <h1 className='text-xl md:text-[56px] font-bold leading-tight mt-[150px] '>
              Sign up
            </h1>
            <h4 className=' text-[18px] mt-[20px] '>
              Continue with your email or sign up using an existing account such
              as Google.{' '}
            </h4>

            <form className='mt-6' action='#' method='POST'  onSubmit={onSubmit} >
            <div>
                <label className='block text-gray-700'>Full Name</label>
                <input
                  type='text'
                  
                  name='displayName'
                  onChange={handleUserInfo}
                  required
                  placeholder='Enter Full Name'
                  className='w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none'
                  autoFocus=''
                  autoComplete=''
                />
              </div>
              
              <div>
                <label className='block text-gray-700'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  onChange={handleUserInfo}
                  required
                  placeholder='Enter Email Address'
                  className='w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none'
                  autoFocus=''
                  autoComplete=''
                />
              </div>
              <div className='mt-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={handleUserInfo}
                  required
                  placeholder='Enter Password'
                  minLength={6}
                  className='w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none'
                />
              </div>

              <div className='mt-4'>
                <label className='block text-gray-700'> Confirm Password</label>
                <input
                  type='password'
                  name='confirmPassword'
                  onChange={handleUserInfo}
                  required
                  placeholder='Confirm Password'
                  minLength={6}
                  className='w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none'
                />
              </div>

              <button
                type='submit'
                disabled={isDisabled}
                className='block w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-500 rounded-lg '
              >
                Sign Up
              </button>
            </form>
            <hr className='w-full my-6 border-gray-300' />
            <button
              type='button'
              
              className='block w-full px-4 py-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:bg-gray-100'
            >
              <div className='flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  className='w-6 h-6'
                  viewBox='0 0 48 48'
                >
                  <defs>
                    <path
                      id='a'
                      d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'
                    />
                  </defs>
                  <clipPath id='b'>
                    <use xlinkHref='#a' overflow='visible' />
                  </clipPath>
                  <path clipPath='url(#b)' fill='#FBBC05' d='M0 37V11l17 13z' />
                  <path
                    clipPath='url(#b)'
                    fill='#EA4335'
                    d='M0 11l17 13 7-6.1L48 14V0H0z'
                  />
                  <path
                    clipPath='url(#b)'
                    fill='#34A853'
                    d='M0 37l30-23 7.9 1L48 0v48H0z'
                  />
                  <path
                    clipPath='url(#b)'
                    fill='#4285F4'
                    d='M48 48L17 24l-4-3 35-10z'
                  />
                </svg>
                <span className='ml-4'>Sign Up with Google</span>
              </div>
            </button>
            <p className='mt-8'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='font-semibold text-blue-500 hover:text-blue-700'
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className='bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-[50%] '>
          <img
            src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            className='w-full h-[100%]  object-cover'
          />
        </div>
      </section>
    </>
  );
};

export default UserSignUp;
