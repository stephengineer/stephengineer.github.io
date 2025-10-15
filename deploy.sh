#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all files to git
    git add .
    
    # Commit changes
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to main branch
    git push origin main
    
    echo "🎉 Deployment completed! Your site will be available at:"
    echo "https://yourusername.github.io/Personal-Website/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi