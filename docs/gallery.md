# Gallery Feature Documentation

This document explains the gallery feature implementation for the portfolio website.

## Overview

The gallery feature allows displaying multiple images for each project in a carousel/lightbox view. It uses the `react-image-gallery` library to provide a responsive, touch-enabled image gallery.

## Installation

The gallery feature requires the `react-image-gallery` package:

```bash
npm install react-image-gallery
```

Add the required CSS to your project:

```javascript
// In _app.js or a component that uses the gallery
import "react-image-gallery/styles/css/image-gallery.css";
```

## Data Structure

Gallery images are defined in `data/project-images.json` with the following structure:

```json
{
  "projectGalleries": [
    {
      "projectId": 1,
      "images": [
        {
          "original": "/images/projects/image1.webp",
          "thumbnail": "/images/projects/image1-thumb.webp",
          "description": "Description of the image"
        },
        // More images...
      ]
    },
    // More project galleries...
  ]
}
```

## Implementation

The gallery is implemented in the `ProjectModal` component in `components/Projects.js`:

```jsx
import ImageGallery from 'react-image-gallery';

// Inside the ProjectModal component
const projectGallery = projectGalleries.find(gallery => gallery.projectId === project.id);

// Render the gallery if images exist
{projectGallery && (
  <div className="mb-6">
    <ImageGallery
      items={projectGallery.images}
      showPlayButton={false}
      showFullscreenButton={true}
      showThumbnails={true}
      lazyLoad={true}
    />
  </div>
)}
```

## Configuration Options

The gallery component supports various configuration options:

- `showPlayButton`: Toggle autoplay button visibility
- `showFullscreenButton`: Toggle fullscreen button visibility
- `showThumbnails`: Toggle thumbnail navigation
- `lazyLoad`: Enable lazy loading for better performance
- `thumbnailPosition`: Position of thumbnails ('top', 'bottom', 'left', 'right')
- `slideDuration`: Duration of slide transitions in ms
- `slideInterval`: Interval for autoplay in ms

## Adding New Images

To add new images to a project gallery:

1. Add the image files to `/public/images/projects/`
2. Update `data/project-images.json` with the new image information
3. Ensure the `projectId` matches the project ID in `data/projects.json`

## Responsive Behavior

The gallery is responsive by default and will adapt to different screen sizes:

- On mobile: Thumbnails are smaller and positioned at the bottom
- On tablet: Thumbnails are visible with appropriate sizing
- On desktop: Full gallery experience with larger thumbnails

## Accessibility

The gallery implementation includes accessibility features:

- Keyboard navigation (arrow keys, Escape to close)
- ARIA attributes for screen readers
- Alt text for images via the description field

## Troubleshooting

Common issues and solutions:

- **Images not loading**: Check file paths and ensure WebP format is supported
- **Gallery not responsive**: Verify CSS is properly imported
- **Performance issues**: Ensure images are optimized and lazy loading is enabled
