import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { IBGEContextProvider } from "./contexts/IBGEContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IBGEContextProvider>
        <App />
      </IBGEContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
