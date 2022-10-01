import pizza_01 from "../Assets/Images/Pizza1.png";
import pizza_02 from "../Assets/Images/Pizza2.png";
import pizza_03 from "../Assets/Images/Pizza3.png";

import salad_01 from "../Assets/Images/Salad1.png";
import salad_02 from "../Assets/Images/Salad2.png";

import burger_01 from "../Assets/Images/Burger1.png";
import burger_02 from "../Assets/Images/Burger2.png";
import burger_03 from "../Assets/Images/Burger3.png";
import burger_04 from "../Assets/Images/Burger4.png";

import bread_01 from "../Assets/Images/Bread1.png";
import bread_02 from "../Assets/Images/Bread2.png";
import bread_03 from "../Assets/Images/Bread3.png";
import bread_04 from "../Assets/Images/Bread4.png";

import {GiFullPizza,GiSlicedBread,GiHamburger} from "react-icons/gi";
import {IoIosLeaf} from "react-icons/io";
import {AiOutlineClockCircle} from "react-icons/ai";

const Data = [
	{
		id:"001",
		img:pizza_01,
		title:"Vegetable Pizza",
		category:"Pizza",
		price:3000,
		category_icon:<GiFullPizza/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"25 - 30min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"002",
		img:salad_01,
		title:"Normal Salad",
		category:"Salad",
		price:800,
		category_icon:<IoIosLeaf/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"2 - 5min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"003",
		img:burger_01,
		title:"Chicken Burger",
		category:"Burger",
		price:1500,
		category_icon:<GiHamburger/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"30 - 35min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"004",
		img:bread_01,
		title:"Sliced Bread",
		category:"Bread",
		price:700,
		category_icon:<GiSlicedBread/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"45 - 50min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"005",
		img:pizza_03,
		title:"Sausage Pizza",
		category:"Pizza",
		price:3200,
		category_icon:<GiFullPizza/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"30 - 35min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"006",
		img:burger_03,
		title:"Bacon Burger",
		category:"Burger",
		price:3000,
		category_icon:<GiHamburger/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"24 - 30min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"007",
		img:bread_03,
		title:"Unsliced Bread",
		category:"Bread",
		price:700,
		category_icon:<GiSlicedBread/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"45 - 50min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"008",
		img:burger_02,
		title:"Beef Burger",
		category:"Burger",
		price:1200,
		category_icon:<GiHamburger/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"15 - 20min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"009",
		img:pizza_02,
		title:"Normal Pizza",
		category:"Pizza",
		price:3000,
		category_icon:<GiFullPizza/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"35 - 40min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"010",
		img:salad_02,
		title:"Special Salad",
		category:"Salad",
		price:1000,
		category_icon:<IoIosLeaf/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"10 - 15min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"011",
		img:bread_04,
		title:"Crunchy Bread",
		category:"Bread",
		price:800,
		category_icon:<GiSlicedBread/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"50 - 55min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"012",
		img:burger_04,
		title:"Cheese Burger",
		category:"Burger",
		price:1500,
		category_icon:<GiHamburger/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"20 - 25min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	},
	{
		id:"013",
		img:bread_02,
		title:"Crotchet Bread",
		category:"Bread",
		price:1200,
		category_icon:<GiSlicedBread/>,
		time_icon:<AiOutlineClockCircle/>,
		time:"50 - 55min",
		desc:"Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque 33 sint magnam est culpa exercitationem et blanditiis architecto. Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. Aut commodi eius quo voluptate galisum non similique dolore est velit iste. Et iusto dolorem et impedit facilis ex nobis enim et sunt possimus et pariatur cupiditate At error exercitationem."
	}
	]
	
	export default Data;