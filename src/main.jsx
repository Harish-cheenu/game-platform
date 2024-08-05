import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import App from './App';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {/* <SignedIn> */}
        <App UserButton={UserButton} useUser={useUser} />
      {/* </SignedIn> */}
    </ClerkProvider>
  </React.StrictMode>,
)