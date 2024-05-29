"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// import { Container } from './styles';
interface DeviceContextDataProps {
  isDevice: boolean;
}

interface DeviceContextProviderProps {
  children: ReactNode;
}

const DeviceContext = createContext({} as DeviceContextDataProps);

const DeviceContextProvider: React.FC<DeviceContextProviderProps> = ({
  children,
}) => {
  const [isDevice, setIsDevice] = useState(false);

  const handleDevice = () => {
    console.log("CHAMA!");
    let size = window.innerWidth;

    console.log(size, "size?");
    console.log(size, "size?");

    if (size <= 1190) {
      setIsDevice(true);
    } else {
      setIsDevice(false);
    }
  };

  useEffect(() => {
    handleDevice();
    window.addEventListener("resize", handleDevice);

    return () => {
      window.removeEventListener("resize", handleDevice);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ isDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

function useDevice() {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error("useDevice must be a used with an DeviceContextProvider");
  }

  return context;
}

export { DeviceContextProvider, useDevice };
