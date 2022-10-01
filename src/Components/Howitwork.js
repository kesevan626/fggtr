import {GiEating, GiHotMeal} from "react-icons/gi";
import {BiFoodMenu} from "react-icons/bi";
import {GoRocket} from "react-icons/go";
import superman from "../Assets/Images/Superman.png"
import {useInView} from "react-intersection-observer";

const Howitwork = () => {
	
	const {ref: superRef, inView: superInView} = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	const {ref:foodRef, inView:foodInView} = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	const {ref:rocketRef, inView:rocketInView} = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	const {ref:hotRef, inView:hotInView} = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	const {ref:eatRef, inView:eatInView} = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})
	
	return (
		  <section className="work">
		  <div>
		    <span ref={superRef}>Fast Delivery <img src={superman} alt="fast delivery" className={superInView ? "superman animate_superman" : "superman"}/></span>
		    <h2>Meal plans make for your lifestyle</h2>
		    <p> Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem. Qui error adipisci rem rerum officia ut fuga molestias vel deleniti consectetur😋..</p>
		    </div>
		    <ul>
		      <li ref={foodRef}><BiFoodMenu className={foodInView ? "work_icon pop_up" : "work_icon"}/>Choose your meal</li>
		      <li ref={rocketRef}><GoRocket className={rocketInView ? "work_icon pop_up" : "work_icon"}/>We cook and deliver</li>
		      <li ref={hotRef}><GiHotMeal className={hotInView ? "work_icon pop_up" : "work_icon"}/>Hot and eat</li>
		      <li ref={eatRef}><GiEating className={eatInView ? "work_icon pop_up" : "work_icon"}/>Enjoy & Repeat</li>
		    </ul>
		  </section>
		)
}

export default Howitwork