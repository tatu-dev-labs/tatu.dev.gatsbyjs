import React from "react"
import HomeFrontImage from "../../assets/images/front-end-desktop.svg";


export default function HomeFrontEnd() {
	return (
        <section className="bl-section-text-image is-reverse">        
            <div className="co-section-text-image-col">
                <h2 className="el-title">Desarrollo Front-End</h2>

                <p className="el-section-text-image-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <p className="el-section-text-image-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            </div>
            <div className="co-section-text-image-col">
                <img className="el-section-text-image-img" src={HomeFrontImage} alt="Front-End" />
            </div>
        </section>
	)
};