#!/bin/bash

echo "🔍 Diagnosing Personal Website Issues..."
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project root directory"
    exit 1
fi

echo "✅ Found package.json"

# Check Node.js version
echo "📋 Node.js version:"
node --version

# Check npm version
echo "📋 npm version:"
npm --version

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Test build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
    
    # Check if dist folder exists and has content
    if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
        echo "✅ dist folder created with content"
        echo "📁 Files in dist:"
        ls -la dist/
    else
        echo "❌ dist folder is empty or missing"
    fi
else
    echo "❌ Build failed"
    exit 1
fi

# Test development server
echo "🚀 Testing development server..."
echo "Starting dev server on port 3000..."
echo "Press Ctrl+C to stop the server"

npm run dev
