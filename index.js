const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Akshith | DevOps Portfolio</title>
        <style>
            body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: auto; padding: 2rem; background: #f4f7f9; }
            .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #007bff; padding-bottom: 1rem; }
            .logo { width: 120px; }
            h1 { color: #007bff; margin: 0; }
            .pitch { background: #e7f3ff; padding: 1rem; border-left: 4px solid #007bff; margin-top: 1rem; }
            ul { padding-left: 1.2rem; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div>
                    <h1>Akshith</h1>
                    <p>Computer Engineering Student | SRM IST</p>
                </div>
                <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker Logo" class="logo">
            </div>

            <section class="pitch">
                <h3>Why I’m a Strong DevOps Candidate</h3>
                <p>DevOps is the bridge between code and commerce. Here is why I excel in this space:</p>
                <ul>
                    <li><strong>Full-Stack Context:</strong> With experience in Node.js, Python, and Java, I don't just "deploy" code; I understand the application logic and its dependencies.</li>
                    <li><strong>Infrastructure as Code (IaC):</strong> My experience with <strong>AWS</strong> (Elastic Beanstalk, Lambda, S3) allows me to treat infrastructure with the same rigor as application code.</li>
                    <li><strong>Security-First Mindset:</strong> From blockchain projects like <em>Invoice.OS</em> to SaaS apps, I prioritize secure containerization and secret management.</li>
                    <li><strong>Automation Native:</strong> I thrive on reducing MTTR (Mean Time To Repair) and automating CI/CD pipelines to ensure rapid, reliable deployments.</li>
                </ul>
            </section>
            
            <footer>
                <p><small>Built with Node.js & Docker • 2026</small></p>
            </footer>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Portfolio app running at http://localhost:${port}`);
});