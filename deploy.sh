#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed or not in PATH"
    echo "Please install Node.js and npm first"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in project root directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if dist folder exists and has content
    if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
        echo "✅ dist folder created with content"
        echo "📁 Files in dist:"
        ls -la dist/
    else
        echo "❌ dist folder is empty or missing"
        exit 1
    fi
    
    # Add all files to git
    git add .
    
    # Commit changes
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to master branch
    git push origin master
    
    echo "🎉 Deployment completed! Your site will be available at:"
    echo "https://yourusername.github.io/Personal-Website/"
else
    echo "❌ Build failed! Please check the errors above."
    echo "💡 Try running: npm install && npm run build"
    exit 1
fi