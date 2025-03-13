// backend/models/SiteContent.js
import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
  bannerImage: { type: String, required: true },
  featureImage1: { type: String, required: true }, // Feature 1
  featureImage2: { type: String, required: true }, // Feature 2
  featureImage3: { type: String, required: true }, // Feature 3
  featureImage4: { type: String, required: true }, // Feature 4
  featureImage5: { type: String, required: true }, // Feature 5
  aboutUsImage: { type: String, required: true },
});

export default mongoose.model('SiteContent', siteContentSchema, 'sitecontents');