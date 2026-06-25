import React, { useState } from "react";
import {
  UserPlus,
  LogIn,
  Upload,
  EyeOff,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export default function Register() {
  const [createFromCV, setCreateFromCV] = useState(true);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully");
  };

  return (
    <main className="min-h-screen bg-[#4b4b4b] font-['Inter',sans-serif] text-[#202533]">
      {/* BACK TO HOME */}
      <a
        href="/"
        className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-black text-[#0658d4] shadow-lg backdrop-blur transition hover:bg-[#0658d4] hover:text-white md:left-8 md:top-8"
      >
        <ArrowLeft size={18} />
        Back to Home
      </a>

      <section className="grid min-h-[910px] grid-cols-1 lg:grid-cols-[1.03fr_1fr]">
        {/* LEFT IMAGE / BRAND PANEL */}
        <div className="relative hidden min-h-[760px] overflow-hidden bg-[#0658d4] text-white lg:block">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
            alt="Career candidate"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />

          <div className="absolute inset-0 bg-[#0658d4]/82 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0658d4] via-[#0658d4]/75 to-[#0658d4]/25"></div>

          

          {/* HERO CONTENT */}
          <div className="relative z-10 flex min-h-[760px] items-center px-16 xl:px-24">
            <div className="max-w-[720px] pt-16">
              <p className="mb-5 text-[15px] font-black uppercase tracking-[0.28em] text-white/90">
                Register Profile
              </p>

              <h1 className="max-w-[700px] text-[58px] font-black leading-[0.98] tracking-[-0.065em] text-white xl:text-[68px]">
                Get the career
                <br />
                you deserve
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-white">
                <span className="text-[16px] font-medium">Overall rating</span>
                <span className="text-[31px] font-black leading-none">4.9</span>
                <Star size={25} className="fill-yellow-400 text-yellow-400" />
                <span className="text-[16px] font-medium">based on</span>
                <span className="text-[31px] font-black leading-none">
                  1,127
                </span>
                <span className="text-[16px] font-medium">reviews</span>
              </div>

              <div className="mt-7 max-w-[650px] rounded-[22px] bg-black/34 p-8 shadow-2xl backdrop-blur-md">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-[20px] font-black text-white">
                      BL
                    </div>

                    <div>
                      <h3 className="text-[17px] font-black text-white">
                        Ben L.
                      </h3>

                      <div className="mt-1 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <Star
                            key={item}
                            size={17}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <p className="mt-1 text-xs font-medium text-white/80">
                        Jun 18, 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-black text-[#0658d4]">
                    G
                  </div>
                </div>

                <p className="mt-6 max-w-[560px] text-[17px] font-medium leading-[1.45] text-white">
                  Antalya helped me find roles best suited for me and the team
                  was valuable in giving advice for every step of the
                  application process.
                </p>

                <div className="mt-7 flex items-center justify-between">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  >
                    <ChevronLeft size={32} />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/40"></span>
                    <span className="h-3 w-3 rounded-full bg-white"></span>
                    <span className="h-2 w-2 rounded-full bg-white/40"></span>
                  </div>

                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT REGISTER CARD AREA */}
        <div className="flex min-h-[760px] items-center justify-center bg-[#f4f4f4] px-6 py-12 lg:px-12">
          <div className="w-full max-w-[540px] rounded-[22px] bg-white p-7 shadow-sm md:p-8">
            {/* MOBILE LOGO */}
            <div className="mb-7 block lg:hidden">
              <a href="/" className="inline-flex flex-col leading-none">
                <span className="text-[38px] font-black tracking-[-0.08em] text-[#0658d4]">
                  Antalya.
                </span>
                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.28em] text-gray-400">
                  Recruiting Manpower LLC
                </span>
              </a>
            </div>

            {/* TABS */}
            <div className="mb-7 grid grid-cols-2 gap-3 rounded-[18px]">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-[14px] bg-[#0658d4] px-6 py-4 text-[17px] font-black text-white"
              >
                <UserPlus size={19} />
                Register
              </button>

              <a
                href="/login"
                className="flex items-center justify-center gap-2 rounded-[14px] bg-[#eeeeee] px-6 py-4 text-[17px] font-bold text-[#555555] transition hover:bg-[#e3e3e3]"
              >
                <LogIn size={19} />
                Login
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              {/* CV TOGGLE */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[16px] font-medium text-[#555555]">
                  Create profile from CV
                </span>

                <button
                  type="button"
                  onClick={() => setCreateFromCV(!createFromCV)}
                  className={`relative h-8 w-16 rounded-full transition ${
                    createFromCV ? "bg-[#0658d4]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition ${
                      createFromCV ? "left-9" : "left-1"
                    }`}
                  ></span>
                </button>
              </div>

              {/* UPLOAD BOX */}
              <label className="mb-5 flex min-h-[175px] cursor-pointer flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-[#0658d4] bg-[#eef4ff] px-7 py-6 text-center transition hover:bg-[#e6f0ff]">
                <input
                  type="file"
                  className="hidden"
                  accept=".doc,.docx,.pdf"
                />

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#0658d4] text-white">
                  <Upload size={27} />
                </div>

                <p className="text-[17px] font-medium leading-7 text-[#7a7f87]">
                  <span className="font-black text-[#0658d4]">
                    Choose a file
                  </span>{" "}
                  or simply drop your CV here to
                  <br />
                  create your talent profile
                </p>

                <p className="mt-4 text-[13px] font-medium text-[#9aa1ad]">
                  Accepted files: docx, pdf. Max. 5MB.
                </p>
              </label>

              {/* PASSWORD */}
              <div className="mb-2">
                <label className="mb-2 block text-[15px] font-medium text-[#333333]">
                  Set a secure password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 w-full rounded-[10px] border border-gray-300 bg-white px-4 pr-12 text-base outline-none transition focus:border-[#0658d4]"
                  />

                  <EyeOff
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>
              </div>

              {/* STRENGTH INDICATOR */}
              <div className="mb-5 h-8 rounded-full bg-[#eeeeee] text-center text-[12px] font-medium leading-8 text-[#666666]">
                Strength indicator
              </div>

              {/* TERMS */}
              <p className="mb-5 text-[13px] font-medium leading-5 text-[#555555]">
                By continuing, you agree to our{" "}
                <a
                  href="/terms-and-conditions"
                  className="font-black text-[#0658d4]"
                >
                  Terms
                </a>
                . Learn how we collect and use your data for our free service in
                our{" "}
                <a href="/privacy-policy" className="font-black text-[#0658d4]">
                  Privacy Policy
                </a>
                .
              </p>

              <button
                type="submit"
                className="flex h-[58px] w-full items-center justify-center rounded-full bg-[#0658d4] text-[18px] font-black text-white transition hover:bg-[#0547aa]"
              >
                Register my profile
              </button>
            </form>

            {/* ADDITIONAL LINKS */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-500">
              <a href="/help-faq" className="hover:text-[#0658d4]">
                Need help?
              </a>
              <span>•</span>
              <a href="/contact-us" className="hover:text-[#0658d4]">
                Contact support
              </a>
              <span>•</span>
              <a href="/searchpage" className="hover:text-[#0658d4]">
                Browse jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}