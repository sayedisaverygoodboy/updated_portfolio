import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const rules = [
  "১. পিকনিক সংক্রান্ত সকল পরিকল্পনা, সময়সূচি, যাতায়াত, খাবার, বাজেট ও কার্যক্রম পরিচালনার সম্পূর্ণ দায়িত্ব পিকনিক কমিটির উপর ন্যস্ত থাকবে।",
  "২. যেকোনো অনিবার্য পরিস্থিতি, নিরাপত্তাজনিত কারণ, আবহাওয়া, বা বাস্তব পরিস্থিতির আলোকে কমিটি যেকোনও সময় যেকোনও সিদ্ধান্ত পরিবর্তন, সংশোধন বা বাতিল করার পূর্ণ অধিকার সংরক্ষণ করে।",
  "৩. কমিটির গৃহীত সিদ্ধান্ত সকল অংশগ্রহণকারীর জন্য বাধ্যতামূলক বলে গণ্য হবে।",
  "৪. পিকনিক চলাকালীন শৃঙ্খলা বজায় রাখা প্রত্যেক অংশগ্রহণকারীর দায়িত্ব। অশোভন আচরণ বা বিশৃঙ্খলা সৃষ্টি করলে কমিটি প্রয়োজনীয় ব্যবস্থা গ্রহণ করতে পারবে।",
  "৫. ব্যক্তিগত কোনো দুর্ঘটনা, হারানো জিনিস বা স্বাস্থ্যগত সমস্যার জন্য কমিটি দায়ী থাকবে না; তবে মানবিক সহায়তা প্রদান করবে।",
  "৬. নির্ধারিত সময়সূচি ও নির্দেশনা মেনে চলা সকল অংশগ্রহণকারীর জন্য আবশ্যক।",
  "৭. পিকনিক সংক্রান্ত যেকোনো অভিযোগ, প্রস্তাব বা সমস্যা সরাসরি কমিটির কাছে জানাতে হবে।",
  "৮. এই নীতিমালা লঙ্ঘন করলে কমিটি প্রয়োজনে সংশ্লিষ্ট ব্যক্তির অংশগ্রহণ বাতিল করার অধিকার রাখে।",
];

const contacts = [
  {
    name: "শাহরিয়ার ফাহিম",
    role: "সভাপতি, শীতকালীন চড়ুইভাতি ২০২৫",
    phone: "01321063723",
  },
  {
    name: "নাফিস পিকে",
    role: "সহ সভাপতি, শীতকালীন চড়ুইভাতি ২০২৫",
    phone: "01710972729",
  },
  {
    name: "আবু সাইদ",
    role: "সমন্নয়ক, শীতকালীন চড়ুইভাতি ২০২৫",
    phone: "01717963289",
  },
];

const Picnic2025 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f6f1] to-[#edfff8] px-4 py-10 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200">
        <img
          src="/images/picnic/web_picnic.png"
          alt="Picnic 2025 event poster"
          className="w-full rounded-2xl object-cover"
        />
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
          </button> 
          <div className="my-2">
            <h2 className="text-lg font-semibold text-slate-900">Amount</h2>
          <p className="mt-2 text-3xl font-bold text-slate-900">250 taka / person</p>
          <p>Guest Allowed: 1 per person, Plus 250 taka per guest</p>

          </div>
         <div className="flex">
          <a
            type="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_EVwhc6gzFVCvFSR1e7pSVdlUUI5KJ13EsR5HySJjYeCTxg/viewform?usp=dialog"
            className="mt-4 rounded-full bg-gradient-to-r from-[#ff9a8b] to-[#fecf75] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-900 shadow-lg shadow-orange-200 transition hover:opacity-95"
          >
            Register Now.
          </a>
          <NavLink 
            to={"/picnic-card"} 
            className={"ms-2 mt-4 rounded-full bg-rose-100 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200"}
          >
            Generate Picnic Photo Card
          </NavLink>
          <NavLink 
            to="/contact"
            className="ml-4 mt-4 rounded-full bg-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-300"
          >
            Contact Us
          </NavLink>

          

         </div>
        </section>



        <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200 ">
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">প্রয়োজনে</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-4">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700 shadow-sm"
              >
                <p className="font-semibold text-slate-900">{contact.name}</p>
                <p className="text-[0.8rem] text-slate-500">{contact.role}</p>
                <a href={`tel:${contact.phone}`} className="mt-2 inline-flex text-sm text-slate-800 underline decoration-dashed">
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">RSVP</h2>
          <p className="mt-2 text-sm text-slate-600">
            আপনার আসার নিশ্চয়তা দিতে উপরের QR কোড স্ক্যান করুন অথবা নিচের বাটনে ক্লিক করে ফর্ম পূরণ করুন।
          </p>
          
        </section> */}

        <section id="rules" className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Rules</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-700">
            {rules.map((rule, index) => (
              <li key={index} className="leading-relaxed">
                {rule}
              </li>
            ))}
          </ol>
        </section>
            <div className="h-40 my-40 text-center text-slate-500">...end of rules...</div>
        
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <img
            src="/images/picnic/with_qr.png"
            alt="Picnic 2025 QR card"
            className="max-h-[90vh] w-auto rounded-3xl object-contain shadow-2xl shadow-white/40"
          />
        </div>
      )}
    </div>
  );
};

export default Picnic2025;