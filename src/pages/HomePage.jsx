import React from 'react'
import Header from "../components/header.jsx"
import List from '../components/list.jsx'

const HomePage = () => {
  return (
    <div className="pt-16">
    <Header />
    <List className="mt-10" />
    <section>
        This is the content
    </section>
    </div>
  )
}

export default HomePage
