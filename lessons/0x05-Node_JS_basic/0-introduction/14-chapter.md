### Security Best Practices for Node.js Applications

**Intent**  
This document aims to expand on the current threat model and offer comprehensive guidelines to secure Node.js applications.

---

**1. Best Practices**  
This section provides a streamlined overview of best practices for Node.js. Refer to the [OpenSSF Best Practices](https://openssf.org) for broader recommendations.

**2. Attacks Explained**  
Detailed explanations and code examples (when possible) of various attacks identified in the threat model.

**3. Third-Party Libraries**  
Discusses threats related to Node.js modules (e.g., typosquatting, malicious packages) and best practices for managing dependencies.

---

### Threat List

**1. Denial of Service (DoS) of HTTP Server (CWE-400)**  
A DoS attack can occur if an application becomes unavailable due to mishandled HTTP requests. This is not a Node.js vulnerability per se but a result of how request handling is implemented.

**Mitigations:**
- Use a reverse proxy (e.g., Nginx) for caching, load balancing, and IP blacklisting.
- Configure server timeouts: `headersTimeout`, `requestTimeout`, `timeout`, and `keepAliveTimeout`.
- Limit open sockets per host and overall: `agent.maxSockets`, `agent.maxTotalSockets`, `agent.maxFreeSockets`, and `server.maxRequestsPerSocket`.

**Example:**
```javascript
const net = require('node:net');
const server = net.createServer(function (socket) {
  socket.on('error', console.error); // Prevents server crash
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});
server.listen(5000, '0.0.0.0');
```

**2. DNS Rebinding (CWE-346)**  
An attack where a malicious site tricks a Node.js debugging inspector (with `--inspect`) into exposing local resources.

**Mitigations:**
- Disable the inspector in production.
- Do not run the inspector protocol in production environments.

**3. Exposure of Sensitive Information (CWE-552)**  
Sensitive files or data can be inadvertently published to the npm registry.

**Mitigations:**
- Use `npm publish --dry-run` to review files before publishing.
- Maintain `.gitignore` and `.npmignore` files, or use `files` property in `package.json` to control what is published.
- Unpublish the package if sensitive information is exposed.

**4. HTTP Request Smuggling (CWE-444)**  
Involves an attacker exploiting differences in how HTTP requests are interpreted between a proxy and a Node.js application.

**Mitigations:**
- Avoid using `insecureHTTPParser`.
- Configure front-end servers to normalize ambiguous requests.
- Use HTTP/2 end-to-end and disable HTTP downgrading if possible.

**5. Information Exposure through Timing Attacks (CWE-208)**  
Attacks that reveal sensitive information based on response times.

**Mitigations:**
- Use `crypto.timingSafeEqual` for constant-time comparison.
- For password comparison, use `scrypt` or similar constant-time algorithms.

**6. Malicious Third-Party Modules (CWE-1357)**  
Risks associated with third-party packages that can access sensitive resources or execute arbitrary code.

**Mitigations:**
- Pin dependencies to specific versions and use lockfiles.
- Disable npm scripts with `--ignore-scripts` and `npm config set ignore-scripts true`.
- Use tools like `npm-audit` and `Socket` for vulnerability scanning.

**7. Memory Access Violation (CWE-284)**  
Exploits involving memory management errors, particularly on shared machines.

**Mitigations:**
- Use `--secure-heap=n` to limit the heap size.
- Avoid running production applications on shared machines.

**8. Monkey Patching (CWE-349)**  
Modifies built-in JavaScript properties at runtime.

**Mitigations:**
- Use the `--frozen-intrinsics` flag to prevent overriding built-in objects.
- Utilize `Object.freeze(globalThis)` to prevent the replacement of global objects.

**9. Prototype Pollution Attacks (CWE-1321)**  
Involves modifying or injecting properties into JavaScript objects.

**Mitigations:**
- Avoid insecure recursive merges.
- Implement JSON Schema validation.
- Create objects without prototypes using `Object.create(null)`.
- Use `Object.freeze(MyObject.prototype)` and `--disable-proto` flag.

**10. Uncontrolled Search Path Element (CWE-427)**  
Involves module resolution based on directory structure which can be exploited.

**Mitigations:**
- Use integrity checking with an experimental policy mechanism.
- Validate module integrity to avoid unintended module loading.

**11. Experimental Features in Production**  
Avoid using experimental features in production due to instability and potential breaking changes.

**OpenSSF Tools**  
- **OpenSSF Scorecard:** Evaluates open-source projects for security risks.
- **OpenSSF Best Practices Badge Program:** Allows projects to certify compliance with best practices.

---

This document outlines essential security practices and mitigations for Node.js applications. For detailed information, refer to the [OpenSSF Best Practices](https://openssf.org) and relevant security documentation.