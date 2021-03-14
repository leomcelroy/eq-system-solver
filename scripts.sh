if [ $1 == "run" ]; then
  deno run --allow-net --allow-read server.js
elif [ $1 == "bundle" ]; then
  deno bundle "./src/solveSystem.js" "./dist/solveSystem.js"
else
  echo "Command not recognized."
fi