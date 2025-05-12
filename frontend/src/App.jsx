import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import AddAppointment from "./pages/AddAppointment";
import DeleteAppointment from "./pages/DeleteAppointment";
import UpdateAppointment from "./pages/UpdateAppointment";
import ViewAppointments from "./pages/ViewAppointments";
import GenerateBill from "./pages/GenerateBill";
import SeeBill from "./pages/SeeBill";
import TotalBills from "./pages/TotalBills"; // Ensure the export matches here
import PrintBill from "./pages/PrintBill";
import AddEducationalContent from "./pages/AddEducationalContent";
import HealthTips from "./pages/HealthTips";
import AddHealthTips from "./pages/AddHealthTips";
import UploadMedicalGuidelines from "./pages/UploadMedicalGuidelines"; // Adjust the path based on your folder structure
import FeedbackSystem from "./pages/FeedbackSystem";
import EmergencyAlerts from "./pages/EmergencyAlerts";
import AddDoctor from './pages/AddDoctor';
import ManageDoctors from './pages/ManageDoctors';
import DoctorAppointments from './pages/DoctorAppointments';

//patient started 
import PatientDashboard from "./pages/PatientDashboard";
import HealthRecords from "./pages/HealthRecords";
import Appointments from "./pages/Appointments";
import Prescriptions from "./pages/Prescriptions";
import Consultations from "./pages/Consultations";
import PersonalHealthData from "./pages/PersonalHealthData";
import DailyHealthLog from "./pages/DailyHealthLog";
import HealthProfile from "./pages/HealthProfile";
import HealthAlerts from "./pages/HealthAlerts";
import SearchDoctors from "./pages/SearchDoctors"; // Import the SearchDoctors component
import BookAppointments from "./pages/BookAppointments";
import AppointmentReminders from "./pages/AppointmentReminders"; // Ensure the correct path to the file
import AppointmentHistory from "./pages/AppointmentHistory";
import ManageAppointments from "./pages/ManageAppointments";
//import BookVideoConsultations from "./pages/BookVideoConsultations";
//prescription started 

import ViewPrescriptions from "./pages/ViewPrescriptions"; // Adjust this path if needed
import BookVideoConsultations from "./pages/BookVideoConsultations";
import ChatWithDoctors from "./pages/ChatWithDoctors"; // Adjust path as needed
import FeedbackOnConsultations from "./pages/FeedbackOnConsultations"; 
import FeedbackPage from "./pages/FeedbackPage";
import DoctorReport from './pages/DoctorReport'; // Replace with the actual file path

import PatientReports from './pages/PatientReports'; // Assuming your component is named `PatientReports`


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/add-appointment" element={<AddAppointment />} />
      <Route path="/delete-appointment" element={<DeleteAppointment />} />
      <Route path="/update-appointment" element={<UpdateAppointment />} />
      <Route path="/view-appointments" element={<ViewAppointments />} />   
      <Route path="/generate-bill" element={<GenerateBill />} />
        <Route path="/see-bill" element={<SeeBill />} />
        <Route path="/total-bills" element={<TotalBills />} />
        <Route path="/print-bill" element={<PrintBill />} />
        <Route path="/add-educational-content" element={<AddEducationalContent />} />
        <Route path="/health-tips" element={<HealthTips />} />
        <Route path="/add-health-tips" element={<AddHealthTips />} />
        <Route path="/upload-medical-guidelines" element={<UploadMedicalGuidelines />} />
        <Route path="/user-feedback-system" element={<FeedbackSystem />} />
        <Route path="/emergency-alerts" element={<EmergencyAlerts />} />
        <Route path="/doctors/add" element={<AddDoctor />} />
<Route path="/doctors/manage" element={<ManageDoctors />} />
<Route path="/doctors/:id/appointments" element={<DoctorAppointments />} />
<Route path="/doctors/appointments" element={<DoctorAppointments />} />



<Route path="/user-dashboard" element={<PatientDashboard />} />
        <Route path="/health-records" element={<HealthRecords />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/personal-health-data" element={<PersonalHealthData />} />
        <Route path="/daily-health-log" element={<DailyHealthLog />} />
        <Route path="/health-profile" element={<HealthProfile />} />
        <Route path="/health-alerts" element={<HealthAlerts />} />
        <Route path="/search-doctors" element={<SearchDoctors />} />
        <Route path="/book-appointments" element={<BookAppointments />} />
        <Route path="/appointment-reminders" element={<AppointmentReminders />} />
        <Route path="/appointment-history" element={<AppointmentHistory />} />
        <Route path="/manage-appointments" element={<ManageAppointments />} />
  
        <Route path="/view-prescriptions" element={<ViewPrescriptions />} />
        <Route path="/book-video-consultations" element={<BookVideoConsultations />} />
        <Route path="/chat-with-doctors" element={<ChatWithDoctors />} />
        <Route path="/feedback-on-consultations" element={<FeedbackOnConsultations />} />
        <Route path="/feedback" element={<FeedbackPage />} /> {/* Add the Feedback route */}
        <Route path="/reports/appointments" element={<PatientReports />} />
        <Route path="/reports/doctors" element={<DoctorReport />} />
    
    </Routes>
  </Router>
);

export default App;
