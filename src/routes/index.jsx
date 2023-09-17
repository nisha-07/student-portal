import { Routes, Route, Navigate } from "react-router-dom";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import Profile from "../pages/Profile/Profile";

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="*"
				element={<Navigate to="/dashboard" replace />}
			/>
			<Route path="/dashboard" element={<StudentDashboard />} />
			<Route path="/Profile" element={<Profile />} />
		</Routes>
	)
}

export default AppRouter
