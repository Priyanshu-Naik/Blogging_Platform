import { useState } from 'react'
import { DataProvider } from './context/DataProvider'

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Login from './Components/Account/Login'

import Header from './Components/Header/Header'

import CreatePost from './Components/Create/CreatePost'
import MoreBlogs from './Components/Home/post/MoreBlogs'
import CategoryPosts from './Components/Home/post/CategoryPosts'
import BlogDetails from './Components/Home/post/BlogDetails'
import EditPost from './Components/Home/post/EditPost'

import Home from './Components/Home/Home'
import About from './Components/Home/About'
import Services from './Components/Home/Services'
import Contact from './Components/Home/Contact'

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/services' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/services' element={<Services />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/contact' element={<Contact />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/more-blogs' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/more-blogs' element={<MoreBlogs/>} />
            </Route>

            <Route path="/category/:category" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/category/:category" element={<CategoryPosts/>} />
            </Route>

            <Route path="/post/:idSlug" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/post/:idSlug" element={<BlogDetails/>} />
            </Route>

            <Route path="/edit/:id" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/edit/:id" element={<EditPost/>} />
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App