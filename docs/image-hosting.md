# Image Hosting for Portfolio

This document outlines the image hosting strategy for the portfolio website.

## Directory Structure

All project images are stored in the `/public/images/projects` directory with the following naming convention:

- Main project images: `project-name-main.webp`
- Thumbnail images: `project-name-thumb.webp`
- Additional images: `project-name-feature.webp`

## Image Optimization

All images should be:
- Converted to WebP format for optimal compression and quality
- Resized to appropriate dimensions:
  - Main images: 1200x800px
  - Thumbnails: 300x200px
- Compressed to under 200KB for main images and under 50KB for thumbnails

## Cloudinary Integration (Optional)

For production deployment, consider using Cloudinary for image hosting:

1. Create a free Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Upload images to Cloudinary using their dashboard or API
3. Use the provided CDN links in the project data files
4. Update the image paths in `data/projects.json` and `data/project-images.json`

Example Cloudinary URL:
```
https://res.cloudinary.com/your-account/image/upload/v1234567890/portfolio/project-name-main.webp
```

## Adding New Images

1. Capture high-quality screenshots of your projects
2. Optimize them using tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
3. Save them in the `/public/images/projects` directory
4. Update the image paths in the data files

## Best Practices

- Use consistent aspect ratios for all project images
- Ensure images are high quality but optimized for web
- Include both desktop and mobile views for each project
- Use descriptive filenames that reflect the content
