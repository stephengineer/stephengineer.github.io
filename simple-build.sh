#!/bin/bash

# Simple build script without npm dependency
echo "🔨 Simple Build Script"
echo "====================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in project root directory"
    exit 1
fi

echo "📋 Project files:"
ls -la

echo ""
echo "📋 Package.json content:"
cat package.json

echo ""
echo "📋 Vite config:"
cat vite.config.js

echo ""
echo "💡 Manual steps to fix the build:"
echo "1. Install Node.js and npm"
echo "2. Run: npm install"
echo "3. Run: npm run build"
echo "4. Check if dist/ folder is created"
echo "5. Push to GitHub"

echo ""
echo "🔗 GitHub Actions will handle the build automatically"
echo "Just push your code to the master branch!"
