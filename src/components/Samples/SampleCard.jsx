import React from "react";

const SampleCard = ({ data }) => {
	return (
    <div className="sample-data-item">
      
			<div className="sample-img">
				<img src={data.image} alt="" />
			</div>
			<h2 className="sample-item-title">{data.title}</h2>
      <p className="sample-item-content">"{data.description}"</p>
      <a className="sample-more" href="#">Read More</a>

		</div>
	);
};

export default SampleCard;
