import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "2025’in En İyi Amazon Ürünleri ve Satış Ortaklığı Taktikleri",
    summary: "Amazon Affiliate ile pasif gelir elde etmek isteyenler için güncel ipuçları.",
    link: "#"
  },
  {
    title: "Başlangıç Seviyesi için En İyi Web Hosting Ortaklık Programları",
    summary: "Düşük rekabetli ama karlı niş hosting firmalarıyla nasıl gelir sağlanır?",
    link: "#"
  },
  {
    title: "Affiliate Linklerinizi Etkin Takip Etmenin Yolları",
    summary: "Link kısaltıcılar, analiz araçları ve dönüşüm artırıcı yöntemler.",
    link: "#"
  }
];

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}
      >
        Kazançlı Affiliate Bloguna Hoş Geldin
      </motion.h1>

      <input placeholder="E-posta adresinle abone ol" style={{ marginBottom: '1rem', width: '100%' }} />
      <button style={{ marginBottom: '2rem' }}>Abone Ol</button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {posts.map((post, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{post.title}</h2>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{post.summary}</p>
            <a href={post.link} style={{ color: 'blue', marginTop: '0.5rem', display: 'inline-block' }}>
              Devamını Oku →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
