#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages

# Remove all files except .git
echo "Cleaning up old files..."
git rm -rf .

# Copy dist files to root
echo "Copying new files..."
cp -r dist/* .

# Add all files
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to GitHub..."
git push origin gh-pages

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

echo "Deployment complete!" 