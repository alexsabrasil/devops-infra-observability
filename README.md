# 🛒 E-Commerce | DevOps, DevSecOps & Observability

<p align="center">

  <strong>Aplicação E-Commerce com Frontend React, API Node.js e uma arquitetura integrada de DevOps, DevSecOps, Observabilidade e Infraestrutura como Código.</strong>

</p>

<p align="center">

  React • Node.js • Docker • CI/CD • Segurança • Observabilidade • IaC

</p>

![Visão geral do projeto E-Commerce com DevOps, DevSecOps e Observabilidade](./docs/images/ecommerce-devops-observability.png)

---

## 📌 Sobre o projeto

O **E-Commerce | DevOps, DevSecOps & Observability** é um projeto desenvolvido para demonstrar, de forma integrada, práticas modernas de desenvolvimento de software, automação, containerização, segurança, integração contínua, observabilidade e Infraestrutura como Código.

A solução é composta por um **Frontend React** conectado a uma **API REST Node.js + Express**, responsável pelo gerenciamento dos principais recursos de um e-commerce, como produtos, categorias, clientes e pedidos.

O frontend apresenta uma visão operacional da aplicação e consulta o endpoint `/health` da API, permitindo visualizar seu estado e disponibilidade.

Mais do que executar uma aplicação, o projeto demonstra o ciclo operacional ao redor dela:

- frontend React executado em container e servido por Nginx;

- API Node.js + Express containerizada;

- persistência com PostgreSQL;

- cache com Redis;

- testes automatizados com Jest;

- instalação reproduzível das dependências e build de produção do frontend;

- pipeline CI/CD com GitHub Actions;

- análise estática de segurança com Semgrep;

- análise de vulnerabilidades da imagem da API com Trivy;

- baseline DAST com OWASP ZAP;

- build e publicação automatizada das imagens Docker;

- publicação independente das imagens da API e do frontend no Docker Hub;

- métricas operacionais e de segurança;

- coleta de métricas com Prometheus;

- dashboards de observabilidade e segurança com Grafana;

- provisionamento automático dos dashboards;

- infraestrutura AWS simulada com LocalStack;

- provisionamento de recurso S3 utilizando Terraform.

---

## 🎓 Contexto acadêmico

Este projeto foi desenvolvido como atividade prática da formação em **DevOps**, realizada no programa **FAP - Formação Acelerada em Programação**, pela **Aponti Academy**.

A proposta integra conhecimentos trabalhados durante a formação e demonstra, em um único ambiente, práticas de desenvolvimento, containerização, CI/CD, segurança, observabilidade e Infraestrutura como Código.

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

A solução possui uma camada de frontend desenvolvida em React, uma API Node.js + Express e serviços de persistência, cache, observabilidade, segurança e infraestrutura.

O frontend consome a API REST em `/api/v1` e permite operar os principais recursos do e-commerce por meio de Dashboard, Categorias, Produtos, Clientes e Pedidos.

A API disponibiliza, entre outros recursos:

- `/health` para verificação de saúde;

- `/metrics` para métricas operacionais e de segurança;

- `/api-docs/` para documentação Swagger.

PostgreSQL é utilizado para persistência e Redis para cache.

O Prometheus coleta periodicamente as métricas expostas pela API, enquanto o Grafana utiliza o Prometheus como Data Source para apresentar indicadores operacionais e de segurança.

A camada DevSecOps utiliza:

- **Semgrep** para análise estática do código;

- **Trivy** para análise da imagem e seus componentes;

- **OWASP ZAP** para baseline de análise dinâmica da aplicação em execução.

Os resultados validados dos scanners são consolidados em métricas de segurança, permitindo que o Grafana apresente o último baseline validado em um dashboard específico.

Paralelamente, o Terraform utiliza o provider AWS direcionado ao LocalStack para provisionar infraestrutura AWS simulada localmente.

```text

                         USUÁRIO

                            │

                            ▼

                  ┌──────────────────┐

                  │  Frontend React  │

                  │   Nginx :8080    │

                  └────────┬─────────┘

                           │ HTTP

                           ▼

                  ┌──────────────────┐

                  │  API Node.js     │

                  │  Express :3000   │

                  └────────┬─────────┘

                           │

              ┌────────────┴────────────┐

              ▼                         ▼

      ┌──────────────┐          ┌──────────────┐

      │ PostgreSQL   │          │    Redis     │

      │ Persistência │          │    Cache     │

      └──────────────┘          └──────────────┘



                    CI/CD + DEVSECOPS

                       Push na main

                            │

              ┌─────────────┴─────────────┐

              ▼                           ▼

        Test API                  Validate React

        Jest 77/77                npm ci

                                  npm run build

              │                           │

              └─────────────┬─────────────┘

                            ▼

                       Semgrep SAST

                            │

                            ▼

                    Build API + Trivy

                            │

                            ▼

                Publish API + Frontend

                       Docker Hub



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

                    ┌───────┴────────┐

                    ▼                ▼

              Observability       Security

                Dashboard          Overview



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

| Frontend | React, Vite |

| Web Server Frontend | Nginx |

| Backend | Node.js, Express |

| Banco de dados | PostgreSQL |

| Cache | Redis |

| Testes | Jest |

| Qualidade Frontend | Vite Build |

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

- health check;

- frontend React integrado à API REST;

- Dashboard consolidado;

- gerenciamento de categorias;

- gerenciamento de produtos associados a categorias;

- gerenciamento de clientes;

- criação e acompanhamento de pedidos;

- cálculo do valor total do pedido;

- atualização de estoque;

- transição de status do pedido;

- métricas de observabilidade;

- métricas consolidadas de segurança;

- testes automatizados;

- dashboard operacional;

- dashboard de segurança.

Além das funcionalidades da aplicação, o projeto implementa uma camada integrada de **DevOps, DevSecOps, Observabilidade e IaC**.

---

## 🔄 Fluxo funcional validado

A integração entre o frontend React e a API REST foi validada de ponta a ponta.

Durante a validação funcional foi realizado o seguinte fluxo:

1. criação de uma categoria;
2. cadastro de produto associado à categoria;
3. cadastro de cliente;
4. criação de pedido associado ao cliente e ao produto;
5. cálculo automático do valor total do pedido;
6. atualização do estoque após a criação do pedido;
7. alteração do status do pedido de **PENDENTE** para **CONFIRMADO**.

No cenário de validação, um produto com estoque inicial de `10` unidades foi utilizado em um pedido de `1` unidade. Após a criação do pedido, o estoque foi atualizado para `9`, e o valor total calculado foi de **R$ 3.499,90**.

O teste confirmou o fluxo:

```text
Frontend React
      │
      ▼
API REST /api/v1
      │
      ▼
Regras de negócio
      │
      ▼
PostgreSQL
      │
      ▼
Resposta ao Frontend
```

O Dashboard consolidou os dados persistidos de categorias, produtos, clientes e pedidos, confirmando a integração funcional da aplicação.

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

├── docs/

│   └── images/

│       └── ecommerce-devops-observability.png

│

├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ConfirmDialog.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   └── Toast.jsx
│   │   ├── pages/
│   │   │   ├── Categories.jsx
│   │   │   ├── Customers.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── Products.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── categoryService.js
│   │   │   ├── customerService.js
│   │   │   ├── orderService.js
│   │   │   └── productService.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── monitoring/

│   ├── grafana/

│   │   ├── dashboards/

│   │   │   ├── ecommerce-observability.json

│   │   │   └── ecommerce-security-overview.json

│   │   │

│   │   └── provisioning/

│   │       ├── dashboards/

│   │       │   └── dashboards.yml

│   │       └── datasources/

│   │           └── prometheus.yml

│   │

│   └── prometheus/

│       └── prometheus.yml

│

├── security/

│   ├── security-summary.json

│   └── reports/                 # relatórios locais ignorados pelo Git

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

│

├── .dockerignore

├── .env.example

├── .gitignore

├── docker-compose.yml

├── Dockerfile

├── jest.config.js

├── package-lock.json

├── package.json

└── README.md

```

---

# 🚀 Execução do projeto

## 1. Pré-requisitos

Para executar o projeto localmente:

- Git;

- Docker;

- Docker Compose;

- Node.js;

- npm;

- Terraform, para os testes de IaC;

- LocalStack configurado para a etapa de infraestrutura.

---

## 2. Clonar o repositório

```bash

git clone https://github.com/alexsabrasil/devops-infra-observability.git

cd devops-infra-observability

```

---

## 3. Configurar variáveis de ambiente

Utilize o arquivo:

```text

.env.example

```

como referência para criar o `.env` local.

O `.env` não é versionado.

Credenciais e tokens reais não devem ser armazenados no repositório.

---

## 4. Subir a stack

```bash

docker compose up -d --build

```

A stack contém:

| Serviço | Porta local | Função |

|---|---:|---|

| Frontend React | 8080 | Interface da aplicação |

| API Node.js | 3000 | Backend |

| PostgreSQL | 5433 | Persistência |

| Redis | 6379 | Cache |

| Prometheus | 9090 | Coleta de métricas |

| Grafana | 3001 | Dashboards |

| LocalStack | 4566 | Serviços AWS simulados |

Verifique os containers:

```bash

docker compose ps

```

---

# 🌐 Endpoints e interfaces

## Frontend React

```text

http://localhost:8080

```

O frontend apresenta o painel administrativo do e-commerce e consome a API REST para gerenciar categorias, produtos, clientes e pedidos.

---

## Health Check

```text

http://localhost:3000/health

```

Exemplo de retorno:

```json

{

  "status": "ok",

  "timestamp": "...",

  "uptime": 123.45

}

```

---

## Swagger

```text

http://localhost:3000/api-docs/

```

---

## Métricas

```text

http://localhost:3000/metrics

```

---

## Prometheus

```text

http://localhost:9090

```

---

## Grafana

```text

http://localhost:3001

```

---

# 🧪 Testes automatizados

Os testes da API utilizam Jest.

```bash

npm test

```

Resultado validado:

```text

Test Suites: 6 passed, 6 total

Tests:       77 passed, 77 total

```

**77/77 testes aprovados.**

---

# ⚛️ Validação do Frontend React

O frontend possui validação de build antes da publicação.

```bash
cd frontend
npm ci
npm run build
```

Validação realizada:

```text
Vite Build   ✅
```

O build de produção gera os artefatos em:

```text
frontend/dist/
```

A execução final do GitHub Actions também validou o frontend com sucesso antes das etapas de segurança e publicação das imagens.

---

# 🐳 Containerização

A aplicação utiliza imagens separadas para backend e frontend.

## API

A API utiliza um Dockerfile baseado em Node.js.

Imagem local:

```text

ecommerce-api:1.0

```

## Frontend

O frontend utiliza build do React/Vite e é servido por Nginx.

Imagem local validada:

```text

ecommerce-frontend:1.0

```

O frontend está integrado ao `docker-compose.yml` e é disponibilizado em:

```text

http://localhost:8080

```

---

# 📦 Docker Hub

As imagens da solução estão publicadas em repositórios independentes.

## API

```text

https://hub.docker.com/r/alexsasec/devops-infra-observability-api

```

Imagem:

```text

alexsasec/devops-infra-observability-api

```

## Frontend React

```text

https://hub.docker.com/r/alexsasec/devops-infra-observability-frontend

```

Imagem:

```text

alexsasec/devops-infra-observability-frontend

```

A publicação automatizada utiliza:

```text

latest

<github.sha>

```

A tag baseada no SHA do commit permite relacionar uma imagem publicada ao código que originou aquele build.

O frontend também possui a versão manual validada:

```text

1.0

```

---

# 🔄 CI/CD com GitHub Actions

O workflow está localizado em:

```text

.github/workflows/ci-cd.yml

```

A pipeline é executada em pushes para a branch `main` e também pode ser iniciada manualmente por `workflow_dispatch`.

## Fluxo atual

```text

                         PUSH / MAIN

                              │

                ┌─────────────┴─────────────┐

                ▼                           ▼

          TEST API                 VALIDATE FRONTEND

          npm ci                   npm ci

          npm test                 npm ci

          77 testes                npm run build

                │                           │

                └─────────────┬─────────────┘

                              ▼

                     SECURITY - SEMGREP

                              │

                              ▼

                  BUILD API + TRIVY SCAN

                              │

                              ▼

                 PUBLISH DOCKER IMAGES

                      ┌───────┴───────┐

                      ▼               ▼

                  API Image      Frontend Image

                      │               │

                      └──── Docker Hub ┘

```

A execução final validada, **workflow #15**, associada ao commit `753889a` (`feat: integrate official ecommerce frontend`), concluiu todos os jobs com sucesso:

```text

Test API                         ✅

Validate React Frontend          ✅

Security - Semgrep SAST          ✅

Build API and Trivy Security Scan ✅

Publish API and Frontend Images  ✅

```

Essa execução demonstra que uma alteração integrada à `main` passa por validações automáticas antes da publicação das imagens.

---

# 🔐 DevSecOps

A segurança foi integrada ao projeto em diferentes pontos do ciclo de desenvolvimento.

```text

Código

  │

  ▼

Semgrep

SAST

  │

  ▼

Build da API

  │

  ▼

Trivy

Container / Components

  │

  ▼

Docker Hub

Aplicação em execução

  │

  ▼

OWASP ZAP

DAST

```

Cada ferramenta atua em uma camada diferente.

---

## 🔎 Semgrep - SAST

O Semgrep realiza análise estática do código.

Configuração:

```text

.github/security/semgrep.yml

```

### Baseline inicial

```text

40 arquivos analisados

3 regras

0 findings

```

### Validação controlada

Foi introduzido temporariamente um código inseguro utilizando:

```javascript

eval(input)

```

O Semgrep detectou corretamente:

```text

javascript-eval-detection

1 Code Finding

Blocking

```

Após a validação, o código foi removido e o scan retornou:

```text

0 findings

```

Isso demonstrou que o controle era capaz de detectar o padrão inseguro configurado.

---

## 🛡️ Trivy - Container Security

O Trivy foi utilizado para analisar a imagem da API e seus componentes.

Resultado do baseline validado:

| Severidade | Findings |

|---|---:|

| Critical | 1 |

| High | 23 |

| Medium | 20 |

| Low | 35 |

| **Total** | **79** |

Esses valores representam **findings identificados pelo scanner**, e não devem ser interpretados automaticamente como 79 vulnerabilidades exploráveis.

O finding Critical investigado foi:

```text

CVE-2026-59873

```

Pacote:

```text

tar

```

Versão observada:

```text

6.2.1

```

Versão indicada pelo scanner como corrigida:

```text

7.5.19

```

A investigação mostrou que o componente estava associado ao npm global da imagem base Node.js, e não às dependências diretas da aplicação.

O risco foi documentado como baseline e risco residual, evitando uma alteração não validada que pudesse comprometer a estabilidade da aplicação.

---

## 🌐 OWASP ZAP - DAST

O OWASP ZAP foi utilizado como baseline de análise dinâmica da aplicação em execução.

Resultado:

```text

PASS      65

WARN       2

FAIL       0

```

Os dois WARN observados foram:

```text

Storable and Cacheable Content

Cross-Domain Misconfiguration

```

Os avisos estavam relacionados às respostas observadas durante o baseline e foram mantidos como findings para análise.

Os resultados do ZAP não foram classificados automaticamente como vulnerabilidades confirmadas.

---

# 📊 Observabilidade

A API utiliza `prom-client` para exposição de métricas compatíveis com Prometheus.

Endpoint:

```text

/metrics

```

Entre as métricas utilizadas estão:

```text

ecommerce_http_requests_total

ecommerce_http_request_duration_seconds

ecommerce_security_findings

```

---

## Prometheus

Configuração:

```text

monitoring/prometheus/prometheus.yml

```

O Prometheus realiza o scrape da API no endpoint:

```text

/metrics

```

Target validado:

```text

ecommerce-api

State: UP

```

---

# 📈 Grafana

O Grafana utiliza o Prometheus como Data Source.

Configuração do Data Source:

```text

monitoring/grafana/provisioning/datasources/prometheus.yml

```

Provisionamento dos dashboards:

```text

monitoring/grafana/provisioning/dashboards/dashboards.yml

```

Dashboards versionados:

```text

monitoring/grafana/dashboards/ecommerce-observability.json

monitoring/grafana/dashboards/ecommerce-security-overview.json

```

Os dashboards são provisionados automaticamente quando o ambiente é iniciado.

---

## 📊 E-Commerce API - Observability Dashboard

O dashboard operacional apresenta:

- taxa de requisições HTTP;

- requisições por status HTTP;

- tempo médio de resposta;

- disponibilidade da API.

Consultas utilizadas incluem:

```promql

sum(rate(ecommerce_http_requests_total[1m]))

```

```promql

sum by (status_code) (

  rate(ecommerce_http_requests_total[1m])

)

```

```promql

sum(rate(ecommerce_http_request_duration_seconds_sum[1m]))

/

sum(rate(ecommerce_http_request_duration_seconds_count[1m]))

```

```promql

up{job="ecommerce-api"}

```

---

# 🛡️ Security Observability

Além das métricas operacionais, a API expõe métricas consolidadas do último baseline de segurança validado.

Métrica:

```text

ecommerce_security_findings

```

Exemplo:

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

Esses valores representam um **snapshot do último baseline validado**.

Os scanners não são executados em tempo real pelo Prometheus.

---

## 🛡️ E-Commerce API - Security Overview

O dashboard de segurança apresenta:

### Trivy

```text

Critical: 1

High:     23

Medium:   20

Low:      35

```

Além dos indicadores individuais, existe uma visualização da distribuição dos findings por severidade.

### Semgrep

```text

SAST Findings: 0

```

### OWASP ZAP

```text

FAIL: 0

PASS: 65

WARN: 2

```

A finalidade do dashboard é fornecer uma visão consolidada do baseline de segurança do projeto.

---

# 🏗️ Infraestrutura como Código

O projeto utiliza Terraform para demonstrar provisionamento declarativo de infraestrutura.

Arquivos:

```text

terraform/

├── .terraform.lock.hcl

├── main.tf

├── outputs.tf

├── providers.tf

└── variables.tf

```

---

## LocalStack

O LocalStack é utilizado para simular serviços AWS localmente.

Endpoint:

```text

http://localhost:4566

```

Serviço utilizado:

```text

S3

```

Recurso provisionado:

```text

ecommerce-observability-assets

```

Com versionamento habilitado.

---

## Terraform

Inicialização:

```bash

cd terraform

terraform init

```

Planejamento:

```bash

terraform plan

```

Aplicação:

```bash

terraform apply

```

Recursos validados:

```text

aws_s3_bucket.observability

aws_s3_bucket_versioning.observability

```

Após o provisionamento, uma segunda execução de `terraform plan` apresentou:

```text

No changes. Your infrastructure matches the configuration.

```

Isso demonstra que o estado desejado e o estado provisionado estavam alinhados no momento da validação.

---

# 🔒 Boas práticas de segurança

O projeto adota práticas como:

- remoção de senha hardcoded da configuração da aplicação;

- `.env` ignorado pelo Git;

- `.env.example` sem credenciais reais;

- token do LocalStack mantido apenas no ambiente local;

- credenciais do Docker Hub armazenadas como GitHub Secrets;

- `.terraform/` e arquivos `tfstate` ignorados;

- `.terraform.lock.hcl` versionado;

- relatórios brutos de scanners não versionados;

- resumo sanitizado de segurança versionado;

- análise SAST integrada à pipeline;

- análise de imagem com Trivy;

- baseline DAST com OWASP ZAP;

- tags de imagem vinculadas ao SHA do commit.

---

# 🔗 Repositórios e artefatos

## Código-fonte

GitHub:

```text

https://github.com/alexsabrasil/devops-infra-observability

```

## Docker Hub - API

```text

https://hub.docker.com/r/alexsasec/devops-infra-observability-api

```

## Docker Hub - Frontend

```text

https://hub.docker.com/r/alexsasec/devops-infra-observability-frontend

```

---

# ✅ Validações finais

O ambiente final foi validado com:

```text
Frontend React funcional            ✅
React + Vite Build                  ✅
Frontend em Nginx                   ✅
Frontend Docker                     ✅
Frontend no Docker Compose          ✅
Frontend → API REST                 ✅
Dashboard                           ✅
Categorias                          ✅
Produtos                            ✅
Clientes                            ✅
Pedidos                             ✅
Atualização de estoque              ✅
Transição de status do pedido       ✅
API Node.js + Express               ✅
PostgreSQL                          ✅
Redis                               ✅
Docker                              ✅
Docker Compose                      ✅
Testes automatizados                ✅ 77/77
GitHub Actions workflow #15         ✅
Semgrep SAST                        ✅
Trivy                               ✅
OWASP ZAP                           ✅
Docker Hub API                      ✅
Docker Hub Frontend                 ✅
Tags latest + commit SHA            ✅
Prometheus                          ✅
Grafana                             ✅
Observability Dashboard             ✅
Security Overview                   ✅
Provisionamento dos dashboards      ✅
Terraform                           ✅
LocalStack                          ✅
Amazon S3 simulado                  ✅
Estrutura monitoring/               ✅
Hardening de configuração           ✅
```

**Status: implementação concluída e validada.**

---

# 💼 Valor técnico da solução

O projeto demonstra que uma aplicação não precisa ser tratada apenas como código-fonte.

Ao integrar desenvolvimento, automação, segurança, observabilidade e infraestrutura, a solução passa a possuir controles capazes de:

- reduzir atividades manuais repetitivas;

- validar alterações antes da publicação;

- aumentar a rastreabilidade entre código e imagem;

- antecipar a identificação de problemas de segurança;

- fornecer visibilidade operacional;

- tornar a infraestrutura reproduzível;

- facilitar diagnóstico e tomada de decisão;

- criar uma base mais consistente para evolução da aplicação.

O foco não está apenas nas ferramentas utilizadas, mas na **integração entre elas dentro de um fluxo técnico verificável**.

---

# 📚 Aprendizados

O desenvolvimento deste projeto permitiu integrar tecnologias que normalmente são estudadas separadamente.

A aplicação tornou-se o centro de um ecossistema que envolve:

```text

Frontend

   +

Backend

   +

Dados

   +

Containers

   +

Testes

   +

CI/CD

   +

Segurança

   +

Observabilidade

   +

Infraestrutura como Código

```

Um dos principais aprendizados foi compreender que DevOps não se resume à utilização de ferramentas. O valor está na integração entre elas para criar um processo mais **automatizado, reproduzível, observável e seguro**.

A introdução dos controles DevSecOps também demonstrou que segurança não significa apenas encontrar findings. É necessário interpretar os resultados dos scanners, investigar a origem dos componentes afetados, avaliar riscos e decidir como tratá-los sem comprometer desnecessariamente a estabilidade da aplicação.

A integração do frontend React ampliou essa visão ao demonstrar um fluxo funcional completo entre interface, API, regras de negócio e persistência dentro da mesma arquitetura containerizada.

---

# 👥 Equipe

Projeto desenvolvido em equipe durante a formação em **DevOps - FAP | Aponti Academy**.

**Integrantes**

- Alexsandra Tavares

- Carlos Eduardo

- Vinicius Lacerda

---

# 🔭 Evoluções futuras

O projeto pode evoluir com:

- ampliação dos testes automatizados do frontend React;

- testes automatizados específicos para componentes do frontend;

- análise Trivy também sobre a imagem do frontend;

- política progressivamente mais restritiva para findings Critical/High;

- atualização controlada das imagens base;

- geração automática de relatórios de segurança como artifacts da pipeline;

- atualização automatizada do `security-summary.json`;

- endpoint OpenAPI JSON dedicado para ampliar a análise DAST;

- alertas operacionais e de segurança baseados em métricas;

- gerenciamento centralizado de segredos;

- implantação em infraestrutura cloud real;

- pinning de versões/digests das imagens e Actions utilizadas na pipeline.

---

<p align="center">

  <strong>E-Commerce | DevOps, DevSecOps & Observability</strong>

</p>

<p align="center">

  Projeto desenvolvido na formação DevOps • FAP • Aponti Academy

</p>

<p align="center">

  Desenvolvimento • Automação • Segurança • Infraestrutura • Observabilidade

</p>