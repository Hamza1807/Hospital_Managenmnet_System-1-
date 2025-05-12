const express = require("express");
const router = express.Router();
const Billing = require("../models/Billing"); // Correct capitalization



/// Generate Bill
router.post("/generate", async (req, res) => {
  try {
    const { patientName, amount, status } = req.body;

    // Validate required fields
    if (!patientName || !amount) {
      return res.status(400).json({ message: "Patient Name and Amount are required." });
    }

    // Create a new billing document
    const newBill = new Billing({
      patientName,
      amount,
      status,
    });

    await newBill.save();
    res.status(201).json({ message: "Bill generated successfully!", bill: newBill });
  } catch (error) {
    console.error("Error generating bill:", error);
    res.status(500).json({ message: "Error generating bill.", error });
  }
});
router.get("/", async (req, res) => {
  try {
    const bills = await Billing.find();
    res.status(200).json(bills);
  } catch (error) {
    console.error("Error fetching bills:", error);
    res.status(500).json({ message: "Error fetching bills.", error });
  }
});
// Get All Bills
router.get("/billing", async (req, res) => {
  try {
    const bills = await Billing.find();
    res.status(200).json(bills);
  } catch (error) {
    console.error("Error fetching bills:", error);
    res.status(500).json({ message: "Error fetching bills.", error });
  }
});

// Update Bill Status
// Update a bill by ID
router.put("/billing/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { patientName, amount, status } = req.body;

    const updatedBill = await Billing.findByIdAndUpdate(
      id,
      { patientName, amount, status },
      { new: true } // Return the updated document
    );

    if (!updatedBill) {
      return res.status(404).json({ message: "Bill not found." });
    }

    res.status(200).json({ message: "Bill updated successfully!", bill: updatedBill });
  } catch (error) {
    console.error("Error updating bill:", error);
    res.status(500).json({ message: "Error updating bill.", error });
  }
});

// Delete a Bill
router.delete("/:id", async (req, res) => {
  try {
    await Billing.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bill", error });
  }
});

module.exports = router;