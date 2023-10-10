import React from 'react'
const Slider = () => {
   let box = document.querySelector('.product-container');

   const btnpressprev = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width)
   }

   const btnpressnext = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width)
   }
   return (
      <div className="product-carousel">
         <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
         <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


         <div className="product-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>


         </div>
      </div>
   )
}

export default Slider;


function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={className}
         style={{ ...style, display: "block", background: "red" }}
         onClick={onClick}
      />
   );
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
      <div
         className={className}
         style={{ ...style, display: "block", background: "green" }}
         onClick={onClick}
      />
   );
}

var settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   nextArrow: <SampleNextArrow />,
   previousArrow: <SamplePrevArrow />
};
return (
   <Slider {...settings}>
      <div>
         <h3>1</h3>
      </div>
      <div>
         <h3>2</h3>
      </div>
      <div>
         <h3>3</h3>
      </div>
      <div>
         <h3>4</h3>
      </div>
      <div>
         <h3>5</h3>
      </div>
      <div>
         <h3>6</h3>
      </div>
   </Slider>
);