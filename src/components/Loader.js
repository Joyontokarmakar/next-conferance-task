import React from 'react'

const Loader = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <img src="/loader.gif" alt="" className={'w-44'}/>
            <h3>Loading Please Wait...</h3>
        </div>
    )
}
export default Loader;