import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from './googleSignIn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useFireStore } from '../hooks/useFireStore';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState();
  const { handleLoggin } = GoogleSignIn();

  const {
    useSetDoc,
    useAddDoc,
    useGetDocs,
    useGetDoc,
    useDelDoc,
    useUpdateDoc,
  } = useFireStore();

  const handleSetDoc = async () => {
    const res = await useSetDoc({
      collectionName: 'users',
      id: 'FTnsEiSXVLasH7LwqFFk',
      data: {
        displayName: 'SetDoc Sewt It',
      },
    });
    console.log(res);
  };

  const handleAddDoc = async () => {
    const res = await useAddDoc({
      collectionName: 'customers',

      data: {
        customerName:'faisal',
        cid:'22',
        paymentMethod:'card',
      },
    });
    console.log(res);
  };

  const handleGetDocs = async () => {
    const res = await useGetDocs({
      collectionName: 'users',
    });

    res.forEach((doc) => {
      console.log(doc.data());
    });
  };

  const handleGetDoc = async () => {
    const res = await useGetDoc({
      collectionName: 'users',
      id: '7zRzZn62vujcezbIrne5',
    });
    console.log(res);
  };

  const handleDelDoc = async () => {
    const res = await useDelDoc({
      collectionName: 'users',
    });
    console.log(res);
  };

  const handleUpdateDoc = async () => {
    const res = await useUpdateDoc({
      collectionName: 'users',
      id: '7zRzZn62vujcezbIrne5',
      data: {
        displayName: 'set new person',
        email: 'faisal@gmail.comxxxccc',
      },
    });
    console.log(res);
  };

  const logInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, pass);
      console.log(res);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return (
    <>
      <div className='text-center '>
        <button onClick={handleSetDoc}>set doc </button> <br />
        <button onClick={handleAddDoc}>add doc </button> <br />
        <button onClick={handleGetDocs}>get docs </button> <br />
        <button onClick={handleGetDoc}>get doc </button> <br />
        <button onClick={handleDelDoc}>delete doc </button> <br />
        <button onClick={handleUpdateDoc}>update doc </button>
      </div>

      <section className='flex flex-col min-h-screen md:flex-row '>
        <div className='flex items-center justify-center w-full px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12'>
          <div className='w-full '>
            <Link to="/" >
            <h2 className=' text-[32px] font-bold text-[#0652DD] '>Paysweet</h2> </Link>
            <h1 className='text-xl md:text-6xl font-bold leading-tight mt-[150px] '>
              Log in
            </h1>

            <form className='mt-6' onSubmit={logInWithEmailAndPassword}>
              <div>
                <label className='block text-gray-700'>Email Address</label>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='Enter Email Address'
                  className='w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none'
                  autoFocus=''
                  autoComplete=''
                  required=''
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mt-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  name=''
                  id=''
                  placeholder='Enter Password'
                  minLength={6}
                  className='w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none'
                  required=''
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className='mt-2 text-right'>
                <a
                  href='#'
                  className='text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700'
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type='submit'
                className='block w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:bg-indigo-400'
              >
                Log In
              </button>
            </form>
            <hr className='w-full my-6 border-gray-300' />
            <button
              onClick={handleLoggin}
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
                <span className='ml-4'>Log in with Google</span>
              </div>
            </button>
            <p className='mt-8'>
              Need an account?{' '}
              <Link
                to='/signup'
                className='font-semibold text-blue-500 hover:text-blue-700'
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
        <div className='bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-[50%] '>
          <img
            src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
      </section>
    </>
  );
};

export default Userlogin;
