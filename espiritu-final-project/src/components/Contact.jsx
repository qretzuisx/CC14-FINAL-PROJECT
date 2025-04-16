import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email.includes('@') || !formData.message) {
      alert('Please fill all fields correctly!');
      return;
    }
    alert('Message sent!\nWe\'ll reply soon :)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" style={{ 
      padding: '20px', 
      backgroundColor: '#f0f8ff', 
      borderRadius: '10px',
      margin: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
      <h2 style={{
        fontSize: '1.875rem',  
        fontWeight: '600',       
        color: '#3B82F6',      
        marginBottom: '1.5rem',  
}}>
  Contact Me
</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '5px',
                border: '1px solid #3498db'
              }}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '5px',
                border: '1px solid #3498db'
              }}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <textarea
              placeholder="Your Message..."
              style={{
                width: '100%',
                padding: '8px',
                height: '100px',
                border: '1px solid #3498db'
              }}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Send Message 
            </button>
          
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: '10px 20px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Clear Form 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
