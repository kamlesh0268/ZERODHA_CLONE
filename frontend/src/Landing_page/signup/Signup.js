import "./signup.css";

function Signup() {
  return (
    <div className="signup-section">
      <div className="signup-heading">
        <h1>Open a free demat & trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.5+ crore investors and traders
        </p>
      </div>

      <div className="signup-center">
        <div className="signup-image">
          <img src="/Media/IMAGES/images/landing.svg" alt="Platform Preview" />
        </div>

        <div className="signup-form-box">
          <h3>Signup now</h3>
          <p>Or track your existing application</p>

          <div className="phone-input">
            <span>🇮🇳</span>
            <span>+91</span>
            <input type="text" placeholder="Enter your mobile number" />
          </div>

          <button>Get OTP</button>

          <p className="terms">
            By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
