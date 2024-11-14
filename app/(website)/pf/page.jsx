// components/PaymentFailure.js
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar/Navbar';

const PaymentFailure = () => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto">
      <Navbar/>
      </div>
    
    <div style={styles.container}>
      <div style={styles.iconContainer}>❌</div>
      <h1 style={styles.title}>Payment Failed</h1>
      <p style={styles.message}>
        Oops! Something went wrong. Please check your payment details and try again.
      </p>
      <Link href="/checkout">
        <button style={styles.button}>Retry Payment</button>
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
    marginTop:"10%",
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#fef2f2',
    color: '#b91c1c',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '3rem auto',
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
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default PaymentFailure;
