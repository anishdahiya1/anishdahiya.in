import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Upload, Mail, Check, AlertCircle, Settings } from "lucide-react";

interface ResumeDispatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeDispatcherModal({ isOpen, onClose }: ResumeDispatcherModalProps) {
  const [secretCode, setSecretCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hrName, setHrName] = useState("");
  const [hrEmail, setHrEmail] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // Gmail SMTP Settings (Prefilled with user credentials)
  const [gmailUser, setGmailUser] = useState("anishdahiya44@gmail.com");
  const [gmailPass, setGmailPass] = useState("pwcm xtha wmsf yrdg");
  const [showSettings, setShowSettings] = useState(false);
  
  // Form status
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  // Load configuration from local storage or fallback to defaults
  useEffect(() => {
    const savedUser = localStorage.getItem("anish_gmail_user");
    const savedPass = localStorage.getItem("anish_gmail_pass");
    const savedUnlocked = localStorage.getItem("anish_portal_unlocked") === "true";
    
    if (savedUser) setGmailUser(savedUser);
    
    // Migrate to the new password if local storage has the old one
    if (savedPass) {
      if (savedPass.trim() === "sfrd vspl yxcz trda") {
        setGmailPass("pwcm xtha wmsf yrdg");
        localStorage.setItem("anish_gmail_pass", "pwcm xtha wmsf yrdg");
      } else {
        setGmailPass(savedPass);
      }
    }
    
    if (savedUnlocked) setIsUnlocked(true);
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretCode === "anish123") {
      setIsUnlocked(true);
      localStorage.setItem("anish_portal_unlocked", "true");
      setStatus("idle");
      setStatusMsg("");
    } else {
      setStatus("error");
      setStatusMsg("Invalid secret code. Please try again.");
    }
  };

  const saveSettings = () => {
    localStorage.setItem("anish_gmail_user", gmailUser);
    localStorage.setItem("anish_gmail_pass", gmailPass);
    setShowSettings(false);
    setStatus("idle");
    setStatusMsg("SMTP settings saved!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        setStatus("error");
        setStatusMsg("Only PDF resumes are supported.");
        return;
      }
      setResumeFile(file);
      setStatus("idle");
      setStatusMsg("");
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hrName || !hrEmail) {
      setStatus("error");
      setStatusMsg("Please enter HR Name and Email.");
      return;
    }
    if (!resumeFile) {
      setStatus("error");
      setStatusMsg("Please upload your PDF resume.");
      return;
    }
    if (!gmailUser || !gmailPass) {
      setStatus("error");
      setStatusMsg("Gmail address and App Password must be configured.");
      return;
    }

    setStatus("sending");
    setStatusMsg("Connecting to Gmail SMTP and sending email...");

    try {
      const base64Resume = await convertToBase64(resumeFile);
      
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-gmail-user": gmailUser,
          "x-gmail-pass": gmailPass,
        },
        body: JSON.stringify({
          hrName,
          hrEmail,
          resumeBase64: base64Resume,
          resumeFilename: resumeFile.name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setStatus("success");
      setStatusMsg(`Resume successfully sent to ${hrName} (${hrEmail}) via your Gmail account!`);
      // Reset HR input fields but keep resume uploaded
      setHrName("");
      setHrEmail("");
    } catch (err: any) {
      setStatus("error");
      if (err.message && err.message.includes("Failed to fetch")) {
        setStatusMsg("Failed to connect to the backend email server. If you are testing locally, make sure to run 'npx vercel dev' to execute the serverless function, or deploy the project to Vercel.");
      } else {
        setStatusMsg(err.message || "An error occurred while sending the email.");
      }
    }
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    localStorage.removeItem("anish_portal_unlocked");
    setSecretCode("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950 p-6 md:p-8 shadow-[0_24px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Glow decoration */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
          <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Resume Dispatcher Portal
          </h3>
          <button
            onClick={onClose}
            className="rounded-full border border-white/[0.08] bg-white/[0.04] p-1.5 text-zinc-400 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Lock Screen */}
        {!isUnlocked ? (
          <form onSubmit={handleUnlock} className="space-y-5 py-4">
            <div className="flex flex-col items-center justify-center text-center space-y-3 mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400">
                <Lock className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-white">Identity Verification</h4>
              <p className="text-xs text-zinc-400 max-w-xs">
                This feature is private. Please enter your secret code to unlock the resume dispatch system.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Secret Access Code
              </label>
              <input
                type="password"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-cyan-500/50"
                required
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.05] p-3 text-xs text-red-300">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{statusMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
            >
              Verify Code
            </button>
          </form>
        ) : (
          /* Portal UI */
          <div className="space-y-6">
            {/* Top Stats/Settings line */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500 font-mono">
                SMTP Sender: <span className="text-emerald-400">{gmailUser}</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition font-medium"
                >
                  <Settings className="h-3.5 w-3.5" />
                  Credentials
                </button>
                <span className="text-zinc-700">|</span>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 transition font-medium"
                >
                  Lock
                </button>
              </div>
            </div>

            {/* Settings Sub-form */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 space-y-4"
                >
                  <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                    <Settings className="h-4 w-4 text-cyan-400" />
                    Configure Gmail SMTP
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                      Gmail Address
                    </label>
                    <input
                      type="email"
                      value={gmailUser}
                      onChange={(e) => setGmailUser(e.target.value)}
                      placeholder="anishdahiya44@gmail.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/60 px-3 py-2 text-xs text-white outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 flex items-center justify-between">
                      <span>Gmail App Password</span>
                      <span className="text-[8px] text-zinc-500 lowercase">(16-char code)</span>
                    </label>
                    <input
                      type="password"
                      value={gmailPass}
                      onChange={(e) => setGmailPass(e.target.value)}
                      placeholder="sfrd vspl yxcz trda"
                      className="w-full rounded-xl border border-white/[0.08] bg-zinc-900/60 px-3 py-2 text-xs text-white outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={saveSettings}
                      className="flex-1 rounded-lg bg-cyan-500/20 border border-cyan-400/30 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/30"
                    >
                      Save settings
                    </button>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="flex-1 rounded-lg bg-zinc-900 border border-white/[0.08] py-2 text-xs text-zinc-300 transition hover:bg-zinc-800"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Application Dispatch Form */}
            {!showSettings && (
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      HR Recipient Name
                    </label>
                    <input
                      type="text"
                      value={hrName}
                      onChange={(e) => setHrName(e.target.value)}
                      placeholder="e.g. Sarah"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none focus:border-cyan-500/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      HR Recipient Email
                    </label>
                    <input
                      type="email"
                      value={hrEmail}
                      onChange={(e) => setHrEmail(e.target.value)}
                      placeholder="hr@company.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none focus:border-cyan-500/50"
                      required
                    />
                  </div>
                </div>

                {/* PDF Upload */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Upload Resume (PDF)
                  </label>
                  <div className="relative flex h-24 w-full items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                    <div className="flex flex-col items-center justify-center text-center space-y-1 p-2">
                      <Upload className={`h-5 w-5 ${resumeFile ? "text-cyan-400" : "text-zinc-500"}`} />
                      {resumeFile ? (
                        <p className="text-[11px] font-mono text-cyan-300 max-w-[250px] truncate">
                          {resumeFile.name}
                        </p>
                      ) : (
                        <p className="text-[10px] text-zinc-400">
                          Click or drag to upload PDF resume
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Draft Preview Card */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-zinc-500 border-b border-white/[0.05] pb-1.5">
                    <span>Email Content Preview</span>
                    <span className="text-cyan-400/60">Sender: {gmailUser}</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-relaxed font-mono whitespace-pre-line max-h-24 overflow-y-auto pr-1">
                    {`Subject: Application for AIML / Python Developer Role - Anish Dahiya

Hi ${hrName || "[HR Name]"},

Myself Anish and am actively looking jobs in pune and can join within 30 days itself and have relevant experience of 1.5 yrs in Aiml and python development itself and am genuinely interested in this job opportunity and joining the company am sharing the resume with you please let me know if its possible…

hoping to hear from you ..

Thank you`}
                  </p>
                </div>

                {/* Status/Error Alerts */}
                {status !== "idle" && (
                  <div
                    className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-xs ${
                      status === "sending"
                        ? "border-cyan-500/20 bg-cyan-500/[0.03] text-cyan-300"
                        : status === "success"
                        ? "border-emerald-500/20 bg-emerald-500/[0.03] text-emerald-300"
                        : "border-red-500/20 bg-red-500/[0.03] text-red-300"
                    }`}
                  >
                    {status === "sending" && (
                      <span className="flex h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent flex-shrink-0" />
                    )}
                    {status === "success" && <Check className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />}
                    {status === "error" && <AlertCircle className="h-4.5 w-4.5 text-red-400 flex-shrink-0" />}
                    <span className="leading-normal">{statusMsg}</span>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-100 disabled:opacity-50"
                >
                  <Mail className="h-4 w-4" />
                  Send Automated Resume
                </button>
              </form>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
