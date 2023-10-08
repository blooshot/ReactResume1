import React from 'react'
import '../../styles/section/Fact.css'
import PureCounter from '@srexi/purecounterjs'

const Facts = () => {


  React.useEffect(() => {
    new PureCounter({
      selector: ".purecounter", // HTML query selector for spesific element
      start: 0,
      duration: 1,
      delay: 10 // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation

    };
  }, []);


  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
              <span data-purecounter-end="232" className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-end="521" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-end="1463" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span data-purecounter-end="25" className="purecounter"></span>
              <p>Awards</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Facts