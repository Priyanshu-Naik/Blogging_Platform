import { useContext, useState } from 'react';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const loginInitialValues = {
  username: '',
  password: ''
}

const signupInitialValues = {
  name: '',
  username: '',
  password: ''
}

export default function LoginForm({ isUserAuthenticated }) {
  const [Register, toggeleRegister] = useState('login');
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState('');

  const { setAccount } = useContext(DataContext);

  const navigate = useNavigate();

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const signupUser = async () => {
    console.log("Sending signup request with:", signup);  // 🔍
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError('');
      setSignup(signupInitialValues);
      toggeleRegister('login');
    } else {
      console.error('Caught signup error:', error);
      setError('Something went wrong! Please try again');
    }
  }

  const toggleSignup = (e) => {
    Register === 'signup' ? toggeleRegister('login') : toggeleRegister('signup')
  }

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError('');
      sessionStorage.setItem('accesstoken', `Bearer ${response.data.accesstoken}`);
      sessionStorage.setItem('refreshtoken', `Bearer ${response.data.refreshtoken}`);

      const user = {
        username: response.data.username,
        name: response.data.name,
        _id: response.data._id  
      };

      localStorage.setItem('user', JSON.stringify(user)); 

      setAccount(user);
      isUserAuthenticated(true);
      navigate('/');
    } else {
      setError('Something went wrong! Please try again');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {
        Register === 'login' ?
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-center text-gray-700">Login to Your Account</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-600">Username</label>
                <input
                  type="username"
                  required
                  value={login.username}
                  onChange={(e) => onValueChange(e)}
                  name='username'
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  required
                  value={login.password}
                  onChange={(e) => onValueChange(e)}
                  name='password'
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              {error && (
                <div
                  className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                  role="alert"
                >
                  <svg
                    className="shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Error</span>
                  <div>
                    <span className="font-medium">Error:</span> {error}
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  loginUser()
                }}
              >
                Login
              </button>
            </form>
            <p className="text-sm text-center text-gray-500">
              Not registered?{' '}
              <button
                onClick={() => toggleSignup()}
                className="text-blue-600 hover:underline"
              >
                Register here
              </button>
            </p>
          </div>
          :
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-center text-gray-700">Login to Your Account</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-600">Name</label>
                <input
                  type="name"
                  required
                  name='name'
                  onChange={(e) => onInputChange(e)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Username</label>
                <input
                  type="username"
                  required
                  name='username'
                  onChange={(e) => onInputChange(e)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Password</label>
                <input
                  type="password"
                  required
                  name='password'
                  onChange={(e) => onInputChange(e)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  signupUser();
                }}
              >
                SignUp
              </button>
            </form>
            <p className='text-center text-sm'>
              <button
                onClick={() => toggleSignup()}
                className="text-blue-600 hover:underline"
              >
                Already Registered
              </button>
            </p>
          </div>
      }
    </div>
  );
}