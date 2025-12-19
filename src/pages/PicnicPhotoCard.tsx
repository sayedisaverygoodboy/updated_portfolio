import React, { ChangeEvent, useCallback, useState } from "react";
import { toPng } from "html-to-image";

const backgroundSrc = "/images/picnic/picnic_card.png";
const exportPNG = async () => {
  const node = document.getElementById("photo_card");

  const dataUrl = await toPng(node, {
    quality: 1,
    pixelRatio: 2, // higher = sharper image
  });

  const link = document.createElement("a");
  link.download = "export.png";
  link.href = dataUrl;
  link.click();
};
const PicnicPhotoCard = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [picnicId, setPicnicId] = useState("");

  const loadImage = useCallback((src: string) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadPrev = useCallback(async () => {
    const canvas = document.createElement("canvas");
    const width = 1076;
    const height = 1322;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const background = await loadImage(backgroundSrc);
      ctx.drawImage(background, 0, 0, width, height);
    } catch {
      ctx.fillStyle = "#fff6ed";
      ctx.fillRect(0, 0, width, height);
    }

    if (photo) {
      try {
        const avatar = await loadImage(photo);
        const avatarSize = 320;
        const avatarX = width / 2 - avatarSize / 2;
        const avatarY = 640;
        ctx.save();
        ctx.beginPath();
        ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);
        ctx.restore();
      } catch {
        ctx.fillStyle = "#e2e8f0";
        ctx.fillRect(320, 320, 260, 260);
      }
    } else {
      ctx.fillStyle = "#e2e8f0";
      ctx.fillRect(320, 320, 260, 260);
      ctx.fillStyle = "#7b7b7b";
      ctx.font = "24px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Upload photo", width / 2, 460);
    }

    ctx.textAlign = "center";
    ctx.fillStyle = "#111";
    ctx.font = "bold 42px 'Space Grotesk', sans-serif";
    ctx.fillText(name.trim() || "YOUR NAME", width / 2, 770);
    ctx.font = "24px 'Inter', sans-serif";
    ctx.fillText(`ID: ${picnicId.trim() || "TBD"}`, width / 2, 820);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `picnic-photo-card-${Date.now()}.png`;
    link.click();
  }, [photo, name, picnicId, loadImage]);

  const handleDownload= async ()=>{
   await exportPNG();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefcf7] via-[#fdf0d5] to-[#eefdff] px-4 py-12 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-200">
        <header className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Picnic 2025</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Generate your photo card</h1>
          <p className="text-sm text-slate-600">
            Upload a memory, add your name &amp; ID, and download a keepsake ready for sharing or printing.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-inner shadow-slate-100">
            <div>
              <label className="text-sm font-medium text-slate-700">Your photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 w-full rounded-xl border border-dashed border-slate-300 bg-white/80 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Ananya Rahman"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Picnic ID</label>
              <input
                type="text"
                value={picnicId}
                onChange={(event) => setPicnicId(event.target.value)}
                placeholder="e.g. ABC-2025-01"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-primary"
              />
            </div>
            <button
              onClick={handleDownload}
              className="mt-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-xl shadow-orange-200 transition hover:opacity-90"
            >
              Download photo card
            </button>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden   bg-slate-50   shadow-2xl   ">
            {/* <div className="absolute inset-0 bg-white/20" /> */}
            <div className="relative w-[400px] h-[600px] text-white " id="photo_card">
                <img src={backgroundSrc} alt="Picnic card preview" className="absolute top-0 left-0 h-full w-full object-cover" />
                {photo ? (
                    <img
                    src={photo}
                    alt="Uploaded preview"
                    className="absolute top-[130px] left-[85px] h-56 w-56 rounded-full border-4 border-white object-cover shadow-xl"
                    />
                ) : (
                    <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-white bg-white/80 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                    Upload photo
                    </div>
                )}
                <h2 className="absolute top-[355px] left-1/2 -translate-x-1/2 text-center text-xl font-bold text-white">{name.trim() || "YOUR NAME"}</h2>
                <p className="absolute top-[405px] left-[140px] text-center text-md text-gray-800"> {picnicId.trim() || "TBD"}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PicnicPhotoCard;