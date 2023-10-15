import React from 'react'


export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = false;
  document.body.appendChild(script);
}

const Bhasad = () => {
  return (
    <>
      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      {/* <script src="/js/purecounter_vanilla.js"></script>
      <script src="/js/aos.js"></script>
      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/glightbox.min.js"></script>
      <script src="/js/isotope.pkgd.min.js"></script>
      <script src="/js/swiper-bundle.min.js"></script>
      <script src="/js/typed.min.js"></script>
      <script src="/js/noframework.waypoints.js"></script>
      <script src="/js/main.js"></script> */}
      {/* {AddLibrary('/js/purecounter_vanilla.js')} */}
      {AddLibrary('/js/aos.js')}
      {AddLibrary('/js/bootstrap.bundle.min.js')}
      {AddLibrary('/js/glightbox.min.js')}
      {AddLibrary('/js/isotope.pkgd.min.js')}
      {/* AddLibrary('/js/swiper-bundle.min.js') */}
      {/* {AddLibrary('/js/typed.min.js')} */}
      {/* {AddLibrary('/js/noframework.waypoints.js')} */}
      

      {AddLibrary('/js/main.js')}


    </>
  )
}

export default Bhasad
