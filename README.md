# AI Image Caption Generator | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61dafb)](src/App.jsx)
[![Vite](https://img.shields.io/badge/Vite-5-646cff)](vite.config.js)
[![APIVerve | Image Caption](https://img.shields.io/badge/APIVerve-Image_Caption-purple)](https://apiverve.com/marketplace/imagecaption?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial)

A beautiful React application that uses AI to generate intelligent captions for any image. Upload an image and get an instant, accurate description.

![Screenshot](https://raw.githubusercontent.com/apiverve/image-caption-react-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial)** - no credit card required.

---

## Features

- AI-powered image captioning
- Drag and drop image upload
- Beautiful gradient UI design
- Caption history with thumbnails
- One-click copy to clipboard
- Support for JPG, PNG, and GIF
- Responsive mobile design
- Real-time loading states

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/image-caption-react-tutorial.git
   cd image-caption-react-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Open `src/App.jsx` and replace the placeholder:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to `http://localhost:5173`

## Project Structure

```
image-caption-react-tutorial/
├── src/
│   ├── App.jsx          # Main component with API logic
│   ├── App.css          # Styling
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── screenshot.jpg       # Preview image
├── LICENSE              # MIT license
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## How It Works

1. **User uploads image** - Drag & drop or click to select
2. **Image preview** - Shows the selected image
3. **API request** - Sends image to APIVerve Image Caption API
4. **AI analysis** - API uses computer vision to understand the image
5. **Caption display** - Shows generated caption with copy button
6. **History tracking** - Keeps recent captions for reference

### The API Call

```javascript
const formData = new FormData();
formData.append('image', imageFile);

const response = await fetch(API_URL, {
  method: 'POST',
  headers: {
    'x-api-key': API_KEY
  },
  body: formData
});
```

## API Reference

**Endpoint:** `POST https://api.apiverve.com/v1/imagecaption`

**Headers:**

| Header | Value |
|--------|-------|
| `x-api-key` | Your API key |

**Request Body:** `multipart/form-data`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `image` | file | Yes | Image file (JPG, PNG, GIF, max 5MB) |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "caption": "A golden retriever dog sitting on a grassy lawn in a park during sunset",
    "confidence": 0.95
  }
}
```

## Use Cases

AI image captioning is powerful for:

- **Accessibility** - Generate alt text for visually impaired users
- **Content Management** - Auto-tag images in CMS systems
- **Social Media** - Generate engaging captions for posts
- **E-commerce** - Create product image descriptions
- **Photo Organization** - Search and categorize images
- **SEO** - Improve image search rankings with descriptions
- **Archiving** - Document image contents for future reference

## Customization Ideas

- Add batch processing for multiple images
- Integrate with cloud storage (S3, Google Cloud)
- Add caption editing and refinement
- Support URL-based image input
- Add language translation for captions
- Export captions to CSV/JSON
- Add caption styling options

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial):

- [Image Classify](https://apiverve.com/marketplace/imageclassify?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial) - Classify images into categories
- [NSFW Detector](https://apiverve.com/marketplace/nsfwimagedetector?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial) - Detect inappropriate content
- [Image to Text (OCR)](https://apiverve.com/marketplace/imagetotext?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial) - Extract text from images

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial) - Browse 300+ APIs
- [Image Caption API](https://apiverve.com/marketplace/imagecaption?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial) - API details
