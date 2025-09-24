#!/bin/bash

# Tala Website Deployment Script
echo "🚀 Preparing Tala website for deployment..."

# Check if public directory exists
if [ ! -d "public" ]; then
    echo "❌ Public directory not found!"
    exit 1
fi

# Check if all required files exist
required_files=("index.html" "borrow.html" "styles.css" "script.js")
for file in "${required_files[@]}"; do
    if [ ! -f "public/$file" ]; then
        echo "❌ Required file missing: public/$file"
        exit 1
    fi
done

echo "✅ All required files present"

# Check if vercel.json exists
if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json not found!"
    exit 1
fi

echo "✅ Vercel configuration found"

# Count files in public directory
file_count=$(find public -type f | wc -l)
echo "📁 Found $file_count files in public directory"

echo ""
echo "🎉 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin main"
echo "2. Go to https://vercel.com"
echo "3. Import your repository"
echo "4. Deploy!"
echo ""
echo "Or use Vercel CLI:"
echo "npm i -g vercel && vercel"
