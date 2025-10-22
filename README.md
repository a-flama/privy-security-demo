# SecureByDefault

The project consists of a simple React + TypeScript application that has a CI/CD pipeline in GitHub Actions (`.github/workflows/security.yml`) configured to automatically find and flag security issues.

## The "Security as Enablement" Philosophy

This pipeline is designed to "enable engineers to ship confidently." It:
* **Integrates directly** into the development workflow (Pull Requests).
* **Provides fast, automated feedback** to the developer.
* **Uses clear, well-known tools** to build trust.

## Security Tools Integrated

This pipeline runs three parallel jobs on every Pull Request:

1.  **Dependency Scanning (Trivy):** Scans all `npm` packages for known vulnerabilities (CVEs). This maps to the JD's need to "triage and respond to security alerts from... dependency scanners."

2.  **Static Analysis / SAST (Semgrep):** Scans the application code for common vulnerabilities (like the XSS risk in `VulnerableComponent.tsx`). This shows experience with "modern web security best practices."

3.  **Secret Scanning (Gitleaks):** Scans the repository for hard-coded secrets (like the `FAKE_API_KEY` in `VulnerableComponent.tsx`). This is a critical baseline security practice.

## How to See it in Action

The pipeline is configured to **run on Pull Requests**. The "vulnerable" code is already in the `main` branch. To see the pipeline run *and fail as intended*:

1.  Create a new branch: `git checkout -b test-pipeline`
2.  Make a small change (e.g., add a comment in `App.tsx`).
3.  Commit and push: `git add . && git commit -m "test: trigger pipeline" && git push origin test-pipeline`
4.  [Open a Pull Request on GitHub](https://github.com/YOUR_USERNAME/privy-security-demo/pull/new/test-pipeline).

You will see the "Security Scan" action start. It will fail on the "SAST Scan" and "Secret Scan" jobs, proving the security controls are working correctly.
