import React from "react";

// Components
import TertiaryButton from "../Buttons/TertiaryButton";

function Home() {
	return (
		<div className="home">
			<h1>Home Page</h1>

			<div class="gradient-zig-zag">
				<button className="button-primary">Button</button>
				<a href="/somehe" className="button-secondary">
					Link
				</a>
				<TertiaryButton disabled href="/tertiarybtn">
					Button text here
				</TertiaryButton>
			</div>
		</div>
	);
}

export default Home;
