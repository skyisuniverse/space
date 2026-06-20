// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "extended-spaces",
      script: "npm",
      args: "start", // Runs the compiled Next.js production server
      watch: false, // Disabled because production code is static
      env: {
        PORT: 3457, // Keeps your optimized production port
      },
    },
  ],
};
