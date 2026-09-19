# 🛒 E-Commerce API | DevOps, DevSecOps & Observability

<p align="center">
  <strong>API de e-commerce desenvolvida em Node.js com foco em DevOps, DevSecOps, Observabilidade e Infraestrutura como Código.</strong>
</p>

<p align="center">
  Desenvolvimento • Testes • Docker • CI/CD • Segurança • Observabilidade • IaC
</p>

<p align="center">
  <img src="docs/images/ecommerce-devops-observability.png"
       alt="Visão geral do projeto E-Commerce API com DevOps, DevSecOps e Observabilidade"
       width="100%">
</p>

---

## 📌 Sobre o projeto

O **E-Commerce API | DevOps, DevSecOps & Observability** é um projeto desenvolvido para demonstrar, de forma integrada, práticas modernas de desenvolvimento de software, automação, containerização, segurança, integração contínua, observabilidade e Infraestrutura como Código.

A aplicação simula uma API REST de e-commerce responsável pelo gerenciamento de recursos como **produtos, categorias, clientes e pedidos**.

Mais do que executar uma aplicação Node.js, o projeto demonstra o ciclo operacional ao redor dela:

- aplicação e dependências executadas em containers;
- persistência de dados com PostgreSQL;
- cache com Redis;
- testes automatizados com Jest;
- pipeline CI/CD com GitHub Actions;
- análise estática de segurança com Semgrep;
- análise de vulnerabilidades da imagem com Trivy;
- baseline DAST com OWASP ZAP;
- build e publicação de imagem Docker;
- métricas operacionais e de segurança expostas pela API;
- coleta de métricas com Prometheus;
- dashboards de observabilidade e segurança com Grafana;
- provisionamento automático dos dashboards Grafana;
- infraestrutura AWS simulada localmente com LocalStack;
- provisionamento de recurso S3 utilizando Terraform.

---

## 🎓 Contexto acadêmico

Este projeto foi desenvolvido como atividade prática do curso de **DevOps**, realizado no programa **FAP - Formação Acelerada em Programação**, pela **Aponti Academy**.

A proposta integra conhecimentos trabalhados durante a formação, aplicando em um único ambiente práticas de desenvolvimento, containerização, automação, CI/CD, segurança, observabilidade e Infraestrutura como Código.

**Programa:** FAP - Formação Acelerada em Programação  
**Formação:** DevOps  
**Instituição:** Aponti Academy

---

## 🎯 Objetivo

O objetivo principal é construir um ambiente reproduzível no qual desenvolvimento, infraestrutura, automação, segurança e observabilidade façam parte do mesmo fluxo.

O projeto busca demonstrar conceitos relacionados a:

**DevOps • DevSecOps • CI/CD • Containers • Observabilidade • Infrastructure as Code • Automação • Segurança**

---

## 🏗️ Arquitetura

A solução é composta por uma API Node.js integrada a PostgreSQL e Redis.

A aplicação disponibiliza métricas operacionais e métricas consolidadas de segurança no endpoint `/metrics`. O Prometheus realiza a coleta periódica dessas métricas e o Grafana utiliza o Prometheus como Data Source para apresentar os indicadores em dashboards.

A camada DevSecOps utiliza diferentes controles:

- **Semgrep** para análise estática do código;
- **Trivy** para análise de vulnerabilidades da imagem e dependências;
- **OWASP ZAP** para baseline de análise dinâmica da API.

Os resultados validados dos scanners são consolidados em métricas de segurança, permitindo que o Grafana apresente o último baseline validado em um dashboard específico.

Paralelamente, o Terraform utiliza o provider AWS direcionado ao LocalStack para provisionar infraestrutura AWS simulada localmente.

```text
                         DESENVOLVIMENTO
                                │
                                ▼
                    ┌─────────────────────┐
                    │   E-Commerce API    │
                    │ Node.js + Express   │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
          ┌─────────────┐             ┌─────────────┐
          │ PostgreSQL  │             │    Redis    │
          │ Persistência│             │    Cache    │
          └─────────────┘             └─────────────┘

                              │
                              ▼
                         TESTES - JEST
                              │
                              ▼
                         GitHub Actions
                              │
                              ▼
                       Semgrep - SAST
                              │
                              ▼
                        Docker Build
                              │
                              ▼
                         Trivy Scan
                              │
                              ▼
                    Build + Docker Hub


                       SEGURANÇA / DAST

                         API em execução
                              │
                              ▼
                         OWASP ZAP


                        OBSERVABILIDADE

                  API + Security Baseline
                              │
                              ▼
                           /metrics
                              │
                              ▼
                         Prometheus
                              │
                              ▼
                           Grafana
                       ┌──────┴──────┐
                       ▼             ▼
                Observability    Security
                  Dashboard       Overview


                  INFRAESTRUTURA COMO CÓDIGO

                         Terraform
                              │
                              ▼
                        AWS Provider
                              │
                              ▼
                         LocalStack
                              │
                              ▼
                         Amazon S3
```

---

## ⚙️ Tecnologias utilizadas

| Categoria | Tecnologias |
|---|---|
| Backend | Node.js, Express |
| Banco de dados | PostgreSQL |
| Cache | Redis |
| Testes | Jest |
| Containerização | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Registry | Docker Hub |
| SAST | Semgrep |
| Container Security / SCA | Trivy |
| DAST | OWASP ZAP |
| Métricas | prom-client |
| Monitoramento | Prometheus |
| Visualização | Grafana |
| IaC | Terraform |
| AWS local | LocalStack |
| Cloud simulada | Amazon S3 |
| Documentação da API | Swagger |

---

## ✨ Funcionalidades

A aplicação possui estrutura para gerenciamento dos principais recursos de um e-commerce, incluindo:

- produtos;
- categorias;
- clientes;
- pedidos;
- validação dos dados recebidos;
- persistência com PostgreSQL;
- cache com Redis;
- documentação da API com Swagger;
- health check da aplicação;
- métricas de observabilidade;
- métricas consolidadas de segurança;
- testes automatizados.

Além das funcionalidades da API, o projeto implementa uma camada integrada de **DevOps, DevSecOps e Observabilidade**.

---

## 📂 Estrutura do projeto

```text
devops-infra-observability/
│
├── .github/
│   ├── security/
│   │   └── semgrep.yml
│   │
│   └── workflows/
│       └── ci-cd.yml
│
├── grafana/
│   ├── dashboards/
│   │   ├── ecommerce-observability.json
│   │   └── ecommerce-security-overview.json
│   │
│   └── provisioning/
│       ├── dashboards/
│       │   └── dashboards.yml
│       └── datasources/
│           └── prometheus.yml
│
├── prometheus/
│   └── prometheus.yml
│
├── security/
│   ├── security-summary.json
│   └── reports/
│       └── trivy-report.json
│
├── src/
│   ├── cache/
│   ├── config/
│   │   ├── metrics.js
│   │   └── securityMetrics.js
│   ├── controllers/
│   ├── database/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── validators/
│   ├── app.js
│   └── server.js
│
├── terraform/
│   ├── .terraform.lock.hcl
│   ├── main.tf
│   ├── outputs.tf
│   ├── providers.tf
│   └── variables.tf
│
├── tests/
│   ├── unit/
│   └── setup.js
│
├── .dockerignore
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── package.json
├── package-lock.json
└── README.md
```

> O diretório `security/reports/` contém relatórios brutos locais de scanners e é ignorado pelo Git. O arquivo `security/security-summary.json` contém somente o resumo sanitizado utilizado pelas métricas de segurança.

---

# 🚀 Como executar

## 1. Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Git
- Docker
- Docker Compose
- Terraform

O LocalStack será executado através do Docker Compose.

---

## 2. Clone o repositório

```bash
git clone https://github.com/alexsabrasil/devops-infra-observability.git
cd devops-infra-observability
```

---

## 3. Configure as variáveis de ambiente

Crie seu arquivo `.env` utilizando o arquivo de exemplo.

### Linux/macOS

```bash
cp .env.example .env
```

### PowerShell

```powershell
Copy-Item .env.example .env
```

Preencha as variáveis necessárias no `.env`.

Exemplo:

```env
NODE_ENV=development
PORT=3000

DB_HOST=localhost
DB_PORT=5433
DB_NAME=ecommerce
DB_USER=ecommerce
DB_PASSWORD=
DB_POOL_MIN=2
DB_POOL_MAX=10

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

LOCALSTACK_AUTH_TOKEN=
```

> [!IMPORTANT]
> O arquivo `.env` contém configurações locais e possíveis credenciais e, por isso, **não deve ser enviado ao repositório**.
>
> O projeto mantém apenas `.env.example` versionado.

Para versões atuais do LocalStack que utilizem autenticação, informe seu próprio `LOCALSTACK_AUTH_TOKEN` no `.env`.

---

## 4. Suba o ambiente

```bash
docker compose up -d
```

Para reconstruir a aplicação após alterações:

```bash
docker compose up -d --build
```

Confira os serviços:

```bash
docker compose ps
```

| Serviço | Porta |
|---|---:|
| E-Commerce API | 3000 |
| PostgreSQL | 5433 → 5432 |
| Redis | 6379 |
| Prometheus | 9090 |
| Grafana | 3001 → 3000 |
| LocalStack | 4566 |

---

# 🌐 Endpoints principais

## API

```text
http://localhost:3000
```

## Health Check

```text
http://localhost:3000/health
```

Exemplo:

```bash
curl http://localhost:3000/health
```

## Métricas

```text
http://localhost:3000/metrics
```

As métricas são disponibilizadas em formato compatível com Prometheus.

## Swagger

```text
http://localhost:3000/api-docs/
```

---

# 🧪 Testes automatizados

Os testes utilizam **Jest**.

Execute:

```bash
npm test
```

Estado validado durante o desenvolvimento:

```text
Test Suites: 6 passed, 6 total
Tests:       77 passed, 77 total
```

Os testes fazem parte da pipeline de CI/CD e são executados antes das análises de segurança e da construção/publicação da imagem Docker.

---

# 🐳 Docker

A API possui imagem própria definida pelo `Dockerfile`.

Exemplo de build local:

```bash
docker build -t ecommerce-api:1.0 .
```

A execução completa do ambiente é realizada pelo Docker Compose:

```bash
docker compose up -d
```

Para verificar os containers:

```bash
docker compose ps
```

Para visualizar logs:

```bash
docker compose logs -f
```

Para interromper os serviços sem remover os volumes:

```bash
docker compose stop
```

---

# 🔄 CI/CD + DevSecOps

O projeto utiliza **GitHub Actions** para automatizar testes, verificações de segurança e publicação da imagem Docker.

Workflow:

```text
.github/workflows/ci-cd.yml
```

Fluxo implementado:

```text
Push na main
      │
      ▼
Checkout
      │
      ▼
Setup Node.js
      │
      ▼
npm ci
      │
      ▼
Test
77 testes
      │
      ▼
Security - Semgrep SAST
      │
      ▼
Build da imagem para análise
      │
      ▼
Trivy Security Scan
      │
      ▼
Login Docker Hub
      │
      ▼
Build final
      │
      ▼
Push Docker Hub
```

A pipeline aplica uma estratégia de **fail fast**, estabelecendo dependências entre os jobs.

A análise Semgrep é executada antes do build da imagem. O Trivy é executado sobre uma imagem construída especificamente para a análise de segurança.

Durante a fase atual do projeto, o Trivy opera como controle de detecção com:

```yaml
exit-code: '0'
```

Essa decisão permite registrar e acompanhar o baseline conhecido sem interromper permanentemente a entrega. Como evolução, o pipeline poderá adotar políticas progressivamente mais restritivas após o tratamento do baseline.

Na validação final, o workflow foi concluído com sucesso nos quatro jobs:

```text
Test                           ✅
Security - Semgrep SAST        ✅
Build and Trivy Security Scan  ✅
Build and Push Docker Image    ✅
```

---

# 🛡️ DevSecOps

A camada de segurança foi incorporada ao fluxo para deslocar verificações para diferentes momentos do ciclo de desenvolvimento.

```text
Código fonte       → Semgrep
Imagem/dependências → Trivy
Aplicação executando → OWASP ZAP
```

Os scanners possuem objetivos e modelos de classificação diferentes. Por isso, seus resultados são apresentados separadamente e não são tratados como métricas equivalentes.

---

## 🔎 Semgrep - SAST

O Semgrep é utilizado para análise estática do código.

Configuração:

```text
.github/security/semgrep.yml
```

O conjunto utilizado verifica situações como:

- uso de `eval()`;
- execução de comandos com `exec()`;
- possíveis segredos hardcoded.

### Validação controlada

O funcionamento do controle foi testado através da introdução temporária de um código contendo:

```javascript
eval(input);
```

O Semgrep identificou o padrão através da regra:

```text
javascript-eval-detection
```

O teste controlado gerou:

```text
1 Code Finding
Blocking
```

Após a remoção do código de teste, uma nova análise apresentou:

```text
40 arquivos analisados
3 regras
0 findings
```

O estado atual consolidado é:

```text
Semgrep findings: 0
```

Esse procedimento permitiu validar não apenas a ausência de findings no baseline final, mas também a capacidade do controle de detectar o padrão configurado.

---

## 🔬 Trivy - Container Security

O Trivy é utilizado para analisar a imagem Docker e seus componentes.

Baseline validado:

| Severidade | Findings |
|---|---:|
| Critical | 1 |
| High | 23 |
| Medium | 20 |
| Low | 35 |
| **Total** | **79** |

Os números representam **findings/CVEs identificados pelo scanner nos componentes analisados** e não significam, isoladamente, que todas as ocorrências sejam vulnerabilidades exploráveis no contexto da aplicação.

### Análise do finding Critical

A análise identificou:

```text
CVE-2026-59873
Package: tar
Installed: 6.2.1
Fixed: 7.5.19
```

A investigação mostrou que o pacote não fazia parte diretamente da árvore de dependências da aplicação:

```bash
npm ls tar
```

Resultado:

```text
(empty)
```

Dentro da imagem, o componente foi localizado no npm global da imagem base:

```text
/usr/local/lib/node_modules/npm/node_modules/tar/package.json
```

Portanto, o finding crítico observado está associado à cadeia da imagem base/npm, e não a uma dependência declarada diretamente pela aplicação.

Também foi realizado rebuild com a versão disponível de `node:20-alpine`, sem alteração no baseline.

Uma tentativa controlada de atualização para `npm@latest` não foi adotada porque a versão disponível exigia uma versão mais recente do Node.js, o que introduziria uma alteração de runtime apenas para eliminar o finding.

O risco residual foi, portanto, identificado e documentado sem comprometer a estabilidade da aplicação.

---

## 🌐 OWASP ZAP - DAST

O OWASP ZAP foi utilizado para realizar uma análise dinâmica baseline contra a API em execução.

Resultado validado:

| Resultado | Quantidade |
|---|---:|
| PASS | 65 |
| WARN | 2 |
| FAIL | 0 |

Os dois warnings observados foram relacionados a:

```text
Storable and Cacheable Content
Cross-Domain Misconfiguration
```

Os alertas apareceram associados a respostas de rotas como `/`, `robots.txt` e `sitemap.xml`, incluindo respostas HTTP 404.

Por esse motivo, os warnings foram mantidos como **achados do baseline para análise**, sem classificá-los automaticamente como vulnerabilidades confirmadas.

O endpoint Swagger disponível é:

```text
/api-docs/
```

Durante a validação, não foi identificado um endpoint OpenAPI JSON independente apropriado para execução do modo API Scan do ZAP. Para evitar alterações artificiais na API apenas para atender ao scanner, o projeto manteve o baseline DAST como controle implementado.

---

# 📈 Observabilidade

A camada de observabilidade utiliza:

```text
API
 │
 ├── métricas HTTP
 │
 └── métricas consolidadas de segurança
           │
           ▼
       Prometheus
           │
           ▼
         Grafana
```

A aplicação utiliza `prom-client` para disponibilizar métricas no endpoint:

```text
/metrics
```

Entre as métricas operacionais estão:

```text
ecommerce_http_requests_total
ecommerce_http_request_duration_seconds
```

Também foi criada a métrica consolidada:

```text
ecommerce_security_findings
```

---

## 🔐 Métricas de segurança

Os resultados do último baseline validado são consolidados em:

```text
security/security-summary.json
```

Exemplo:

```json
{
  "trivy": {
    "critical": 1,
    "high": 23,
    "medium": 20,
    "low": 35
  },
  "semgrep": {
    "findings": 0
  },
  "zap": {
    "pass": 65,
    "warn": 2,
    "fail": 0
  }
}
```

O módulo:

```text
src/config/securityMetrics.js
```

transforma o resumo em métricas Prometheus.

Exemplos:

```text
ecommerce_security_findings{scanner="trivy",severity="critical"} 1
ecommerce_security_findings{scanner="trivy",severity="high"} 23
ecommerce_security_findings{scanner="trivy",severity="medium"} 20
ecommerce_security_findings{scanner="trivy",severity="low"} 35

ecommerce_security_findings{scanner="semgrep",severity="findings"} 0

ecommerce_security_findings{scanner="zap",severity="pass"} 65
ecommerce_security_findings{scanner="zap",severity="warn"} 2
ecommerce_security_findings{scanner="zap",severity="fail"} 0
```

> Essas métricas representam o **último baseline de segurança consolidado**. O Grafana não executa Semgrep, Trivy ou ZAP em tempo real.

---

## Prometheus

Interface:

```text
http://localhost:9090
```

Target:

```text
ecommerce-api
```

Coleta:

```text
api:3000/metrics
```

Quando a comunicação está funcionando corretamente:

```text
UP
```

Exemplo de consulta das métricas de segurança:

```promql
ecommerce_security_findings
```

Para consultar somente o Trivy:

```promql
ecommerce_security_findings{scanner="trivy"}
```

---

# 📊 Grafana

Interface:

```text
http://localhost:3001
```

O Prometheus é configurado automaticamente como Data Source através de:

```text
grafana/provisioning/datasources/prometheus.yml
```

Os dashboards são provisionados automaticamente através de:

```text
grafana/provisioning/dashboards/dashboards.yml
```

O projeto possui dois dashboards:

```text
E-Commerce API - Observability Dashboard
E-Commerce API - Security Overview
```

Arquivos:

```text
grafana/dashboards/ecommerce-observability.json
grafana/dashboards/ecommerce-security-overview.json
```

---

## 📊 Observability Dashboard

O dashboard operacional contém quatro indicadores principais.

### Taxa de Requisições HTTP

```promql
sum(rate(ecommerce_http_requests_total[1m]))
```

### Requisições por Status HTTP

```promql
sum by (status_code) (
  rate(ecommerce_http_requests_total[1m])
)
```

### Tempo Médio de Resposta

```promql
sum(rate(ecommerce_http_request_duration_seconds_sum[1m]))
/
sum(rate(ecommerce_http_request_duration_seconds_count[1m]))
```

### Disponibilidade da API

```promql
up{job="ecommerce-api"}
```

O valor `1` indica que o Prometheus está conseguindo coletar as métricas da API.

---

## 🛡️ Security Overview

O dashboard:

```text
E-Commerce API - Security Overview
```

centraliza os resultados do último baseline validado.

### Trivy

Cards:

```text
Critical    1
High       23
Medium     20
Low        35
```

Além dos cards, o dashboard apresenta a distribuição dos findings por severidade.

### Semgrep

```text
SAST - Semgrep
Findings atuais: 0
```

### OWASP ZAP

```text
FAIL     0
PASS    65
WARN     2
```

A apresentação separada mantém a semântica própria de cada scanner e evita tratar `PASS`, `WARN` e `FAIL` do ZAP como níveis de severidade equivalentes aos utilizados pelo Trivy.

O dashboard foi exportado e validado através do provisioning do Grafana. Após o restart do serviço, os dashboards de observabilidade e segurança foram carregados automaticamente.

---

# 🏗️ Infraestrutura como Código

O projeto utiliza **Terraform** para provisionar recursos AWS simulados através do **LocalStack**.

Arquivos:

```text
terraform/
├── .terraform.lock.hcl
├── main.tf
├── outputs.tf
├── providers.tf
└── variables.tf
```

O provider AWS é direcionado ao endpoint local:

```text
http://localhost:4566
```

Dessa forma, é possível demonstrar Infrastructure as Code sem criar recursos na conta AWS real.

---

# ☁️ LocalStack + Amazon S3

O LocalStack é executado como parte do Docker Compose.

Endpoint:

```text
http://localhost:4566
```

O Terraform provisiona o bucket:

```text
ecommerce-observability-assets
```

O projeto também habilita **versionamento do S3**.

Recursos gerenciados:

```text
aws_s3_bucket.ecommerce_assets
aws_s3_bucket_versioning.ecommerce_assets
```

---

## Executando o Terraform

Inicialize:

```bash
terraform -chdir=terraform init
```

Formate:

```bash
terraform -chdir=terraform fmt
```

Valide:

```bash
terraform -chdir=terraform validate
```

Visualize o plano:

```bash
terraform -chdir=terraform plan
```

Aplique:

```bash
terraform -chdir=terraform apply
```

Após o provisionamento:

```bash
terraform -chdir=terraform state list
```

Resultado esperado:

```text
aws_s3_bucket.ecommerce_assets
aws_s3_bucket_versioning.ecommerce_assets
```

Outputs:

```bash
terraform -chdir=terraform output
```

Exemplo:

```text
bucket_arn  = "arn:aws:s3:::ecommerce-observability-assets"
bucket_name = "ecommerce-observability-assets"
```

---

## ♻️ Idempotência

Após a criação da infraestrutura, uma nova execução de:

```bash
terraform -chdir=terraform plan
```

deve identificar:

```text
No changes. Your infrastructure matches the configuration.
```

Isso demonstra uma propriedade fundamental da Infraestrutura como Código: o Terraform compara o **estado desejado** com o **estado atual** da infraestrutura.

---

# 🔐 Boas práticas de segurança

O projeto adota cuidados para reduzir a exposição de informações sensíveis e introduzir controles de segurança no ciclo de desenvolvimento.

Entre as medidas implementadas:

- `.env` não versionado;
- `.env.example` sem senha real;
- senha do PostgreSQL obtida através de variável de ambiente;
- `LOCALSTACK_AUTH_TOKEN` obtido através de variável de ambiente;
- token do LocalStack não armazenado no `docker-compose.yml`;
- credenciais do Docker Hub armazenadas como GitHub Actions Secrets;
- arquivos `terraform.tfstate` ignorados;
- diretório `.terraform/` ignorado;
- `.terraform.lock.hcl` versionado;
- relatórios brutos de scanners ignorados pelo Git;
- remoção de senha hardcoded;
- SAST com Semgrep;
- análise da imagem com Trivy;
- baseline DAST com OWASP ZAP;
- consolidação dos resultados de segurança em métricas observáveis.

Exemplo utilizado no Compose:

```yaml
LOCALSTACK_AUTH_TOKEN=${LOCALSTACK_AUTH_TOKEN}
```

O valor da credencial permanece somente no ambiente local.

---

# 📁 Arquivos locais ignorados

Entre os arquivos e diretórios que não devem ser enviados ao Git estão:

```text
.env
node_modules/
coverage/
dist/
*.log
**/.terraform/*
*.tfstate
*.tfstate.*
*.tfplan
security/reports/*.json
```

O relatório bruto do Trivy permanece local:

```text
security/reports/trivy-report.json
```

Já o resumo sanitizado é versionado:

```text
security/security-summary.json
```

O Terraform lock file também é intencionalmente versionado:

```text
terraform/.terraform.lock.hcl
```

---

# 🔍 Fluxo completo do projeto

```text
                           DESENVOLVIMENTO
                                 │
                                 ▼
                         Node.js + Express
                                 │
                   ┌─────────────┴─────────────┐
                   ▼                           ▼
              PostgreSQL                    Redis
                   │
                   └─────────────┬─────────────┘
                                 ▼
                              Testes
                                 │
                                 ▼
                                Git
                                 │
                                 ▼
                         GitHub Actions
                                 │
                                 ▼
                         Testes - Jest
                                 │
                                 ▼
                         Semgrep - SAST
                                 │
                                 ▼
                         Docker Build
                                 │
                                 ▼
                         Trivy Security
                                 │
                                 ▼
                       Build + Docker Hub


                            DAST
                             │
                             ▼
                       API em execução
                             │
                             ▼
                         OWASP ZAP


                       OBSERVABILIDADE
                             │
                             ▼
                         API /metrics
                             │
               ┌─────────────┴─────────────┐
               │                           │
               ▼                           ▼
        Métricas HTTP              Security Baseline
               │                           │
               └─────────────┬─────────────┘
                             ▼
                         Prometheus
                             │
                             ▼
                           Grafana
                       ┌─────┴─────┐
                       ▼           ▼
                  Observability  Security
                    Dashboard    Overview


                 INFRAESTRUTURA COMO CÓDIGO
                             │
                             ▼
                         Terraform
                             │
                             ▼
                       AWS Provider
                             │
                             ▼
                        LocalStack
                             │
                             ▼
                         Amazon S3
```

---

# ✅ Validações realizadas

Durante a implementação foram validados:

- aplicação executando em container;
- PostgreSQL operacional;
- Redis operacional;
- health check da API;
- Swagger;
- endpoint `/metrics`;
- 6 suítes e 77 testes automatizados aprovados;
- pipeline GitHub Actions;
- Semgrep executado localmente;
- teste controlado de detecção do Semgrep;
- Semgrep integrado à pipeline;
- baseline final Semgrep com 0 findings;
- Trivy executado contra a imagem Docker;
- 79 findings classificados no baseline;
- investigação do finding Critical;
- Trivy integrado à pipeline;
- OWASP ZAP executado contra a API;
- baseline ZAP com 65 PASS, 2 WARN e 0 FAIL;
- build da imagem Docker;
- publicação da imagem;
- Prometheus coletando métricas operacionais;
- target da API em estado `UP`;
- métricas de segurança expostas pela API;
- oito séries de segurança validadas no Prometheus;
- Grafana conectado ao Prometheus;
- dashboard de observabilidade;
- dashboard de segurança;
- provisioning automático dos dois dashboards;
- LocalStack operacional;
- Terraform validado;
- Terraform Plan;
- Terraform Apply;
- criação do bucket S3;
- versionamento do bucket;
- Terraform State;
- Terraform Outputs;
- idempotência com `No changes`;
- remoção de senha hardcoded;
- pipeline final com Test, Semgrep, Trivy e Build/Push concluída com sucesso.

---

# 💡 Conceitos aplicados

### Automação

Redução de tarefas manuais através de GitHub Actions, Docker Compose, provisioning do Grafana e Terraform.

### Reprodutibilidade

Ambiente, infraestrutura, dashboards e configurações descritos através de código e arquivos versionados.

### Observabilidade

A aplicação disponibiliza dados sobre seu comportamento operacional e também expõe o último baseline consolidado dos controles de segurança.

### Infrastructure as Code

A infraestrutura simulada é criada declarativamente pelo Terraform.

### Continuous Integration

Cada alteração enviada à branch principal passa pelos testes e controles definidos na pipeline.

### Continuous Delivery

Após as validações anteriores, a pipeline constrói e publica a imagem Docker.

### Shift Left Security

A análise estática com Semgrep ocorre antes da construção e publicação final da imagem, antecipando verificações de segurança no ciclo.

### Segurança de containers

O Trivy analisa componentes e dependências presentes na imagem Docker, permitindo identificar e classificar findings antes da publicação final.

### Segurança dinâmica

O OWASP ZAP complementa os controles anteriores analisando a aplicação em execução.

### Gestão de risco

Findings não são tratados automaticamente como vulnerabilidades exploráveis. Os resultados são analisados considerando origem, componente afetado, contexto e impacto de possíveis remediações.

---

# 📚 Aprendizados

O desenvolvimento deste projeto permitiu integrar tecnologias que normalmente são estudadas separadamente.

A aplicação tornou-se o centro de um ecossistema que envolve código, testes, containers, automação, segurança, infraestrutura e monitoramento.

Um dos principais aprendizados foi compreender que DevOps não se resume à utilização de ferramentas. O valor está na integração entre elas para criar um processo mais **automatizado, reproduzível, observável e seguro**.

A introdução dos controles DevSecOps também evidenciou que segurança não significa apenas encontrar vulnerabilidades. É necessário interpretar os resultados dos scanners, investigar a origem dos componentes afetados, avaliar riscos e decidir como tratar findings sem comprometer desnecessariamente a estabilidade da aplicação.

---

# 👥 Equipe

Projeto desenvolvido em equipe durante a formação em **DevOps - FAP | Aponti Academy**.

**Integrantes**

- Alexsandra Tavares
- Carlos Eduardo
- Vinicius Lacerda

---

# 📌 Status do projeto

```text
API                         ✅
PostgreSQL                  ✅
Redis                       ✅
Docker                      ✅
Docker Compose              ✅
Testes automatizados        ✅ 77/77
CI/CD                       ✅
Docker Hub                  ✅
Semgrep SAST                ✅
Trivy                       ✅
OWASP ZAP                   ✅
Prometheus                  ✅
Grafana                     ✅
Observability Dashboard     ✅
Security Overview           ✅
Terraform                   ✅
LocalStack                  ✅
Amazon S3 simulado          ✅
Hardening de configuração   ✅
```

**Status: implementação concluída e validada.**

---

## 🔭 Evoluções futuras

O projeto pode evoluir com:

- política progressivamente mais restritiva para findings Critical/High no Trivy;
- atualização controlada da imagem base e componentes associados;
- geração automática dos relatórios de segurança como artifacts da pipeline;
- atualização automatizada do `security-summary.json`;
- endpoint OpenAPI JSON dedicado para ampliar a análise DAST;
- alertas de segurança baseados em métricas;
- gerenciamento centralizado de segredos;
- execução em infraestrutura cloud real;
- pinning de versões/digests das imagens e Actions utilizadas no pipeline.

---

<p align="center">
  <strong>E-Commerce API | DevOps, DevSecOps & Observability</strong>
</p>

<p align="center">
  Projeto desenvolvido na formação DevOps • FAP • Aponti Academy
</p>

<p align="center">
  Desenvolvimento • Automação • Segurança • Infraestrutura • Observabilidade
</p>