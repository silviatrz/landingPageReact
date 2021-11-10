import React from "react";

//include images into your bundle
import london from "../../img/london.jpg";
import rome from "../../img/rome.jpg";
import paris from "../../img/paris.jpg";
import berlin from "../../img/berlin.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="card-group my-4 row-cols-3">
					<Card
						img={london}
						content="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque."
					/>
					<Card
						img={rome}
						content="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque. Explicabo
						magni sapiente, tempore debitis beatae culpa natus
						architecto."
					/>
					<Card
						img={paris}
						content="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque."
					/>
					<Card
						img={berlin}
						content="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque. Explicabo
						magni sapiente, tempore debitis beatae culpa natus
						architecto."
					/>
				</div>
			</div>
			<br />
			<Footer />
		</div>
	);
};

export default Home;
