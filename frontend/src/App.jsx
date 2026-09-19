import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiData, setApiData] = useState(null)
  const [apiStatus, setApiStatus] = useState('Verificando...')
  const [lastCheck, setLastCheck] = useState(null)

  const checkApi = async () => {
    try {
      const response = await fetch('http://localhost:3000/health')

      if (!response.ok) {
        throw new Error('API indisponível')
      }

      const data = await response.json()

      setApiData(data)
      setApiStatus(data.status === 'ok' ? 'Online' : 'Indisponível')
      setLastCheck(new Date())
    } catch {
      setApiData(null)
      setApiStatus('Indisponível')
      setLastCheck(new Date())
    }
  }

  useEffect(() => {
  const initialCheck = setTimeout(() => {
    checkApi()
  }, 0)

  const interval = setInterval(() => {
    checkApi()
  }, 15000)

  return () => {
    clearTimeout(initialCheck)
    clearInterval(interval)
  }
}, []) 

const isOnline = apiStatus === 'Online'

  return (
    <main className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">FAP • DEVOPS</p>
          <h1>E-Commerce</h1>
          <p className="subtitle">
            DevOps, DevSecOps & Observabilidade
          </p>
        </div>

        <div className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
          <span className="status-dot"></span>
          API {apiStatus}
        </div>
      </header>

      <section className="intro">
        <div>
          <p className="section-label">VISÃO OPERACIONAL</p>
          <h2>Ambiente integrado e observável</h2>
          <p>
            Frontend React conectado à API Node.js e integrado à arquitetura
            de containers, dados, segurança e observabilidade do projeto.
          </p>
        </div>

        <button onClick={checkApi}>Verificar API</button>
      </section>

      <section className="cards">
        <article className="card highlight">
          <span className="card-label">APPLICATION</span>
          <h3>Frontend</h3>
          <strong>React</strong>
          <p>Interface da aplicação executada no navegador.</p>
        </article>

        <article className="card">
          <span className="card-label">BACKEND</span>
          <h3>API</h3>
          <strong>Node.js + Express</strong>
          <p>Serviço responsável pelas regras e endpoints da aplicação.</p>
        </article>

        <article className="card">
          <span className="card-label">DATA</span>
          <h3>Persistência</h3>
          <strong>PostgreSQL + Redis</strong>
          <p>Banco de dados e camada de cache da solução.</p>
        </article>

        <article className="card">
          <span className="card-label">OBSERVABILITY</span>
          <h3>Monitoramento</h3>
          <strong>Prometheus + Grafana</strong>
          <p>Métricas e dashboards para visibilidade operacional.</p>
        </article>
      </section>

      <section className="health-panel">
        <div className="health-title">
          <div>
            <p className="section-label">HEALTH CHECK</p>
            <h2>Status da API</h2>
          </div>

          <span className={`health-value ${isOnline ? 'success' : 'failure'}`}>
            {apiStatus}
          </span>
        </div>

        <div className="health-grid">
          <div>
            <span>Status retornado</span>
            <strong>{apiData?.status ?? '—'}</strong>
          </div>

          <div>
            <span>Uptime</span>
            <strong>
              {apiData ? `${apiData.uptime.toFixed(2)} s` : '—'}
            </strong>
          </div>

          <div>
            <span>Última verificação</span>
            <strong>
              {lastCheck
                ? lastCheck.toLocaleTimeString('pt-BR')
                : '—'}
            </strong>
          </div>
        </div>
      </section>

      <footer>
        <span>Equipe de Engenharia DevOps & DevSecOps</span>
        <span>FAP • Aponti Academy</span>
      </footer>
    </main>
  )
}

export default App