'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Background from '../components/background'
import Form  from '../components/form'
import '../styles.css'
import '../animations.css'

export default function LRTForm() {
  const [step, setStep] = useState('welcome')
  const [successMessage, setSuccessMessage] = useState('');
  const onNextStep = (step, message) => {
    setStep(step);
    setSuccessMessage(message);
  };

  const resetForm = () => {
    setStep('welcome')
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.5,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="container">
      <Background />
      <div className="logo-container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <Image src="/image/kai-logo.png" alt="KAI Logo" width={100} height={50} />
          <Image src="/image/lrt-logo.png" alt="LRT Jabodebek Logo" width={130} height={82} />
        </motion.div>
      </div>
      <div className="form-container">
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
                Sampaikan keluhan atau saran Anda dengan mudah melalui aplikasi ini. 
                Kami berkomitmen untuk meningkatkan pelayanan 
                <b> LRT Jabodebek</b> demi kenyamanan perjalanan Anda.
                </p>

                <motion.button
                  onClick={() => setStep('form')}
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mulai <ChevronRight className="button-icon" />
                </motion.button>
              </>
            )}

            {step === 'form' && 
              <Form onNextStep={onNextStep}  />
            }

            {step === 'success' && (
              <motion.div
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* <div className="flex items-center justify-center">
                  <Image src="/image/check.gif" alt="Check" width={200} height={200}/>
                </div> */}
                <h2 className="heading">Terima Kasih</h2>
                <p className="text">{successMessage}</p>       
                <motion.button
                  onClick={resetForm}
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Isi Formulir Kembali
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
