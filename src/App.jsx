import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { Box } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Box pt="32px">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route
          path="/todos/:id"
          element={
            <PrivateRoute>
              <TodoDetailPage />
            </PrivateRoute>
          }
        />

        {/* <Route path="/todos" element={<Layout />}>
          <Route path="/:id" element={<TodoDetailPage />} />
        </Route> */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default App;
