'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles.css'
import '../animations.css'

export default function LRTForm() {
  const [step, setStep] = useState('welcome')
  const [selectedStation, setSelectedStation] = useState('')

  const stations = ['Station A', 'Station B', 'Station C', 'Station D']

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep('success')
  }

  const resetForm = () => {
    setStep('welcome')
    setSelectedStation('')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="container">
      <div className="track"></div>
      <div className="train"></div>
      <div className="form-container">
        <motion.div 
          className="logo-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/image/kai-logo.png" alt="KAI Logo" width={100} height={50} />
          <Image src="/image/lrt-logo.png" alt="LRT Jabodebek Logo" width={100} height={50} />
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="content"
          >
            {step === 'welcome' && (
              <>
                <h2 className="heading">Selamat Datang</h2>
                <p className="text">
                  Sampaikan keluhan atau saran Anda dengan mudah melalui
                  aplikasi ini. Kami berkomitmen untuk meningkatkan pelayanan
                  LRT Jabodebek demi kenyamanan perjalanan Anda.
                </p>
                <div className="select-container">
                  <select
                    value={selectedStation}
                    onChange={(e) => setSelectedStation(e.target.value)}
                    className="select"
                  >
                    <option value="">Pilih Stasiun</option>
                    {stations.map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="select-icon" />
                </div>
                <motion.button
                  onClick={() => setStep('form')}
                  className="button"
                  disabled={!selectedStation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mulai <ChevronRight className="button-icon" />
                </motion.button>
              </>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit}>
                <h2 className="heading">Form Keluhan/Saran</h2>
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="station" className="label">Stasiun</label>
                  <div className="select-container">
                    <select
                      id="station"
                      value={selectedStation}
                      onChange={(e) => setSelectedStation(e.target.value)}
                      className="select"
                    >
                      <option value="">Pilih Stasiun</option>
                      {stations.map((station) => (
                        <option key={station} value={station}>
                          {station}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="select-icon" />
                  </div>
                </motion.div>
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="label">Nama</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="input"
                  />
                </motion.div>
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input"
                  />
                </motion.div>
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="label">Pesan</label>
                  <textarea
                    id="message"
                    required
                    className="textarea"
                    rows={4}
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Kirim <ChevronRight className="button-icon" />
                </motion.button>
              </form>
            )}

            {step === 'success' && (
              <motion.div
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <h2 className="heading">Terima Kasih</h2>
                <p className="text">Pesan Anda telah berhasil dikirim.</p>
                <motion.button
                  onClick={resetForm}
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Isi Formulir Kembali <ChevronRight className="button-icon" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}