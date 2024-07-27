// pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import EventList from './EventList';
import ContactForm from '../components/ContactForm';

const Home = () => (
  <Layout>
    <Hero />
    <EventList />
    <ContactForm />
  </Layout>
);

export default Home;