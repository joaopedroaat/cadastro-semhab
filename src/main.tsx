import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { IBGEContextProvider } from "./contexts/IBGEContext";
import { FormContextProvider } from "./contexts/FormContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IBGEContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </IBGEContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
