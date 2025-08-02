import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const LaptopPricePredictor = () => {

    const brandOptions = [
    "ASUS", "Lenovo", "HP", "Dell", "Acer", "MSI", "Samsung", "Apple", "Infinix", "Microsoft", "AVITA", "Gigabyte",
    "LG", "Honor", "iball", "Xiaomi", "Fujitsu", "Zebronics", "Wings", "Colorful", "Realme", "Micromax",
    "Coconics", "Tecno", "Smartron", "Huawei", "Razer", "VAIO", "Lava", "Nokia", "RDP"
  ];

  const processorOptions = [
  "1.6 Ghz Processor",
  "1.7 Ghz Processor",
  "1.8 Ghz Processor",
  "1.9 Ghz Processor",
  "2.0 Ghz Processor",
  "2.1 Ghz Processor",
  "2.2 Ghz Processor",
  "2.3 Ghz Processor",
  "2.4 Ghz Processor",
  "2.6 Ghz Processor",
  "3.0 Ghz Processor",
  "3.3 Ghz Processor",
  "3.4 Ghz Processor",
  "AMD Dual-Core A4 APU",
  "AMD Dual-Core A6 APU",
  "AMD Dual-Core A9 APU",
  "AMD Dual-Core A9 APU Processor",
  "AMD Dual-Core APU",
  "AMD Dual-Core Athlon",
  "AMD Dual-Core Athlon Processor",
  "AMD Dual-Core E1 APU",
  "AMD Dual-Core Ryzen 3",
  "AMD Dual-Core Ryzen 3 Processor",
  "AMD Hexa-Core Ryzen 5",
  "AMD Hexa-Core Ryzen 5 Processor",
  "AMD Hexadeca-Core Ryzen 9",
  "AMD Octa-Core Ryzen 7",
  "AMD Octa-Core Ryzen 7 Pro",
  "AMD Octa-Core Ryzen 7 Processor",
  "AMD Octa-Core Ryzen 9",
  "AMD Octa-Core Ryzen 9 Processor",
  "AMD Quad-Core A10 APU",
  "AMD Quad-Core A12 APU",
  "AMD Quad-Core A6 APU",
  "AMD Quad-Core A8 APU",
  "AMD Quad-Core APU",
  "AMD Quad-Core E2 APU",
  "AMD Quad-Core Ryzen 3",
  "AMD Quad-Core Ryzen 3 Processor",
  "AMD Quad-Core Ryzen 5",
  "AMD Quad-Core Ryzen 5 Processor",
  "AMD Quad-Core Ryzen 7",
  "AMD Quad-Core Ryzen 7 Processor",
  "Apple M1",
  "Apple M1 Pro",
  "Apple M1 Processor",
  "Apple M2 Max",
  "Apple M2 Max Processor",
  "Apple M2 Processor",
  "Apple M2 Pro",
  "Apple M3 Pro",
  "Intel Atom Quad-Core",
  "Intel Celeron Dual-Core",
  "Intel Celeron Dual-Core Processor",
  "Intel Celeron Quad-Core",
  "Intel Core 3 (Series 1)",
  "Intel Core 5 (Series 1)",
  "Intel Core 7 (Series 1)",
  "Intel Core i3 (10th Gen)",
  "Intel Core i3 (10th Gen) Processor",
  "Intel Core i3 (11th Gen)",
  "Intel Core i3 (11th Gen) Processor",
  "Intel Core i3 (12th Gen)",
  "Intel Core i3 (12th Gen) Processor",
  "Intel Core i3 (13th Gen)",
  "Intel Core i3 (13th Gen) Processor",
  "Intel Core i3 (3rd Gen)",
  "Intel Core i3 (4th Gen)",
  "Intel Core i3 (5th Gen)",
  "Intel Core i3 (6th Gen)",
  "Intel Core i3 (7th Gen)",
  "Intel Core i3 (8th Gen)",
  "Intel Core i5 (10th Gen)",
  "Intel Core i5 (10th Gen) Processor",
  "Intel Core i5 (11th Gen)",
  "Intel Core i5 (11th Gen) Processor",
  "Intel Core i5 (12th Gen)",
  "Intel Core i5 (12th Gen) Processor",
  "Intel Core i5 (13th Gen)",
  "Intel Core i5 (13th Gen) Processor",
  "Intel Core i5 (1st Gen)",
  "Intel Core i5 (4th Gen)",
  "Intel Core i5 (5th Gen)",
  "Intel Core i5 (6th Gen)",
  "Intel Core i5 (7th Gen)",
  "Intel Core i5 (8th Gen)",
  "Intel Core i5 (9th Gen)",
  "Intel Core i5 (9th Gen) Processor",
  "Intel Core i7 (10th Gen)",
  "Intel Core i7 (10th Gen) Processor",
  "Intel Core i7 (11th Gen)",
  "Intel Core i7 (11th Gen) Processor",
  "Intel Core i7 (12th Gen)",
  "Intel Core i7 (12th Gen) Processor",
  "Intel Core i7 (13th Gen)",
  "Intel Core i7 (13th Gen) Processor",
  "Intel Core i7 (14th Gen)",
  "Intel Core i7 (4th Gen)",
  "Intel Core i7 (5th Gen)",
  "Intel Core i7 (6th Gen)",
  "Intel Core i7 (7th Gen)",
  "Intel Core i7 (8th Gen)",
  "Intel Core i7 (9th Gen)",
  "Intel Core i9 (10th Gen)",
  "Intel Core i9 (11th Gen)",
  "Intel Core i9 (12th Gen)",
  "Intel Core i9 (13th Gen)",
  "Intel Core i9 (13th Gen) Processor",
  "Intel Core i9 (14th Gen)",
  "Intel Core i9 (14th Gen) Processor",
  "Intel Core i9 (8th Gen)",
  "Intel Core i9 (9th Gen)",
  "Intel Core M3 (6th Gen)",
  "Intel Core M3 (7th Gen)",
  "Intel Core M5 (6th Gen)",
  "Intel Core Ultra 5",
  "Intel Core Ultra 7",
  "Intel Core Ultra 9",
  "Intel Pentium Dual-Core",
  "Intel Pentium Gold",
  "Intel Pentium Quad-Core",
  "Intel Pentium Quad-Core Processor",
  "MediaTek Octa-core",
  "Microsoft SQ1 Processor",
  "Qualcomm Snapdragon Octa-Core"
];

const ramTypeOptions = [
  "DDR2 RAM",
  "DDR3 RAM",
  "DDR4 RAM",
  "DDR5 RAM",
  "LPDDR3 RAM",
  "LPDDR4 RAM",
  "LPDDR4X RAM",
  "LPDDR5 RAM",
  "LPDDR5X RAM",
  "RAM"
];

const diplayTypeOptions = [
  'LCD',
  'LED'
]

const gpuOptions = [
  "Arc",
  "GeForce GTX 1050 GPU, 4 GB",
  "GeForce GTX 1060 GPU, 6 GB",
  "GeForce GTX 1650 GPU, 4 GB",
  "GeForce MX150 GPU, 2 GB",
  "GeForce MX250 GPU, 2 GB",
  "GeForce MX350 GPU, 2 GB",
  "GeForce MX450 GPU, 2 GB",
  "GeForce RTX 2050 GPU, 4 GB",
  "GeForce RTX 3050 GPU, 4 GB",
  "GeForce RTX 3050 GPU, 6 GB",
  "GeForce RTX 3050 Ti GPU, 4 GB",
  "GeForce RTX 3060 GPU, 6 GB",
  "GeForce RTX 3070 GPU, 8 GB",
  "GeForce RTX 3070 Ti GPU, 8 GB",
  "GeForce RTX 4050 GPU, 6 GB",
  "GeForce RTX 4060 GPU, 8 GB",
  "GeForce RTX 4070 GPU, 8 GB",
  "Geforce GTX 1650 GPU, 4 GB",
  "Geforce GTX 1650 Ti GPU, 4 GB",
  "Geforce MX150 GPU, 2 GB",
  "HD",
  "HD 500",
  "HD 520",
  "HD 620",
  "HD Graphics",
  "Integrated",
  "Iris Plus",
  "Iris Xe",
  "Radeon",
  "Radeon 520 GPU, 2 GB",
  "Radeon R2",
  "Radeon R4",
  "Radeon R5",
  "Radeon Vega 3",
  "Radeon Vega 8",
  "UHD",
  "UHD 600",
  "UHD 620",
  "UHD Graphics"
];

  const gpuBrandOptions = [
  "AMD",
  "Apple",
  "ARM",
  "ATI",
  "Intel",
  "MediaTek",
  "Microsoft",
  "NVIDIA",
  "Qualcomm"
];


  const [form, setForm] = useState({
    Brand: 'Lenovo',
    Processor_Name: '',
    RAM_Expandable: '',
    RAM_Expandable_Input: '0',
    RAM: '',
    RAM_TYPE: '',
    Ghz: '',
    Display_type: '',
    Display: '',
    GPU: '',
    GPU_Brand: '',
    SSD: '',
    HDD: '',
    Adapter: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);




  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  try {
    // Only send necessary fields (filtering out RAM_Expandable_Input)
    const payload = { ...form };
    delete payload.RAM_Expandable_Input;

    const response = await axios.post('http://127.0.0.1:5000/recommend', {
      features: Object.values(payload)
    });

    setPrediction(response.data.predicted_price);
  } catch (err) {
    setError(err.response?.data?.error || 'Something went wrong');
  }
};


return (
  <div className="predictor-container">
    <h2>Laptop Price Predictor</h2>
    <form onSubmit={handleSubmit}>
      {/* Brand */}
      <div>
        <label>Brand</label>
        <select name="Brand" value={form.Brand} onChange={handleChange}>
          {brandOptions.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Processor */}
      <div>
        <label>Processor</label>
        <select name="Processor_Name" value={form.Processor_Name} onChange={handleChange}>
          {processorOptions.map((processor) => (
            <option key={processor} value={processor}>{processor}</option>
          ))}
        </select>
      </div>

      {/* RAM Type */}
      <div>
        <label>RAM Type</label>
        <select name="RAM_TYPE" value={form.RAM_TYPE} onChange={handleChange}>
          {ramTypeOptions.map((ram) => (
            <option key={ram} value={ram}>{ram}</option>
          ))}
        </select>
      </div>

      {/* RAM Expandable */}
      <div>
        <label>RAM Expandable</label>
        <input
          type="number"
          name="RAM_Expandable_Input"
          min="0"
          value={form.RAM_Expandable_Input}
          onChange={(e) => {
            const val = e.target.value;
            setForm((prev) => ({
              ...prev,
              RAM_Expandable_Input: val,
              RAM_Expandable: val === '0' || val === '' ? 'Not Expandable' : `${val} GB Expandable`
            }));
          }}
        />
        <div className="text-sm">{form.RAM_Expandable}</div>
      </div>

      {/* Display Type */}
      <div>
        <label>Display Type</label>
        <select name="Display_type" value={form.Display_type} onChange={handleChange}>
          {diplayTypeOptions.map((disp) => (
            <option key={disp} value={disp}>{disp}</option>
          ))}
        </select>
      </div>

      {/* GPU */}
      <div>
        <label>GPU</label>
        <select name="GPU" value={form.GPU} onChange={handleChange}>
          {gpuOptions.map((gpu) => (
            <option key={gpu} value={gpu}>{gpu}</option>
          ))}
        </select>
      </div>

      {/* GPU Brand */}
      <div>
        <label>GPU Brand</label>
        <select name="GPU_Brand" value={form.GPU_Brand} onChange={handleChange}>
          {gpuBrandOptions.map((gpu_b) => (
            <option key={gpu_b} value={gpu_b}>{gpu_b}</option>
          ))}
        </select>
      </div>

      {/* RAM */}
      <div>
        <label>RAM (GB)</label>
        <input
          type="number"
          name="RAM"
          value={form.RAM}
          onChange={handleChange}
          placeholder="e.g., 8"
        />
      </div>

      {/* GHz */}
      <div>
        <label>Processor Speed (GHz)</label>
        <input
          type="number"
          step="0.1"
          name="Ghz"
          value={form.Ghz}
          onChange={handleChange}
          placeholder="e.g., 2.3"
        />
      </div>

      {/* SSD */}
      <div>
        <label>SSD (GB)</label>
        <input
          type="number"
          name="SSD"
          value={form.SSD}
          onChange={handleChange}
          placeholder="e.g., 512"
        />
      </div>

      {/* HDD */}
      <div>
        <label>HDD (GB)</label>
        <input
          type="number"
          name="HDD"
          value={form.HDD}
          onChange={handleChange}
          placeholder="e.g., 1000"
        />
      </div>

      {/* Adapter */}
      <div>
        <label>Adapter Power (W)</label>
        <input
          type="number"
          step="0.1"
          name="Adapter"
          value={form.Adapter}
          onChange={handleChange}
          placeholder="e.g., 65.0"
        />
      </div>

      {/* Display */}
      <div>
        <label>Display Size (inches)</label>
        <input
          type="number"
          name="Display"
          value={form.Display}
          onChange={handleChange}
          placeholder="e.g., 15"
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Predict Price</button>
    </form>

    {/* Prediction Result */}
    {prediction && (
      <div className="result">
        Predicted Price: ₹{prediction}
      </div>
    )}

    {/* Error Message */}
    {error && (
      <div className="error">
        Error: {error}
      </div>
    )}
  </div>
);


};

export default LaptopPricePredictor;
