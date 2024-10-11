// ComplaintForm.js
import React from 'react';
import { motion } from 'framer-motion';
import { Select, SelectItem, Divider, Input, Textarea, Checkbox } from '@nextui-org/react';

const ComplaintForm = (props) => {
  const [category, setCategory] = React.useState('');
  const [subCategory, setSubCategory] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [complaint, setComplaint] = React.useState('');
  const [attachment, setAttachment] = React.useState(null);
  const [canContact, setCanContact] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', category);
    formData.append('subCategory', subCategory);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('complaint', complaint);
    if (attachment) {
      formData.append('attachment', attachment);
    }
    formData.append('canContact', canContact);

    console.log({
      category,
      subCategory,
      name,
      email,
      phone,
      complaint,
      attachment,
      canContact,
    });

    if (canContact === "Ya") {
        props.onNextStep && props.onNextStep('success', 'Keluhan Anda telah berhasil dikirimkan dan akan segera menghubungi Anda.');
      } else {
        props.onNextStep && props.onNextStep('success', 'Keluhan Anda telah berhasil dikirimkan, kami menghargai umpan balik Anda.');
      }
  };

  const stationOptions = [
    { value: 'Kategori 1', label: 'Kategori 1' },
    { value: 'Kategori 2', label: 'Kategori 2' },
    { value: 'Kategori 3', label: 'Kategori 3' },
  ];

  const subCategoryOptions = [
    { value: 'Pelayanan', label: 'Pelayanan' },
    { value: 'Kebersihan', label: 'Kebersihan' },
    { value: 'Fasilitas', label: 'Fasilitas' },
  ];

  return (
    <motion.form
      className="sm:w-96 mx-auto space-y-2"
      onSubmit={handleSubmit}
    >
      <h2 style={{ fontSize: '20px' }} className="font-bold">Formulir Pengaduan</h2>
      <p className="text-xs">Layanan pengaduan untuk pelanggan LRT Jabodebek</p>
      <Divider className="my-4" />

      <Select
        isRequired
        placeholder="Pilih Stasiun"
        className="w-full"
        size="md"
        onChange={(e) => setCategory(e.target.value)}
      >
        {stationOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </Select>

      <Select
        isRequired
        placeholder="Pilih Kategori"
        className="w-full"
        size="md"
        onChange={(e) => setSubCategory(e.target.value)}
      >
        {subCategoryOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </Select>

      <Input
        isRequired
        type="name"
        label="Nama Lengkap"
        size="md"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        isRequired
        type="email"
        label="Email"
        size="md"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        isRequired
        type="number"
        label="No. Whatsapp"
        size="md"
        onChange={(e) => setPhone(e.target.value)}
      />

      <Textarea
        isRequired
        id="complaint"
        name="complaint"
        rows={3}
        label="Masukkan Keluhan Anda"
        placeholder="Silahkan berikan keluhan anda"
        className="w-full"
        size="md"
        onChange={(e) => setComplaint(e.target.value)}
      />

      <Input
        id="attachment"
        name="attachment"
        type="file"
        onChange={(e) => setAttachment(e.target.files[0])}
        className="w-full"
        size="md"
      />

      <Checkbox
        defaultSelected={canContact}
        onChange={(e) => setCanContact(e.target.checked ? "Ya" : "Tidak")}
        size="md"
        checkedColor="#960912"
      >
        Bersedia untuk dihubungi?
      </Checkbox>

      <motion.button
        type="submit"
        className="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          if (!name || !email || !phone || !complaint) {
            alert("Harap isi semua form yang diperlukan");
            e.preventDefault();
          }
        }}
      >
        Kirim
      </motion.button>
    </motion.form>  
);
};

export default ComplaintForm;

