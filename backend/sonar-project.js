const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner({
  serverUrl: "http://localhost:9000",
  options: {
    "sonar.sources": "../backend",
    "sonar.tests": "tests",
    "sonar.inclusions": "**", // Entry point of your code
    "sonar.test.inclusions":
      "controllers/**/*.spec.js,routes/**/*.spec.jsx,tests/*.test.js,src/**/*.test.jsx",
    "sonar.exlusions": "sonar-project.js",
    "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "coverage/test-reporter.xml",
  },
});
