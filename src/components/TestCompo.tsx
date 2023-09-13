'use client';

import React, { useState, useRef } from 'react';

function TypingTest() {
  const [providedText, setProvidedText] = useState('타자 연습을 시작해보세요.');
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const renderComparison = () => {
    return (
      <div>
        {providedText.split('').map((char, index) => {
          if (index < userInput.length) {
            let color = char === userInput[index] ? 'black' : 'red';
            return (
              <span key={index} style={{ color }}>
                {char}
              </span>
            );
          }
          return <span key={index}>{char}</span>;
        })}
      </div>
    );
  };

  return (
    <div>
      {renderComparison()}
      <input type="text" value={userInput} onChange={handleChange} />
    </div>
  );
}

export default TypingTest;
