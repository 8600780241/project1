import React from 'react'
import { Link } from 'react-router-dom'
const services = [
  { icon: 'storage', label: 'Storage' },
  { icon: 'networking', label: 'Networking' },
  { icon: 'ar', label: 'Virtualization' },
  { icon: 'cloud', label: 'Cloud' },
  { icon: 'digital-services', label: 'Digital Services' },
  { icon: 'eternity', label: 'DevOps' },
  { icon: 'automation', label: 'QA Automation' },
  { icon: 'ui', label: 'UI/UX' },
];

export default function Experties() {
  return (
    <>
    <div className="banner-area banner-bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner">
                <h2>Experties</h2>
                <ul className="page-title-link">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#">Experties</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
      <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <img src={`/icons/${service.icon}.png`} alt={service.label} className="service-icon" />
          <div className="service-label">{service.label}</div>
        </div>
      ))}
    </div>
      </div>
    </>
  )
}
