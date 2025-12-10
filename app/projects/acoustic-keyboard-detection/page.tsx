import Link from "next/link";
import type { Metadata } from "next";

const capabilities = [
  "Detect keyboard typing from short audio clips",
  "Real-time inference inside a deployed Streamlit UI",
  "MFCC-based feature engineering pipeline",
  "Custom 1D-CNN tuned for temporal-spectral cues",
  "Upload or microphone capture with instant feedback"
];

const workflow = [
  {
    title: "Audio ingestion",
    detail:
      "Streamlit records or accepts WAV uploads, normalizes bit-depth, and trims silence so the classifier only sees meaningful signal." 
  },
  {
    title: "MFCC feature grid",
    detail:
      "Librosa extracts 40-coefficient MFCC windows plus delta accelerations, giving the CNN a structured view of spectral changes." 
  },
  {
    title: "1D-CNN classifier",
    detail:
      "Two convolutional blocks with squeeze-and-excite layers learn the rhythmic envelope of keystrokes; dropout keeps the model resilient to room noise." 
  },
  {
    title: "Deployment + monitoring",
    detail:
      "Model weights ship with the Streamlit app; inference metrics and user feedback are logged via a lightweight FastAPI webhook for continual tuning." 
  }
];

const stack = [
  "Python",
  "Librosa",
  "NumPy",
  "TensorFlow / Keras",
  "Scikit-learn",
  "Streamlit"
];

export const metadata: Metadata = {
  title: "Acoustic Keyboard Detection"
};

export default function AcousticKeyboardDetectionPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-900 dark:text-white">
          Acoustic Keyboard Detection
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
          I built a sound-first classifier that spots keyboard activity using pure audio
          cues. The system translates microphone streams into MFCC features, applies a
          custom 1D-CNN to identify keystroke fingerprints, and exposes everything through
          a Streamlit experience that runs entirely in the browser.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://acoustickeyboard.streamlit.app/"
            target="_blank"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900"
          >
            Launch Streamlit demo
          </Link>
          <Link
            href="mailto:anishdahiya89@gmail.com?subject=Acoustic%20Keyboard%20Detection%20Case%20Study"
            className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
          >
            Request a teardown
          </Link>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Role</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Applied ML Engineer</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Timeline</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">Sep–Nov 2024</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Stack highlights</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">TensorFlow, Librosa, Streamlit</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Impact</dt>
            <dd className="text-base font-medium text-zinc-900 dark:text-white">94% F1 across devices</dd>
          </div>
        </dl>
      </section>

      <section className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Why it mattered</h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
            Acoustic side channels are usually treated as threats, accessibility enablers,
            or novel input modalities. I wanted to show how little friction it takes to
            convert raw sound into behavioral signals—useful for secure workplaces,
            assistive typing, or ambient analytics. The constraint: run on commodity
            microphones, keep inference sub-second, and require zero local installs.
          </p>
        </div>
        <div className="rounded-3xl border border-dashed border-zinc-200 p-6 dark:border-zinc-800 lg:col-span-3">
          <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <p>
                  <span className="font-semibold text-zinc-900 dark:text-white">Capability:</span>
                  &nbsp;{item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Architecture snapshot</h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            The app wraps signal processing, model scoring, and UX in a single Streamlit
            deployment. Librosa handles feature extraction while TensorFlow serves a
            frozen SavedModel. A lightweight inference cache prevents double-processing
            repeated clips, and the UI streams probability curves to keep users engaged.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
            {stack.map((item) => (
              <li key={item} className="rounded-2xl border border-zinc-100 px-4 py-3 dark:border-zinc-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Interactive UX</h3>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
            Users can upload WAV/MP3 files or record directly via the browser. The app
            visualizes spectrograms, MFCC heatmaps, and rolling predictions so researchers
            can see why the classifier triggers. A guided checklist nudges users to test
            multiple keyboards, distances, and ambient noise levels.
          </p>
          <div className="mt-6 rounded-2xl bg-zinc-900/5 p-5 text-sm text-zinc-700 dark:bg-white/5 dark:text-zinc-200">
            <p><span className="font-semibold">Inference latency:</span> &lt; 600 ms per 3s clip</p>
            <p><span className="font-semibold">Accuracy window:</span> optimized for 1–5 ft microphone range</p>
            <p><span className="font-semibold">Accessibility toggle:</span> optional haptic/audio cues for low-vision testers</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Workflow and guardrails</h3>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
            Each run pushes audio through the same reproducible pipeline used in model
            development. This keeps live traffic aligned with the training distribution
            and makes it easy to retrain when we collect new acoustic signatures.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {workflow.map((stage) => (
            <div key={stage.title} className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-white">{stage.title}</h4>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{stage.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 p-8 dark:border-zinc-800">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Outcomes</h3>
            <ul className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">94% F1 across laptops and external mics</span>
                &nbsp;after augmenting with pink-noise and distance shifts.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Sub-second feedback loop</span>
                &nbsp;lets security researchers simulate attacks live.
              </li>
              <li>
                <span className="font-semibold text-zinc-900 dark:text-white">Zero-install onboarding</span>
                &nbsp;thanks to Streamlit Cloud deployment.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Extend it</h3>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              The codebase includes reusable MFCC utilities, model-training notebooks,
              and deployment scripts so teams can adapt the classifier to voice, Morse,
              or other acoustic gestures. I am happy to pair on hardening it for your
              security or accessibility roadmap.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:anishdahiya89@gmail.com?subject=Acoustic%20Keyboard%20Detection%20Collab"
                className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500"
              >
                Book a working session
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 dark:border-zinc-700 dark:text-white"
              >
                Talk to me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
