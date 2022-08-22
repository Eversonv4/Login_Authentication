import React, { useContext } from "react";
import AppRoutes from "./routes/routes";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
