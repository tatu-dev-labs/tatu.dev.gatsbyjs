import React from "react"
import UXImageIntro from "../../assets/images/ui-ux-desktop.svg";

export default function UIUXIntro() {
	return (
        <section className="bl-section-text-image">        
            <div className="co-section-text-image-col">
                <h2 className="el-title">UI/UX</h2>

                <p className="el-section-text-image-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <p className="el-section-text-image-p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            </div>
            <div className="co-section-text-image-col">
                <img className="el-section-text-image-img" src={UXImageIntro} alt="UX" />
            </div>
        </section>
	)
};