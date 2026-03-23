import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, ArrowRight, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const letterRows = [
  { size: '4rem', letters: 'E', row: 1, label: '20/200' },
  { size: '3rem', letters: 'F P', row: 2, label: '20/100' },
  { size: '2.25rem', letters: 'T O Z', row: 3, label: '20/70' },
  { size: '1.7rem', letters: 'L P E D', row: 4, label: '20/50' },
  { size: '1.25rem', letters: 'P E C F D', row: 5, label: '20/40' },
  { size: '1rem', letters: 'E D F C Z P', row: 6, label: '20/30' },
  { size: '0.8rem', letters: 'F E L O P Z D', row: 7, label: '20/25' },
  { size: '0.6rem', letters: 'D E F P O T E C', row: 8, label: '20/20' },
];

type Step = 'intro' | 'test' | 'result';

export default function VisionSelfTest() {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState<Step>('intro');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const reset = () => {
    setStep('intro');
    setSelectedRow(null);
  };

  const needsAttention = selectedRow !== null && selectedRow < 7;
  const resultGood = selectedRow !== null && selectedRow >= 7;

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-blue/10 rounded-full mb-6">
            <Eye className="w-5 h-5 text-sky-blue" />
            <span className="font-ui text-xs font-bold tracking-widest uppercase text-sky-blue">Interactive Tool</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Check Your Vision — Right Now
          </h2>
          <p className="font-body text-lg text-text-muted leading-relaxed">
            A quick screening to help you understand if a professional eye examination might be beneficial.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-[2.5rem] border border-border-light shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Intro */}
            {step === 'intro' && (
              <div className="text-center space-y-8">
                <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-10 h-10 text-sky-blue" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-4">Before You Begin</h3>
                  <ul className="font-body text-base text-text-muted space-y-3 text-left max-w-sm mx-auto">
                    <li className="flex gap-3"><span className="text-sky-blue font-bold">1.</span> Sit approximately 50cm (arm's length) from your screen</li>
                    <li className="flex gap-3"><span className="text-sky-blue font-bold">2.</span> If you wear glasses or contacts, keep them on</li>
                    <li className="flex gap-3"><span className="text-sky-blue font-bold">3.</span> Ensure your screen brightness is comfortable</li>
                    <li className="flex gap-3"><span className="text-sky-blue font-bold">4.</span> Cover one eye at a time for best results</li>
                  </ul>
                </div>
                <button
                  onClick={() => setStep('test')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-sky-blue text-white font-ui text-sm font-bold rounded-full hover:bg-navy transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
                >
                  Start Test <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Test */}
            {step === 'test' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h3 className="font-display text-3xl font-bold text-navy mb-3">Read the Chart</h3>
                  <p className="font-body text-text-muted">
                    Tap the <strong>smallest row</strong> you can read clearly.
                  </p>
                </div>
                <div className="space-y-3 bg-cream/30 p-6 md:p-8 rounded-[2rem] border border-border-light shadow-inner">
                  {letterRows.map((row) => (
                    <button
                      key={row.row}
                      onClick={() => {
                        setSelectedRow(row.row);
                        setStep('result');
                      }}
                      className="w-full relative flex items-center justify-center py-3 px-4 rounded-xl border-2 border-transparent hover:border-sky-blue/30 hover:bg-white transition-all cursor-pointer group shadow-sm hover:shadow-md"
                    >
                      <span className="absolute left-6 font-ui text-[10px] font-bold tracking-widest uppercase text-text-muted/50 group-hover:text-sky-blue transition-colors hidden sm:block">ROW {row.row}</span>
                      <span
                        className="font-stats font-bold text-navy select-none transition-colors"
                        style={{ fontSize: row.size, letterSpacing: '0.15em', lineHeight: 1 }}
                      >
                        {row.letters}
                      </span>
                      <span className="absolute right-6 font-ui text-[10px] font-bold tracking-widest uppercase text-text-muted/50 group-hover:text-sky-blue transition-colors hidden sm:block">{row.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Result */}
            {step === 'result' && (
              <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner ${resultGood ? 'bg-emerald-50 border border-emerald-100' : 'bg-red-50 border border-red-100'}`}>
                  {resultGood ? (
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                  )}
                </div>

                <div>
                  <h3 className="font-display text-3xl font-bold text-navy mb-4">
                    {resultGood ? 'Looking Good!' : 'Vision May Need Attention'}
                  </h3>
                  <p className="font-body text-base text-text-muted max-w-sm mx-auto leading-relaxed">
                    {resultGood
                      ? 'Your result looks positive! We still recommend an annual comprehensive eye examination to keep your vision in top shape.'
                      : `You were able to read Row ${selectedRow} of 8. This suggests a professional eye examination could be beneficial to ensure your vision is at its best.`}
                  </p>
                </div>

                <p className="font-body text-xs text-text-muted bg-muted/50 rounded-xl px-4 py-3 border border-border-light max-w-md mx-auto">
                  This is a basic screening tool, not a medical diagnosis. Please consult a qualified optometrist for a comprehensive assessment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-blue text-white font-ui text-sm font-bold rounded-full hover:bg-navy transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
                  >
                    Book an Eye Test
                  </Link>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy text-navy font-ui text-sm font-bold rounded-full hover:bg-muted transition-colors duration-300"
                  >
                    <RotateCcw className="w-4 h-4" /> Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
