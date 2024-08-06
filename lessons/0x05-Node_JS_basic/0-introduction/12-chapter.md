### Debugging Node.js

**Node.js** provides various methods for debugging applications. Here’s a guide to help you get started.

#### Enable Inspector

To enable debugging in Node.js, use the `--inspect` flag when starting your Node.js process. By default, it listens on `127.0.0.1:9229`, and each process gets a unique UUID. 

**Example**:
```bash
node --inspect script.js
```

Alternatively, Node.js can listen for debugging messages upon receiving a `SIGUSR1` signal, though this method is deprecated in favor of the `--inspect` flag.

**Security Implications**:
- **Public Exposure**: Exposing the debug port publicly is unsafe. Ensure the debugger port is not bound to a public IP address or `0.0.0.0` to avoid security risks.
- **Local Access**: Even when bound to `127.0.0.1`, local applications can access the inspector port, which is by design.

**WebSocket and Same-Origin Policy**:
- Web browsers follow security models like the same-origin policy, preventing websites from making unauthorized WebSocket connections. Node.js verifies 'Host' headers to prevent DNS rebinding attacks.

#### Inspector Clients

**Command-Line Debugger**:
- Use `node inspect script.js` to start a debugging session via the command line.

**Browser DevTools**:
- **Chrome DevTools**: Open `chrome://inspect` and configure your target host and port.
- **Edge**: Use `edge://inspect` and follow similar steps.

**Visual Studio Code**:
- Configure `.vscode/launch.json` for Node.js debugging.

**Visual Studio**:
- Use "Debug > Start Debugging" or press F5.

**JetBrains WebStorm**:
- Create a Node.js debug configuration and start debugging.

**Other Tools**:
- **chrome-remote-interface**: A library for connecting to Inspector Protocol endpoints.
- **Gitpod**: Start debugging from the Debug view or press F5.
- **Eclipse IDE**: Use the Eclipse Wild Web Developer extension for Node.js debugging.

#### Command-Line Options

| Flag | Meaning |
|------|---------|
| `--inspect` | Enable inspector; default address and port (127.0.0.1:9229) |
| `--inspect=[host:port]` | Enable inspector; bind to specific address and port |
| `--inspect-brk` | Enable inspector; break before user code starts |
| `--inspect-brk=[host:port]` | Enable inspector; break before user code starts; bind to specific address and port |
| `node inspect script.js` | Start CLI debugger for script.js with --inspect flag |
| `node inspect --port=xxxx script.js` | Start CLI debugger with specified port |

#### Enabling Remote Debugging

To debug a Node.js application running on a remote machine securely:
1. Start Node.js with the inspector bound to `localhost`:
   ```bash
   node --inspect server.js
   ```
2. Set up an SSH tunnel from your local machine:
   ```bash
   ssh -L 9221:localhost:9229 user@remote.example.com
   ```
3. Connect your debugger to `localhost:9221`.

#### Legacy Debugger

The legacy debugger, using `--debug` or `--debug-brk`, is deprecated as of Node.js 7.7.0. Use the `--inspect` flag and the Inspector API instead. 

**Deprecated Tools**:
- **Built-in Debugger**: Use `node debug script_name.js` with the built-in command-line debugger.
- **node-inspector**: An intermediary tool that translates the V8 Debugging Protocol to the Inspector Protocol. [More Info](https://github.com/node-inspector/node-inspector)