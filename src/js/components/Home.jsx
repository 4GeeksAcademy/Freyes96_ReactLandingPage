import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />

			<div className="container my-5">
				<Jumbotron
					title="A Warm Welcome!"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					primaryLabel="Call to action!"
				/>

				<div className="row">
					<Card
						image="https://placehold.co/500x325"
						title="First Card"
						text="This is the first card content."
						link="#"
						buttonLabel="Go somewhere"
					/>
					<Card
						image="https://placehold.co/500x325"
						title="First Card"
						text="This is the first card content."
						link="#"
						buttonLabel="Go somewhere"
					/>
					<Card
						image="https://placehold.co/500x325"
						title="First Card"
						text="This is the first card content."
						link="#"
						buttonLabel="Go somewhere"
					/>
					<Card
						image="https://placehold.co/500x325"
						title="First Card"
						text="This is the first card content."
						link="#"
						buttonLabel="Go somewhere"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;