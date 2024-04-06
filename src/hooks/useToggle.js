import React, { useState } from 'react';

function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevState) => !prevState);

  return [
    isOpen,
    toggle,
  ];
}

export default useToggle;
