'use client'
import { PrimeiroComponente } from "./components/PrimeiroComponente";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
        <div className="absolute top-10 left-10 w-8 h-8 bg-blue-300 rounded-full opacity-70"></div>
      <div className="absolute top-24 right-20 w-5 h-5 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-blue-200 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 right-10 w-10 h-10 bg-blue-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-10 left-1/4 w-6 h-6 bg-blue-600 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-7 h-7 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-600 rounded-full opacity-50"></div>
      <div className="absolute top-16 left-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>
      <div className="absolute top-40 left-20 w-6 h-6 bg-blue-500 rounded-full opacity-40"></div>
      <div className="absolute top-12 right-1/3 w-10 h-10 bg-blue-200 rounded-full opacity-60"></div>
      <div className="absolute top-2/3 right-20 w-5 h-5 bg-blue-600 rounded-full opacity-50"></div>
      <div className="absolute bottom-24 left-16 w-9 h-9 bg-blue-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-10 right-1/3 w-7 h-7 bg-blue-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-blue-600 rounded-full opacity-60"></div>
      <div className="absolute top-3/4 left-10 w-5 h-5 bg-blue-400 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-blue-600 rounded-full opacity-40"></div>
      <div className="absolute top-20 left-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-50"></div>

      <span className="absolute top-8 left-[8%] text-3xl text-purple-300 opacity-70">✦</span>
      <span className="absolute top-[18%] right-[12%] text-xl text-purple-500 opacity-60">✦</span>
      <span className="absolute top-[42%] left-[18%] text-4xl text-purple-200 opacity-70">✦</span>
      <span className="absolute bottom-[15%] right-[8%] text-3xl text-purple-400 opacity-60">✦</span>

      <span className="absolute bottom-[8%] left-[35%] text-2xl text-purple-500 opacity-50">✦</span>
      <span className="absolute top-[28%] right-[32%] text-2xl text-purple-300 opacity-60">✦</span>
      <span className="absolute bottom-[38%] left-[42%] text-lg text-purple-600 opacity-50">✦</span>
      <span className="absolute top-[10%] left-[48%] text-lg text-purple-400 opacity-50">✦</span>

      <span className="absolute top-[55%] left-[5%] text-xl text-purple-500 opacity-40">✦</span>
      <span className="absolute top-[7%] right-[38%] text-3xl text-purple-200 opacity-60">✦</span>
      <span className="absolute top-[70%] right-[15%] text-xl text-purple-600 opacity-50">✦</span>

      <span className="absolute bottom-[28%] left-[12%] text-3xl text-purple-300 opacity-60">✦</span>
      <span className="absolute bottom-[6%] right-[42%] text-2xl text-purple-500 opacity-40">✦</span>
      <span className="absolute top-[35%] right-[6%] text-sm text-purple-600 opacity-60">✦</span>

      <span className="absolute top-[78%] left-[25%] text-xl text-purple-400 opacity-50">✦</span>
      <span className="absolute top-[50%] right-[28%] text-3xl text-purple-300 opacity-50">✦</span>
      <span className="absolute bottom-[22%] right-[52%] text-lg text-purple-600 opacity-40">✦</span>

      <span className="absolute top-[15%] left-[65%] text-sm text-purple-500 opacity-60">✦</span>
      <span className="absolute bottom-[35%] right-[35%] text-xl text-purple-400 opacity-50">✦</span>

        <img
          src="/stitch.jpg"
          alt="Foto de perfil"
          className="w-45 h-45 rounded-full object-cover border-4 border-white shadow-lg mb-5"
        />

      <div className="flex items-center gap-3 mb-4">
         <span className="text-4xl">
          🌜🌟
        </span>

        <h1 className="text-3xl font-bold text-gray-800">
          Seja Bem-vindo!
        </h1>

        <span className="text-4xl">
          🌜🌟
        </span>
      </div>

      <button
        onClick={() => router.push("/galeria")}
        className="relative z-10 px-6 py-2.5 bg-purple-900 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-200"
      >
        Clique aqui
      </button>

    </div>
  );
}