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
  isMenu: boolean;
  handleCloseMenu: () => void;
  handleOpenMenu: () => void;
  resizing: boolean;
}

interface DeviceContextProviderProps {
  children: ReactNode;
}

const DeviceContext = createContext({} as DeviceContextDataProps);

const DeviceContextProvider: React.FC<DeviceContextProviderProps> = ({
  children,
}) => {
  const [isDevice, setIsDevice] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let resizeTimer: any;
    const handleResize = () => {
      setResizing(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setResizing(false);
      }, 200); // Tempo em milissegundos após o qual o redimensionamento é considerado concluído
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsMenu(false);
  };

  const handleOpenMenu = () => {
    console.log("OPEN");
    setIsMenu(true);
  };

  const handleDevice = () => {
    let size = window.innerWidth;

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
    <DeviceContext.Provider
      value={{ isDevice, handleOpenMenu, handleCloseMenu, isMenu, resizing }}
    >
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
