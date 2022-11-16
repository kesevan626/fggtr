import {MdFastfood} from "react-icons/md";
import guy from "../Assets/Images/delivery_guy.png"
import {useInView} from "react-intersection-observer";

const Main = () => {
	
  const {ref: introRef, inView: introInview} = useInView({
	  	threshold: 0.5,
		  triggerOnce: true
   	});
  const {ref: imgRef, inView: imgInview} = useInView({
	  	threshold: 0.5,
		  triggerOnce: true
   	});
	
	return (
		  <section id="Home" className="headline" ref={introRef}>
		    <div className={introInview ? "headline_intro intro_show" : "headline_intro"}>
		      <h1>Enjoy <span>healthy</span> and <span>delicious</span> Meal</h1>
		      <p>Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt pexercitationem. Qui error adipisci rem rerum officia ut fuga molestias vel deleniti consectetur. </p>
		      <button>
		       <a href="#Products"> <span>Explore menu</span><MdFastfood className="bike"/></a>
		      </button>
		    </div>
		    <div className="headline_img" ref={imgRef}>
		      <img src={guy} className={imgInview ? "app app_show" : "app"} alt="delivery_guy"/>
		    </div>
		  </section>
		)
}

export default Main