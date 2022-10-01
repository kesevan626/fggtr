import {GiFullPizza, GiDeliveryDrone, GiHotMeal} from "react-icons/gi";
import {useInView} from "react-intersection-observer"


const Service = () => {
	
	const {ref: hotRef, inView: hotInview} = useInView({
		threshold: 0.5,
		triggerOnce: true
	});
	const {ref: fullRef, inView: fullInview} = useInView({
		threshold: 0.5,
		triggerOnce: true
	});
	const {ref: fastRef, inView: fastInview} = useInView({
		threshold: 0.5,
		triggerOnce: true
	});
	
	return (
		  <section id="Service" className="service">
		    <div className="service_list">
		      <div ref={hotRef}><GiHotMeal className={hotInview ? "service_icon icon_showup" : "service_icon"}/></div>
		      <h4>Quality Food</h4>
		      <p>Et iste dolorem ab perferendis voluptas aut enim necessitatibus et enim esse sunt</p>
		    </div>
		    <div className="service_list">
		      <div ref={fullRef}><GiFullPizza className={fullInview ? "service_icon icon_showup" : "service_icon"}/></div>
		      <h4>Super Tasty</h4>
		      <p>Et iste dolorem ab perferendis voluptas aut enim necessitatibus esseesse sunt</p>
		    </div>
		    <div className="service_list">
		      <div ref={fastRef}><GiDeliveryDrone className={fastInview ? "service_icon icon_showup" : "service_icon"}/></div>
		      <h4>Fast Delivery</h4>
		      <p>Et iste dolorem ab perferendis voluptas necessitatibus et enim non esse sunt</p>
		    </div>
		  </section>
		)
}

export default Service