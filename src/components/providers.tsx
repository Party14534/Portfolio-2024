"use client";

import { ScriptProps } from 'next/script';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Providers = ({children} : ScriptProps) => {
    return (
      <>
      <Toaster />
      {children}
      </>  
    );
};

export default Providers;
