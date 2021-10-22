import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div
			className="card mx-3 text-center rounded   "
			style={{ width: "325px", height: "450px" }}>
			<img
				src={props.img}
				className="card-img-top bg-secondary"
				style={{ height: "200px" }}
				alt=""
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text mb-3" style={{ height: "8em" }}>
					{props.content}
				</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.string,
	img: PropTypes.string
};

export default Card;
