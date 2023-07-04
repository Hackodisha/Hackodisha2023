import React from 'react'


const Statistics = () => {
  return (
    // <div className="container" >
    // <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-12' style={{display: "flex" , flexDirection:"row", justifyContent:'center',gap:"5rem"}}>
    //   <div className='card m-3 mt-3 shadow p-3 mb-5 bg-white rounded' style={{border:"2px solid Red" , width: "18rem", height: "300px"}}>
    //     <div className="card-body text-dark">hello1</div>
    //   </div>
    //   <div className='card m-3 mt-3 shadow p-3 mb-5 bg-white rounded' style={{border:"2px solid Red" , width: "18rem", height: "300px" }}>
    //     <div className="card-body text-dark">hello2</div>
    //   </div>
    //   <div className='card m-3 mt-3 shadow p-3 mb-5 bg-white rounded' style={{border:"2px solid Red" , width: "18rem", height: "300px"}}>
    //     <div className="card-body text-dark">hello3</div>
    //   </div>
    // </div> 
    // <div className='col-12 col-md-6 col-lg-3' style={{display: "flex" , flexDirection:"row",justifyContent:'center',gap:"5rem"}} > 
    //   <div className='card m-3 mt-3 shadow p-3 mb-5 bg-white rounded' style={{border:"2px solid Red" , width: "18rem", height: "300px"}}>
    //     <div className="card-body text-dark">hello4</div>
    //   </div>
    //   <div className='card m-3 mt-3 shadow p-3 mb-5 bg-white rounded' style={{border:"2px solid Red"  , width: "18rem", height: "300px"}}>
    //     <div className="card-body text-dark">hello5</div>
    //   </div>
    //   <div className='card m-3 mt-3 shadow p-3 mb-5 bg-white rounded' style={{border:"2px solid Red" , width: "18rem", height: "300px" }}>
    //     <div className="card-body text-dark">hello6</div>
    //   </div>

    // </div>
    // </div>

    <div className="container p-5" style={{color:"green"}}>
      <div className="text-dark lg:text-[20px] md:text-[18px] font-semibold " >
        <h1 className="mx-16 py-10 mb-3 text-4xl font-normal">Hackodisha 3.0 Statistics</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5" style={{gap:"3rem"}}>
          <div className="card m-4 mt-3 shadow-lg p-3 mb-5 bg-white rounded flex flex-col items-center" style={{background:"radial-gradient(circle, rgba(237,208,221,1) 0%, rgba(198,217,240,1) 100%)"}}>
            <img src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650744/user_gvypf7.png" alt="participants" width="70px" />
            <h3 className="mt-6">1600+</h3>
            <p className="mb-6 md:mb-8">Registrations</p>
          </div>
          <div className="card m-4 mt-3 shadow-lg p-3 mb-5  rounded flex flex-col items-center" style={{background:"radial-gradient(circle, rgba(237,208,221,1) 0%, rgba(198,217,240,1) 100%)"}}>
            <img src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650820/college_nnemrn.png" alt="Institutions" width="70px" />
            <h3 className="mt-6">20+</h3>
            <p className="mb-6 md:mb-8">Institutions</p>
          </div>
          <div className="card m-4 mt-3 shadow-lg p-3 mb-5  rounded flex flex-col items-center" style={{background:"radial-gradient(circle, rgba(237,208,221,1) 0%, rgba(198,217,240,1) 100%)"}}>
            <img src="https://res.cloudinary.com/dzbax077h/image/upload/v1657650980/sponsor_c9qjhd.png" alt="Sponsors" width="70px" />
            <h3 className="mt-2">50+</h3>
            <p className="mb-6 md:mb-8">Sponsors</p>
          </div>
          <div className="card m-4 mt-3 shadow-lg p-3 mb-5  rounded flex flex-col items-center" style={{background:"radial-gradient(circle, rgba(237,208,221,1) 0%, rgba(198,217,240,1) 100%)"}}>
            <img src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651549/community_nlklrw.png" alt="Community Members" width="70px" />
            <h3 className="mt-6">30+</h3>
            <p className="mb-6 md:mb-8">Communities</p>
          </div>
          <div className="card m-4 mt-3 shadow-lg p-3 mb-5  rounded flex flex-col items-center " style={{background:"radial-gradient(circle, rgba(237,208,221,1) 0%, rgba(198,217,240,1) 100%)"}}>
            <img src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651614/seminar_fyw01m.png" alt="Seminars" width="70px" />
            <h3 className="mt-6">10+</h3>
            <p className="mb-6 md:mb-8">Seminars</p>
          </div>
          <div className="card m-4 mt-3 shadow-lg p-3 mb-5  rounded flex flex-col items-center" style={{background:"radial-gradient(circle, rgba(237,208,221,1) 0%, rgba(198,217,240,1) 100%)"}}>
            <img src="https://res.cloudinary.com/dzbax077h/image/upload/v1657651663/network_l2chpg.png" alt="Network" width="80px" />
            <h3 className="mt-6">10+</h3>
            <p className="mb-6 md:mb-8">Partners</p>
            
          </div>
        </div>
        <div className="flex justify-end mr-16 py-8">
          <a href="https://deploy-preview-78--hackodisha2022.netlify.app/" rel="noreferrer" target="_blank">
            <i className="text-2xl">
              <u>Go to HackOdisha 2.0&gt;</u>
            </i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Statistics