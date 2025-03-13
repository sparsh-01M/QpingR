// backend/controllers/siteContentController.js
import SiteContent from '../models/SiteContent.js';

export const getSiteContent = async (req, res) => {
  try {
    const content = await SiteContent.findOne();
    if (!content) {
      return res.status(404).json({ message: 'Site content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error('Error fetching site content:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addSiteContent = async (req, res) => {
  try {
    const { bannerImage, featureImage1, featureImage2, featureImage3, featureImage4, featureImage5, aboutUsImage } = req.body;
    const newContent = new SiteContent({
      bannerImage,
      featureImage1,
      featureImage2,
      featureImage3,
      featureImage4,
      featureImage5,
      aboutUsImage,
    });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    console.error('Error adding site content:', error);
    res.status(500).json({ message: 'Server error' });
  }
};