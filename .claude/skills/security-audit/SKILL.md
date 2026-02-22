# security-audit

```yaml
name: security-audit
description: Comprehensive security audit of React/TypeScript code
model: sonnet
```

Perform a thorough security audit of the provided code.

## What to Check

**Injection risks**: SQL, command, and template injection patterns

**Authentication issues**: Hardcoded credentials, insecure token handling

**Sensitive data exposure**: Logging secrets, exposing PII in responses

**Access control**: Missing permission checks, over-broad permissions

**Security misconfiguration**: Overly permissive CORS, missing headers

**Cross-site scripting (XSS)**: Unescaped HTML output, unsafe rendering APIs

**Deserialization**: Unsafe JSON.parse with untrusted input

**Outdated dependencies**: Known CVEs in package.json

**React-specific**: Unsafe rendering, uncontrolled components accepting untrusted input, event handlers with dynamic code execution, dynamic imports from untrusted sources

**Chakra UI**: Unvalidated theme values passed from external sources

## Output Format

```
## Critical Issues
- [Issue]: [Location] - [Risk] - [Fix]

## Medium Issues
- [Issue]: [Location] - [Impact] - [Recommendation]

## Minor / Best Practices
- [Issue]: [Location] - [Why it matters]

## Security Score
[Pass/Fail] - Safe for [environment]
```
