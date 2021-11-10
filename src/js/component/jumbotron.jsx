import React from "react";

const Jumbotron = () => {
	return (
		<div className="container mt-4 pt-3">
			<div className="jumbotron mt-5 p-4 me-3 rounded">
				<h1 className="display-2">A Warm Welcome!</h1>
				<p className="col fs-5">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
