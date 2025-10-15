#!/bin/bash

# Script to migrate to stephengineer.github.io
echo "🚀 Preparing migration to stephengineer.github.io"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in project root directory"
    exit 1
fi

echo "📋 Current project structure:"
ls -la

echo ""
echo "📋 Current vite.config.js base setting:"
grep "base:" vite.config.js

echo ""
echo "🔧 Steps to create stephengineer.github.io:"
echo "1. Go to GitHub.com"
echo "2. Click '+' → 'New repository'"
echo "3. Repository name: stephengineer.github.io"
echo "4. Make it Public"
echo "5. Don't initialize with README (we'll push our code)"
echo "6. Click 'Create repository'"

echo ""
echo "🔄 After creating the repository, run these commands:"
echo "git remote add user-page https://github.com/stephengineer/stephengineer.github.io.git"
echo "git push user-page master"

echo ""
echo "⚙️ Configuration changes needed:"
echo "- Update vite.config.js: base: '/' (instead of '/Personal-Website/')"
echo "- Update all internal links to remove '/Personal-Website/' prefix"

echo ""
echo "📝 Manual steps:"
echo "1. Create stephengineer.github.io repository on GitHub"
echo "2. Update vite.config.js base path"
echo "3. Push code to the new repository"
echo "4. Enable GitHub Pages in repository settings"
echo "5. Your site will be available at: https://stephengineer.github.io/"

echo ""
echo "🎯 Benefits of user page:"
echo "✅ Clean URL: https://stephengineer.github.io/"
echo "✅ No path suffix needed"
echo "✅ Professional appearance"
echo "✅ Easier to remember and share"
