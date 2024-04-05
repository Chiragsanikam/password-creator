import React, { useState } from 'react'

function NavBar(props) {
    const [search, setSearch]= useState("london")

    function handleOnChange(e){
        
        setSearch(e.target.value) //this will set the change to state whenever a key is tapped
    }

    function keyDown(e){
        if(e.key=="Enter"){
            if(search.length>0){
                props.setLocationProps(search) //this will set the location through props
                setSearch("")
            }
        }
    }

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-black">weather info <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
</svg>
</a>
  </div>
  <div className="flex-none gap-1">
    <div className="form-control">
    {/* //we need to track value of search and any change happens on search so we use value={} and onchange={} expects a function */}

      <input 
      value={search} 
      onKeyDown={keyDown}
      onChange={handleOnChange} 
      type="text" placeholder="Search a city" className=" mr-10 input input-bordered w-24 md:w-auto" />
    </div>
  </div>
</div>
  )
}

export default NavBar         