
import React from "react";

import { BlueskyCore } from "../core.js";

const BlueskyContext = React.createContext<BlueskyCore | null>(null);

export function BlueskyProvider(props: { client: BlueskyCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <BlueskyContext.Provider value={props.client}>
      {props.children}
    </BlueskyContext.Provider>
  );
}

export function useBlueskyContext(): BlueskyCore { 
  const value = React.useContext(BlueskyContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of BlueskyCore and pass it to <BlueskyProvider />.");
  }
  return value;
}
