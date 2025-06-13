import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-4 p-3 mt-5">
                    <img src="Media/IMAGES/images/zerodhaFundhouse.png" 
                     style={{
                                width: "198.19px",
                                height: "55px",
                                objectFit: "contain",
                                display: "block",
                                margin: "0 auto 10px auto"
                            }} />
                    <p className="text-small text-muted">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                        <br />
                        

                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/IMAGES/images/sensibullLogo.svg" 
                    style={{
                                width: "198.19px",
                                height: "55px",
                                objectFit: "contain",
                                display: "block",
                                margin: "0 auto 10px auto"
                            }}/>
                    <p className="text-small text-muted" >Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/IMAGES/images/tijori.svg" 
                    style={{
                                width: "198.19px",
                                height: "55px",
                                objectFit: "contain",
                                display: "block",
                                margin: "0 auto 10px auto"
                            }}/>
                    <p className="text-small text-muted">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/IMAGES/images/streakLogo.png" 
                    style={{
                                width: "198.19px",
                                height: "55px",
                                objectFit: "contain",
                                display: "block",
                                margin: "0 auto 10px auto"
                            }}/>
                    <p className="text-small text-muted">Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/IMAGES/images/smallcaseLogo.png"
                    style={{
                                width: "198.19px",
                                height: "55px",
                                objectFit: "contain",
                                display: "block",
                                margin: "0 auto 10px auto"
                            }} />
                    <p className="text-small text-muted">Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/IMAGES/images/dittoLogo.png"
                    style={{
                                width: "198.19px",
                                height: "55px",
                                objectFit: "contain",
                                display: "block",
                                margin: "0 auto 10px auto"
                            }} />
                    <p className="text-small text-muted">Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;