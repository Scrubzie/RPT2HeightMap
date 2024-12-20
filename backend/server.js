// server.js (Backend - Node.js + Edge.js)
const edge = require('edge.js');
const express = require('express');
const app = express();
const port = 3001;

// Define C# code execution through Edge.js
const runCSharpCode = edge.func(function () {/*
    using System.Threading.Tasks;

    public class Startup
    {
        public async Task<object> Invoke(object input)
        {
            return "Hello from C#!";
        }
    }
*/});

// API route to trigger C# code
app.get('/run-csharp', async (req, res) => {
    try {
        const result = await runCSharpCode();
        res.send(result);
    } catch (error) {
        res.status(500).send('Error executing C# code: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});