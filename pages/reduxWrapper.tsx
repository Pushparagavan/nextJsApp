import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../src/state/store";

type ReduxWrapperProps = {
  children: ReactNode;
};

function ReduxWrapper({ children }: ReduxWrapperProps) {
  return <Provider store={store}>{children}</Provider>;
}
export default ReduxWrapper;
