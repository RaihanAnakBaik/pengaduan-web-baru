'use client'

import { Button, Select, SelectSection, SelectItem } from '@nextui-org/react'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
export default function WelcomePage() {
  const [selectedStation, setSelectedStation] = useState('')

  const stations = [
    { value: 'BOJ', label: 'Bekasi' },
    { value: 'CIA', label: 'Cikarang' },
    { value: 'BKS', label: 'Bekasi Timur' },
    { value: 'TMB', label: ' Tambun' },
    { value: 'CBL', label: 'Cibitung' },
    { value: 'KMT', label: 'Kemayoran' },
    { value: 'GMM', label: 'Grogol' },
    { value: 'SMG', label: 'Sudirman' },
    { value: 'HSI', label: 'Harjamukti' },
    { value: 'BST', label: 'Buaran' },
    { value: 'KRN', label: 'Kranji' },
    { value: 'RBM', label: 'Rawa Buntu' },
    { value: 'BST', label: 'Bekasi Barat' },
    { value: 'KBY', label: 'Kalibyrang' },
    { value: 'KCY', label: 'Kecapi' },
    { value: 'JTI', label: 'Jatimulya' },
    { value: 'CJM', label: 'Cipayung' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Head>
        <title>Aplikasi Pengaduan LRT Jabodebek</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8 text-center">Selamat Datang di Aplikasi Pengaduan LRT Jabodebek</h1>
      <Select
        clearable
        label="Pilih Stasiun"
        placeholder="Pilih Stasiun"
        value={selectedStation}
        onChange={(e) => setSelectedStation(e.target.value)}
        required
        >
        {stations.map((station) => (
          <SelectItem key={station.value} value={station.value}>{station.label}</SelectItem>
        ))}
      </Select>


      <Link href={`/form?station=${selectedStation}`}>
        <Button color="primary" size="lg" className="mt-4">
          Mulai Isi Form
        </Button>
      </Link>
    </div>
  )
}


