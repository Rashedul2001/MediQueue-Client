'use client'
import { BiCheckCircle } from "react-icons/bi";
import { FiAlertCircle, FiInfo } from "react-icons/fi";
import { toast } from "sonner";

export default function Home() {
  return (
    <>
      {/* SUCCESS */}
      <button
        onClick={() => toast.success(
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">Changes deployed</span>
            <span className="text-xs text-text-secondary">Your project is now live on production.</span>
          </div>,
          { icon: <BiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0" /> }
        )}
        className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-800 transition"
      >
        Success
      </button>

      {/* ERROR */}
      <button
        onClick={() => toast.error(
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">Upload failed</span>
            <span className="text-xs text-text-secondary">File size exceeds the 10MB limit.</span>
          </div>,
          { icon: <FiAlertCircle className="w-5 h-5 text-rose-600 shrink-0" /> }
        )}
        className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-800 transition"
      >
        Error
      </button>

      {/* INFO */}
      <button
        onClick={() => toast.info(
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-white">Update available</span>
            <span className="text-xs text-text-secondary">A new software version is ready to install.</span>
          </div>,
          { icon: <FiInfo className="w-5 h-5 text-blue-600 shrink-0" /> }
        )}
        className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-800 transition"
      >
        Info
      </button>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!

      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
      <p>Hello, Next.js!
        It is working fine.
      </p>
    </>
  );
}
