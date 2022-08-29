import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/user-info"
              element={
                <ProtectedRoute>
                  <div>user-info</div>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route index element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
