import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1F1F1F',
      color: '#FFFFFF',
      padding: '20px',
      position: 'relative',
      bottom: '0',
      width: '100%',
      marginLeft: '-10px' ,
      marginBottom:'-10px',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'flex-start' 
    }}>
      <img
        src="data:image/png;base64,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"
        alt="Logo" 
        style={{ width: '20px', marginTop:'30px', marginRight: '10px', marginLeft:'20px'}}
      />
      <span style={{ fontSize: '20px', fontWeight: 'bold', color:'#C92071', marginLeft:'45px',marginTop:'-20px' }}>Digital Store</span>
      <p style={{ marginTop: '40px', marginLeft: '20px', fontSize: '14px', textAlign: 'justify', fontWeight: 'lighter' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Et dolore quisquam illo 
        doloribus rem animi laborum <br /> placeat atque 
        cumque! Nam quam voluptates minus<br /> perspiciatis magnam atque mollitia temporibus <br /> doloremque assumenda?
      </p>

      <div style={{ display: 'flex', marginTop: '20px', width: '100%',marginLeft: '15px' }}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22c-5.15 0-9.36-4.209-9.36-9.36s4.209-9.36 9.36-9.36 9.36 4.209 9.36 9.36-4.209 9.36-9.36 9.36zm4.032-14.032c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5-.66-1.5-1.5-1.5zm-4.032 0c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.232 5c0 1.24-1.032 2.25-2.25 2.25s-2.25-1.01-2.25-2.25 1.032-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"/></svg>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.734.62-2.675.731 1.031-.615 1.826-1.587 2.201-2.744-.963.573-2.018.988-3.148 1.206-.906-.964-2.196-1.56-3.621-1.56-2.742 0-4.957 2.238-4.957 5 0 .39.045.765.127 1.128-4.116-.206-7.76-2.178-10.2-5.182-.426.732-.669 1.577-.669 2.477 0 1.706.87 3.206 2.189 4.092-.807-.026-1.566-.247-2.229-.617v.063c0 2.395 1.699 4.394 3.951 4.849-.414.112-.848.171-1.296.171-.316 0-.623-.031-.927-.086.623 1.956 2.434 3.384 4.574 3.423-1.678 1.314-3.8 2.099-6.073 2.099-.394 0-.784-.023-1.167-.067 2.162 1.384 4.724 2.193 7.48 2.193 8.981 0 13.877-7.441 13.877-13.885 0-.211-.004-.423-.013-.634.951-.688 1.773-1.548 2.42-2.529z"/></svg>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.824 0-1.675.758-1.675 1.675v20.65c0 .916.851 1.675 1.675 1.675h11.582v-9.515h-3.098v-3.585h3.098v-2.653c0-3.071 1.735-4.735 4.46-4.735 1.285 0 2.679.228 2.679.228v2.947h-1.505c-1.487 0-1.95.928-1.95 1.885v2.252h3.481l-.556 3.585h-2.925v9.515h5.733c.825 0 1.675-.759 1.675-1.675v-20.65c0-.917-.85-1.675-1.675-1.675z"/></svg>
        </a>
      </div> 
      <div style={{marginLeft:'550px'}}>
       <p style={{marginTop:"-195px", fontSize: '18px', fontWeight: 'bold'}}>Informação</p>
       <p style={{ marginTop: '20px', fontSize: '14px', fontWeight: 'normal' ,marginTop: '35px'}}>
   Sobre Drip Store
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
    Segurança
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
   Wishlist
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
   Trabalhe Conosco
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
Meus Pedidos
  </p>
      </div>
      <div style={{marginLeft:'800px'}}>
       <p style={{marginTop:"-195px", fontSize: '18px', fontWeight: 'bold'}}>Categorias</p>
       <p style={{ fontSize: '14px', fontWeight: 'normal' ,marginTop: '35px'}}>
   Camisetas
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
    Calças
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
   Bonés
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
   Headphones
  </p>

  <p style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'normal' }}>
Tênis
  </p>
      </div>
     <div style={{marginLeft:'1100px'}}>
      <p style={{marginTop:"-195px", fontSize: '18px', fontWeight: 'bold'}}>Contato</p>
      <p style={{ marginTop: '35px', fontSize: '14px', fontWeight: 'normal' }}>
   Av. Santos Dumont,1500-1 <br />andar-Aldeota, Fortaleza- <br />CE, 60150-161 <br /><br /> (85)3051-3411
  </p>
     </div>
     <hr style={{width:'1200px' }}></hr>
     <div >
      <p style={{marginLeft:'600px'}}>@ 2022 Digital College</p>
     </div>
    </footer>
  );
};

export default Footer;
