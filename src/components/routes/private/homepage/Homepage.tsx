import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";
import Header from "../../../../shared/Header/Header";
import { AgnietBg2, HomepageBg, TechSupport } from "../../../../assets";
import { Navigate, useNavigate } from "react-router-dom";

//styles
import styles from "./Homepage.module.scss";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${AgnietBg2})`,
          backgroundSize: "100%",
          backgroundPositionY: "100%",
        }}
        className={` full-height-container p-5 ${styles.homepage}`}
      >
        {loading ? (
          <GeneralLoader />
        ) : (
          <div>
            <div
              className={`d-flex flex-column bg-white rounded p-4 text-primary m-4 ${styles.mission}`}
            >
              <div className="d-flex justify-content-center">
                <h3>What's Our Mission?</h3>
              </div>
              <div className="d-flex justify-content-center pt-2">
                <h5>MAKING IT GREAT AGAIN</h5>
              </div>
              <div className="container pt-2">
                <div className="row">
                  <p className="d-flex text-center">
                    At Agniet, we specialize in cybersecurity, network
                    infrastructure, and digital services. Our mission is to make
                    IT great again by providing exceptional expertise at real,
                    affordable prices. We are dedicated to empowering businesses
                    with secure, efficient, and innovative IT solutions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`bg-white container rounded pt-4 ${styles.servicesProvided}`}
            >
              <h4 className="text-primary text-center">
                Powerful services we provide
              </h4>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div>
                    <a className="link-white" href="/services/itConsulting">
                      <img src={TechSupport} width={200} />
                      <p>We offer the best tech support</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6"></div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6"></div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
