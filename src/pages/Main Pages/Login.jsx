import React from "react";
import {
  UserPlus,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted successfully");
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] font-['Inter',sans-serif] text-[#202533]">
      {/* BACK TO HOME */}
      <a
        href="/"
        className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-black text-[#0658d4] shadow-lg backdrop-blur transition hover:bg-[#0658d4] hover:text-white md:left-8 md:top-8"
      >
        <ArrowLeft size={18} />
        Back to Home
      </a>

      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.03fr_1fr]">
        {/* LEFT HERO PANEL */}
        <div className="relative hidden min-h-screen overflow-hidden bg-[#0658d4] text-white lg:block">
          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
            alt="Career professional"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />

          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#0658d4]/82 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0658d4] via-[#0658d4]/75 to-[#0658d4]/25"></div>

          {/* HERO CONTENT */}
          <div className="relative z-10 flex min-h-screen items-center px-16 xl:px-24">
            <div className="max-w-[720px]">
              <p className="mb-5 text-[15px] font-black uppercase tracking-[0.28em] text-white/90">
                Profile Login
              </p>

              <h1 className="max-w-[700px] text-[66px] font-black leading-[0.98] tracking-[-0.065em] text-white xl:text-[78px]">
                Get the career
                <br />
                you deserve
              </h1>

              {/* RATING */}
              <div className="mt-9 flex flex-wrap items-center gap-3 text-white">
                <span className="text-[17px] font-medium">Overall rating</span>

                <span className="text-[34px] font-black leading-none">
                  4.9
                </span>

                <Star size={27} className="fill-yellow-400 text-yellow-400" />

                <span className="text-[17px] font-medium">based on</span>

                <span className="text-[34px] font-black leading-none">
                  1,127
                </span>

                <span className="text-[17px] font-medium">reviews</span>
              </div>

              {/* TESTIMONIAL CARD */}
              <div className="mt-8 max-w-[650px] rounded-[22px] bg-black/34 p-10 shadow-2xl backdrop-blur-md">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-[22px] font-black text-white">
                      MH
                    </div>

                    <div>
                      <h3 className="text-[18px] font-black text-white">
                        Maia H.
                      </h3>

                      <div className="mt-1 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <Star
                            key={item}
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <p className="mt-1 text-xs font-medium text-white/80">
                        Jun 22, 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-black text-[#0658d4]">
                    G
                  </div>
                </div>

                <p className="mt-7 max-w-[560px] text-[18px] font-medium leading-[1.45] text-white">
                  I had an amazing experience with Antalya. The team supported
                  me throughout my job search and helped me stay confident
                  during the recruitment process.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  >
                    <ChevronLeft size={36} />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-white"></span>
                  </div>

                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                  >
                    <ChevronRight size={36} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN AREA */}
        <div className="flex min-h-screen items-center justify-center bg-[#f4f4f4] px-6 py-28 lg:px-12">
          <div className="w-full max-w-[560px] rounded-[18px] bg-white p-8 shadow-sm md:p-10">
            {/* MOBILE LOGO */}
            <div className="mb-8 block lg:hidden">
              <a href="/" className="inline-flex flex-col leading-none">
                <span className="text-[38px] font-black tracking-[-0.08em] text-[#0658d4]">
                  Antalya.
                </span>

                <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.28em] text-gray-400">
                  Recruiting Manpower LLC
                </span>
              </a>
            </div>

            <h2 className="mb-7 text-[36px] font-black leading-tight tracking-[-0.05em] text-[#555555]">
              Profile login
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#555555]">
                  Email
                </label>

                <input
                  type="email"
                  required
                  className="h-[54px] w-full rounded-[10px] border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-[#0658d4]"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#555555]">
                  Password
                </label>

                <input
                  type="password"
                  required
                  className="h-[54px] w-full rounded-[10px] border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-[#0658d4]"
                />
              </div>

              {/* REMEMBER */}
              <label className="flex items-center gap-2 text-[15px] font-medium text-[#555555]">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                Remember Me
              </label>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="flex h-[62px] w-full items-center justify-center rounded-full bg-[#0658d4] text-[19px] font-black text-white transition hover:bg-[#0547aa]"
              >
                Log in
              </button>

              {/* LOST PASSWORD */}
              <div className="pt-3 text-center">
                <a
                  href="/forgot-password"
                  className="text-[15px] font-black text-[#0658d4] hover:underline"
                >
                  Lost your password?
                </a>
              </div>
            </form>

            {/* REGISTER LINK */}
            <div className="mt-10 text-center text-[19px] font-medium text-[#777777]">
              Not got an account?{" "}
              <a
                href="/register"
                className="inline-flex items-center gap-2 font-medium text-[#0658d4] hover:underline"
              >
                <UserPlus size={18} />
                Register here
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}