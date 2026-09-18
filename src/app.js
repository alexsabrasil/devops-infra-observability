const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const env = require('./config/env');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const notFound = require('./middlewares/not-found');
const {
  register,
  httpRequestsTotal,
  httpRequestDuration,
} = require('./config/metrics');

const app = express();

// Prometheus HTTP metrics
app.use((req, res, next) => {
  const start = process.hrtime.bigint();

  res.on('finish', () => {
    // Não contabiliza o próprio scraping do Prometheus
    if (req.path === '/metrics') return;

    const duration =
      Number(process.hrtime.bigint() - start) / 1_000_000_000;

    const route = req.route?.path || req.path;

    const labels = {
      method: req.method,
      route,
      status_code: String(res.statusCode),
    };

    httpRequestsTotal.inc(labels);
    httpRequestDuration.observe(labels, duration);
  });

  next();
});

// Security headers
app.use(helmet());

// CORS
app.use(cors());

// Rate limiting
if (!env.isTest()) {
  app.use(
    rateLimit({
      windowMs: env.rateLimit.windowMs,
      max: env.rateLimit.max,
      standardHeaders: true,
      legacyHeaders: false,
      message: {
        status: 'error',
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests, please try again later',
      },
    })
  );
}

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'E-Commerce API Docs',
}));
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    res.status(500).end(error.message);
  }
});

// API routes
app.use('/api/v1', routes);

// 404 handler for unmatched routes
app.use(notFound);

// Global error handler
app.use(errorHandler);

module.exports = app;
