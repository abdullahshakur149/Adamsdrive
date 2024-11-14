// components/PaymentSuccess.js
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';

const PaymentSuccess = () => {
  return (
    <div>

    <div className="navbar w-11/12 mx-auto">
      <Navbar/>
      </div>
    <div style={styles.container}>
      <div style={styles.iconContainer}>✔️</div>
      <h1 style={styles.title}>Payment Successful!</h1>
      <p style={styles.message}>Thank you for your purchase. Your payment was processed successfully.</p>
      <Link href="/">
        <button style={styles.button}>Back to Home</button>
      </Link>
    </div>
    </div>

  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    marginTop:"10%",

    borderRadius: '8px',
    backgroundColor: '#f0fdf4',
    color: '#065f46',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '2rem auto',
  },
  iconContainer: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  message: {
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#10b981',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default PaymentSuccess;
