import React from "react";

// Components
import Button from "../Button";

function Home() {
	return (
		<div className="home">
			<h1>Home Page</h1>

			<div class="gradient-zig-zag">
				<Button btnClass="button-primary">Primary</Button>
				<Button btnClass="button-primary" disabled>
					Primary disabled
				</Button>
				<Button btnClass="button-secondary">Secondary</Button>
				<Button btnClass="button-secondary" disabled>
					Secondary disabled
				</Button>
				<Button btnClass="button-tertiary">Tertiary</Button>
				<Button btnClass="button-tertiary" disabled>
					Tertiary disabled
				</Button>
			</div>
		</div>
	);
}

export default Home;
