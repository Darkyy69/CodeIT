echo "Switching to branch main"
git checkout main

# echo "Pulling latest changes"
# git pull

echo "Building the project"
npm run build

echo "Copying the build to the server"
scp -r dist/* alaa21@ai2dz.com:/home/ai2dz.com/public_html/codeIT/

echo "Deployment completed"
