const client = require('prom-client');

// Registry central das métricas
const register = new client.Registry();

// Métricas padrão do processo Node.js:
// memória, CPU, event loop, garbage collection etc.
client.collectDefaultMetrics({
  register,
  prefix: 'ecommerce_',
});

// Total de requisições HTTP
const httpRequestsTotal = new client.Counter({
  name: 'ecommerce_http_requests_total',
  help: 'Total de requisições HTTP recebidas pela API',
  labelNames: ['method', 'route', 'status_code'],
  registers: [register],
});

// Duração das requisições HTTP
const httpRequestDuration = new client.Histogram({
  name: 'ecommerce_http_request_duration_seconds',
  help: 'Duração das requisições HTTP em segundos',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5],
  registers: [register],
});

const { registerSecurityMetrics } = require('./securityMetrics');

registerSecurityMetrics(register);

module.exports = {
  register,
  httpRequestsTotal,
  httpRequestDuration,
};