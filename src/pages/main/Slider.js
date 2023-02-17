import React from 'react';
import './Slider.scss';

function Slider({ sliders, slideRef, count, handleSlider }) {
  function getParametersForUnsplash({ width, height, quality, format }) {
    return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
  }

  return (
    <>
      <div ref={slideRef} className="main-slider-wrap">
        {sliders.map(slider => (
          <div
            key={slider.id}
            className={`${'main-slider-box'} ${
              slider.id === count ? 'active' : ''
            }`}
          >
            <div className="main-slicer-thumb">
              <img
                src={
                  slider.src +
                  getParametersForUnsplash({
                    width: 50,
                    height: 50,
                    quality: 80,
                    format: 'jpg',
                  })
                }
                alt={slider.alt}
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="main-pagination">
        {sliders.map(btn => (
          <button
            type="button"
            key={btn.id}
            onClick={() => test(btn.id)}
            className={`${'btn'} ${btn.id === count ? 'active' : ''}`}
          >
            {btn.text}
          </button>
        ))}
      </div> */}
    </>
  );
}

export default Slider;
