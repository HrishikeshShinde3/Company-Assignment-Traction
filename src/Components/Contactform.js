import React, { useState } from 'react';
import styles from './Contactform.module.css'; // Import the CSS module

function Contactform() {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [spamProtection, setSpamProtection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles['body']}>
    <div className={styles['contact-us']}>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerName">
            NAME <em>&#x2a;</em>
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            required
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="customerPhone">PHONE</label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="orderNumber">ORDER NUMBER</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="customerNote">
            YOUR MESSAGE <em>&#x2a;</em>
          </label>
          <textarea
            rows="4"
            id="customerNote"
            name="customerNote"
            required
            value={customerNote}
            onChange={(e) => setCustomerNote(e.target.value)}
          />
        </div>

        <h3>Please provide all the information about your issue you can.</h3>

        <div>
          <label htmlFor="spamProtection">
            SPAM PROTECTION <em>&#x2a;</em>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?</span>
          </label>
          <input
            type="text"
            id="spamProtection"
            name="spamProtection"
            value={spamProtection}
            onChange={(e) => setSpamProtection(e.target.value)}
          />
        </div>

        <button id={styles['customerOrder']} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
    </div>
  
  );
}

export default Contactform;
