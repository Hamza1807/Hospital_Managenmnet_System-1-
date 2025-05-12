const Appointment = require("../models/Appointment"); // Import Appointment model

// Add Appointment
const addAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add appointment", error });
  }
};

// Delete Appointment
const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found." });
    }

    res.status(200).json({ message: "Appointment canceled successfully." });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).json({ message: "Failed to cancel appointment.", error });
  }
};

// Update Appointment
const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { date, time } = req.body;

  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { date, time },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found." });
    }

    res.status(200).json({ message: "Appointment updated successfully." });
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).json({ message: "Failed to update appointment.", error });
  }
};

// Get All Appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointments.", error });
  }
};

module.exports = {
  addAppointment,
  deleteAppointment,
  updateAppointment,
  getAllAppointments,
};
