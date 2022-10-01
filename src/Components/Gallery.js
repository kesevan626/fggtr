import bread_01 from "../Assets/Images/Gallery_bread1.jpg";
import bread_02 from "../Assets/Images/Gallery_bread2.jpg";
import burger_01 from "../Assets/Images/Gallery_burger1.jpg";
import burger_02 from "../Assets/Images/Gallery_burger2.jpg";
import salad_01 from "../Assets/Images/Gallery_salad1.jpg";
import salad_02 from "../Assets/Images/Gallery_salad4.jpg";
import pizza_01 from "../Assets/Images/Gallery_pizza3.jpg";
import pizza_02 from "../Assets/Images/Gallery_bread3.jpg";
import banner_01 from "../Assets/Images/Banner1.jpg";
import banner_02 from "../Assets/Images/Banner2.jpg";

import React, {useState} from "react";
import {useInView} from "react-intersection-observer";


const Gallery = () => {
	
  const {ref: img1Ref, inView: img1Inview} = useInView({
	  	threshold: 0.5,
		  triggerOnce: true
   	});
  const {ref: img2Ref, inView: img2Inview} = useInView({
	  	threshold: 0.5,
		  triggerOnce: true
   	});
  const {ref: img3Ref, inView: img3Inview} = useInView({
	  	threshold: 0.5,
		  triggerOnce: true
   	});
  const {ref: img4Ref, inView: img4Inview} = useInView({
	  	threshold: 0.5,
		  triggerOnce: true
   	});
  const {ref: banner1Ref, inView: banner1Inview} = useInView({
	  	threshold: 0.2,
		  triggerOnce: true
   	});
  const {ref: banner2Ref, inView: banner2Inview} = useInView({
	  	threshold: 0.2,
		  triggerOnce: true
   	})
   	
	
	const [readMore, setReadMore] = useState(false);
	const [learnMore, setLearnMore] = useState(false);
	
	const info = "Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt";
	
	return (
		  <section id="Gallery" className="gallery">
		    <div className="events">
		      <div ref={banner1Ref}>
		      <div className={banner1Inview ? "card card_slide" : "card"}>
		        <div className="card_img">
		          <img src={banner_01} alt={banner_01}/>
		        </div>
		        <div className="card_infos">
		          <span>By John Doe • Jan 08, 2022</span>
		          <h4>What it feels like eating with your friend</h4>
		          <p>{readMore && info}</p>
		          <h5 onClick={() => setReadMore(!readMore)}>{readMore ? "Show less" : "Learn more"}</h5>
		        </div>
		      </div>
		      </div>
		      <div ref={banner2Ref}>
		      <div className={banner2Inview ? "card card_slide" : "card"}>
		        <div className="card_img">
		          <img src={banner_02} alt={banner_02}/>
		        </div>
		        <div className="card_infos">
		          <span>By Jacob Joshua • Apr 16, 2022</span>
		          <h4>What it feels like eating with your friend</h4>
		          <p>{learnMore && info}</p>
		          <h5 onClick={() => setLearnMore(!learnMore)}>{learnMore ? "Show less" : "Learn more"}</h5>
		        </div>
		      </div>
		      </div>
		    </div>
		     <div className="gallery_grid">
		       <div ref={img1Ref}>
		       <div className={img1Inview ? "gallery_img img_slideup" : "gallery_img"}>
		         <img src={bread_02} alt={bread_02}/>
		         <img src={burger_01} alt={burger_01}/>
		       </div>
		       </div>
		       <div ref={img2Ref}>
		       <div className={img2Inview ? "gallery_img img_slideup" : "gallery_img"}>
		         <img src={salad_01} alt={salad_01}/>
		         <img src={pizza_01} alt={pizza_01}/>
		       </div>
		       </div>
		       <div ref={img3Ref}>
		       <div className={img3Inview ? "gallery_img img_slideup" : "gallery_img"}>
		         <img src={bread_01} alt={bread_01}/>
		         <img src={salad_02} alt={salad_02}/>
		       </div>
		       </div>
		       <div ref={img4Ref}>
		       <div className={img4Inview ? "gallery_img img_slideup" : "gallery_img"}>
		         <img src={burger_02} alt={burger_02}/>
		         <img src={pizza_02} alt={pizza_02}/>
		       </div>
		       </div>
		     </div>
		  </section>
		)
}

export default Gallery;