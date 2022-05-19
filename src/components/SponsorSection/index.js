import React from "react";
import "./sponsorSection.scss";

// Assets
import AWS from "../../assets/sponsorlogos/aws.png";
import PortoTechHub from "../../assets/sponsorlogos/portohub.png";
import WIT from "../../assets/sponsorlogos/wit.png";

export default function SponsorSection() {
    return (
        <section className="sponsor-section">
            <p>Parceiros headline LOREM IPSUM</p>
            <div>
                <img src={AWS} alt="AWS logo" />
                <img src={PortoTechHub} alt="Porto Tech Hub logo" />
                <img src={WIT} alt="Women In Tech logo" />
            </div>
        </section>
    );
}
