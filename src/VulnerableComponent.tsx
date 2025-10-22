// src/VulnerableComponent.tsx

import React from 'react';

// FLAW 1: Hard-coded "secret" for the secret scanner to find.
const FAKE_API_KEY = "sk_live_0x123456789abcdef987654321_FAKEKEY";

function VulnerableComponent({ userInput }: { userInput: string }) {
  console.log(FAKE_API_KEY); // Using the fake key

  // FLAW 2: Using dangerouslySetInnerHTML, which is a common XSS risk.
  // This is what a SAST tool (Semgrep) will flag.
  const dangerousHtml = { __html: `Hello, ${userInput}` };

  return (
    <div>
      <h2>My Vulnerable Component</h2>
      <div dangerouslySetInnerHTML={dangerousHtml} />
    </div>
  );
}

export default VulnerableComponent;