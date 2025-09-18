"use client";

import { useState } from "react";
import { District, districts, regions } from "../store/location-data";

type FormData = {
  fullname: string;
  email: string;
  region: string;
  district: string;
};

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>({
    fullname: "",
    email: "",
    region: "",
    district: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if(name === "region") {
      setForm({...form, region: value, district: ""})
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form

        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register</h2>

        <div>
          <label className="block mb-1 font-medium">Fullname</label>
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Viloyat</label>
          <select
            name="region"
            value={form.region}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Tanlang</option>
            {regions.map((region) => (
              <option key={region.value} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Tuman</label>
          <select
            name="district"
            value={form.district}
            onChange={handleChange}
            required
            disabled={!form.region}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Tanlang</option>
            {districts[form.region]?.map((dist: District) => (
              <option key={dist.value} value={dist.value}>
                {dist.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
