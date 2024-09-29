import React, { ReactNode } from 'react';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => <div className="Backdrop">{children}</div>;

export default Backdrop;
