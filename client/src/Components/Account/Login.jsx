import { useContext, useState } from 'react';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const loginInitialValues = {
  username: '',
  password: ''
};

const signupInitialValues = {
  name: '',
  username: '',
  password: ''
};

export default function LoginForm({ isUserAuthenticated }) {
  const [Register, toggleRegister] = useState('login');
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState('');

  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const onInputChange = (e) => setSignup({ ...signup, [e.target.name]: e.target.value });
  const onValueChange = (e) => setLogin({ ...login, [e.target.name]: e.target.value });

  const signupUser = async () => {
    const response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError('');
      setSignup(signupInitialValues);
      toggleRegister('login');
    } else {
      setError('Something went wrong! Please try again');
    }
  };

  const loginUser = async () => {
    const response = await API.userLogin(login);
    if (response.isSuccess) {
      setError('');
      sessionStorage.setItem('accesstoken', `Bearer ${response.data.accesstoken}`);
      sessionStorage.setItem('refreshtoken', `Bearer ${response.data.refreshtoken}`);
      const user = {
        username: response.data.username,
        name: response.data.name,
        _id: response.data._id,
      };
      localStorage.setItem('user', JSON.stringify(user));
      setAccount(user);
      isUserAuthenticated(true);
      navigate('/');
    } else {
      setError('Something went wrong! Please try again');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-4 md:mx-auto bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome to BlogNest
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {Register === 'login' ? 'Log in to continue writing and sharing.' : 'Join our community and start blogging!'}
        </p>

        {Register === 'login' ? (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-700">Username</label>
              <input
                type="text"
                required
                value={login.username}
                onChange={onValueChange}
                name="username"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Password</label>
              <input
                type="password"
                required
                value={login.password}
                onChange={onValueChange}
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-100 p-2 rounded">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
              onClick={(e) => {
                e.preventDefault();
                loginUser();
              }}
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-500">
              Not registered?{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={toggleRegister}
              >
                Register here
              </button>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                onChange={onInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                onChange={onInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                onChange={onInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {error && (
              <div className="text-sm text-red-600 bg-red-100 p-2 rounded">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
              onClick={(e) => {
                e.preventDefault();
                signupUser();
              }}
            >
              Sign Up
            </button>
            <p className="text-sm text-center text-gray-500">
              Already registered?{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={toggleRegister}
              >
                Login here
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}