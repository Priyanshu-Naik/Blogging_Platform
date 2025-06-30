import React from 'react'
import Banner from '../Banner/Banner'
import Jumbotron from './Jumbotron'
import Category from './Category'
import Posts from './post/Posts'

export default function Home() {
  return (
    <>
        <Banner/>
        <Category/>
        <Jumbotron/>
        <Posts/>
    </>
  )
}
