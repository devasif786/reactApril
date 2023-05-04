import React, { useState } from 'react'
import axios from 'axios';

function App() {
  const [mobile, setmobile] = useState('');
  const [eerror, setEerror] = useState('');

  const handleSendOtp = () => {
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(mobile)) {
      setEerror('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      mobile: Number(mobile)
    })
    .then(response => {
      if (response.status === 200) {
        setmobile('');
        setEerror('');
      } else {
        setEerror('Failed to send OTP. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setEerror('An error occurred. Please try again later.');
    });
  };

  return (
    <div>
    <h1> Enter your mobile number:</h1>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        pattern="[6-9]{1}[0-9]{9}"
        required
        value={mobile}
        onChange={event => setmobile(event.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
      {eerror && <div className="error">{eerror}</div>}
    </div>
  );
}

export default App;