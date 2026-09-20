import React from 'react';
import './ArchitectureDiagram.css';

const ArchitectureDiagram = ({ project, isHeader = false }) => {
  if (!project) return null;

  if (project.id === 'lynkist') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Lynkist Technical Flow</div>
        <div className="arch-node">WhatsApp / Meta APIs</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">FastAPI Backend</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">PostgreSQL</div>
          <div className="arch-node">Redis</div>
          <div className="arch-node">Celery</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Dashboard / Automation</div>
      </div>
    );
  }

  if (project.id === 'real-time-trading-poc') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Real-Time Data Flow</div>
        <div className="arch-node">Broker / Real-Time Data</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Go Service</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Goroutines</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Redis</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Django / PostgreSQL</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">WebSocket</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">JavaScript UI</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Market Data / Order Updates</div>
      </div>
    );
  }

  if (project.id === 'gold-loan-management') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Gold Loan System Flow</div>
        <div className="arch-row">
          <div className="arch-node">Loan Application</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Valuation</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Approval</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Customer</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Repayment</div>
        <div className="arch-support-label">Supporting Processing</div>
        <div className="arch-row">
          <div className="arch-node support">Redis</div>
          <div className="arch-node support">Celery</div>
        </div>
      </div>
    );
  }

  if (project.id === 'automated-forex-crypto') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Automated Trading Flow</div>
        <div className="arch-row">
          <div className="arch-node">Market Data</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">FastAPI</div>
          <div className="arch-arrow horizontal">←</div>
          <div className="arch-node">Tkinter UI</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Trading Conditions</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Order Execution</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Stop Loss / Exit</div>
        </div>
        <div className="arch-support-label">Supporting Infrastructure</div>
        <div className="arch-row">
          <div className="arch-node support">Dhan</div>
          <div className="arch-node support">Angel One</div>
          <div className="arch-node support">PostgreSQL</div>
        </div>
      </div>
    );
  }

  if (project.id === 'indian-market-trading') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Indian Market Trading Flow</div>
        <div className="arch-row">
          <div className="arch-node">NSE / BSE</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Broker APIs</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Django</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Trading System</div>
        <div className="arch-support-label">Supporting Processing</div>
        <div className="arch-row">
          <div className="arch-node support">Cron Jobs</div>
        </div>
      </div>
    );
  }

  if (project.id === 'nlp-chatbot') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">NLP Chatbot Flow</div>
        <div className="arch-row">
          <div className="arch-node">User Query</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">FastAPI</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">NLP / Semantic Search</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Response</div>
        </div>
        <div className="arch-support-label">Supporting Knowledge Flow</div>
        <div className="arch-row">
          <div className="arch-node support">Admin</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node support">Knowledge Update</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node support">MySQL KB</div>
        </div>
      </div>
    );
  }

  if (project.id === 'school-crm') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">School CRM Architecture</div>
        <div className="arch-row">
          <div className="arch-node">Students / Staff</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Biometric Attendance</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Django</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">MySQL</div>
        </div>
        <div className="arch-support-label">Supporting Processing</div>
        <div className="arch-row">
          <div className="arch-node support">Cron Jobs</div>
        </div>
      </div>
    );
  }

  if (project.id === 'job-app-payment') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Job & Payment Flow</div>
        <div className="arch-row">
          <div className="arch-node">Job Application</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Django</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Processing</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Razorpay</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Payment Webhook</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Confirmation</div>
        </div>
      </div>
    );
  }

  if (project.id === 'market-ml-analysis') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Market ML Flow</div>
        <div className="arch-row">
          <div className="arch-node">Stock / Investment</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Historical Data</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">XGBoost</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">1/7 Day Analysis</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">ROI / Loss</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Graph / Table</div>
        </div>
      </div>
    );
  }

  if (project.id === 'velomiq') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">Enterprise Email Flow</div>
        <div className="arch-row">
          <div className="arch-node">Campaign & Template</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Celery Queue</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Email Provider</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Sending</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Deliverability</div>
        </div>
        <div className="arch-support-label">Supporting Infrastructure</div>
        <div className="arch-row">
          <div className="arch-node support">Suppression</div>
          <div className="arch-node support">Domains</div>
          <div className="arch-node support">IP Reputation</div>
          <div className="arch-node support">DMARC</div>
        </div>
      </div>
    );
  }

  if (project.id === 'ai-job-app-platform') {
    return (
      <div className="arch-diagram arch-clean">
        <div className="arch-title">AI Application Flow</div>
        <div className="arch-row">
          <div className="arch-node">Resume</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Data Extraction</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">Job Discovery (Adzuna)</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Job Matching</div>
        </div>
        <div className="arch-arrow">↓</div>
        <div className="arch-node">Application Preparation</div>
        <div className="arch-arrow">↓</div>
        <div className="arch-row">
          <div className="arch-node">User Review</div>
          <div className="arch-arrow horizontal">→</div>
          <div className="arch-node">Submit</div>
        </div>
        <div className="arch-support-label">Supporting AI Agent</div>
        <div className="arch-row">
          <div className="arch-node support">Gemini (Data Correction)</div>
        </div>
      </div>
    );
  }

  if (isHeader) {
     return null;
  }

  return (
    <div className="arch-diagram generic-identity">
      <div className="identity-content">
        <i className='bx bx-code-alt identity-icon'></i>
        <h3 className="identity-title">{project.title}</h3>
        <span className="identity-category">{project.projectType} Project</span>
        {project.technologies && project.technologies.length > 0 && (
          <div className="identity-tech-badge">{project.technologies[0]}</div>
        )}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
