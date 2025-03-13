import Partner from '../models/Partner.js';

// Get all partners
export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a partner (for testing or admin use)
export const addPartner = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const newPartner = new Partner({ name, imageUrl });
    await newPartner.save();
    res.status(201).json(newPartner);
  } catch (error) {
    console.error('Error adding partner:', error);
    res.status(500).json({ message: 'Server error' });
  }
};