const fs = require('fs');
const path = require('path');
const client = require('prom-client');

function registerSecurityMetrics(register) {
  const securityFindings = new client.Gauge({
    name: 'ecommerce_security_findings',
    help: 'Resultados consolidados dos scanners de segurança',
    labelNames: ['scanner', 'severity'],
    registers: [register],
  });

  const summaryPath = path.join(
    process.cwd(),
    'security',
    'security-summary.json'
  );

  if (!fs.existsSync(summaryPath)) {
    console.warn(
      'security-summary.json não encontrado. Métricas de segurança não carregadas.'
    );

    return securityFindings;
  }

  const summary = JSON.parse(
    fs.readFileSync(summaryPath, 'utf8')
  );

  // Trivy
  for (const [severity, value] of Object.entries(summary.trivy || {})) {
    securityFindings.set(
      {
        scanner: 'trivy',
        severity,
      },
      value
    );
  }

  // Semgrep
  securityFindings.set(
    {
      scanner: 'semgrep',
      severity: 'findings',
    },
    summary.semgrep?.findings ?? 0
  );

  // OWASP ZAP
  for (const [status, value] of Object.entries(summary.zap || {})) {
    securityFindings.set(
      {
        scanner: 'zap',
        severity: status,
      },
      value
    );
  }

  return securityFindings;
}

module.exports = {
  registerSecurityMetrics,
};