import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Ear, ArrowRight, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    q: 'Do you often ask people to repeat themselves during conversations?',
    options: ['Never', 'Sometimes', 'Often', 'Always'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'Do you have difficulty hearing in noisy environments like restaurants?',
    options: ['Never', 'Sometimes', 'Often', 'Always'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'Do you turn the TV or radio volume higher than others prefer?',
    options: ['Never', 'Sometimes', 'Often', 'Always'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'Do you experience ringing, buzzing, or hissing sounds in your ears?',
    options: ['Never', 'Rarely', 'Frequently', 'Constantly'],
    scores: [0, 1, 2, 3],
  },
  {
    q: 'Do you find it hard to follow phone conversations clearly?',
    options: ['Never', 'Sometimes', 'Often', 'Always'],
    scores: [0, 1, 2, 3],
  },
];

type Step = 'intro' | 'quiz' | 'result';

export default function HearingSelfTest() {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState<Step>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const reset = () => {
    setStep('intro');
    setCurrent(0);
    setAnswers([]);
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setStep('result');
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const isGood = percentage <= 25;
  const isMild = percentage > 25 && percentage <= 50;

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-blue/10 rounded-full mb-4">
            <Ear className="w-4 h-4 text-sky-blue" />
            <span className="font-ui text-xs font-medium text-sky-blue">Interactive Screening</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Online Hearing Self-Test
          </h2>
          <p className="font-body text-text-muted">
            Answer five quick questions to understand if a professional hearing assessment might benefit you.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-card border border-border-light shadow-card p-6 md:p-10">
            {/* Intro */}
            {step === 'intro' && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Ear className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-ui text-lg font-semibold text-text-dark mb-2">Quick Hearing Check</h3>
                  <p className="font-body text-sm text-text-muted max-w-sm mx-auto">
                    This short questionnaire helps identify common signs of hearing difficulty. 
                    It takes less than a minute to complete.
                  </p>
                </div>
                <button
                  onClick={() => setStep('quiz')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-primary-foreground font-ui text-sm font-medium rounded-md hover:bg-medium-blue transition-colors"
                >
                  Start Screening <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Quiz */}
            {step === 'quiz' && (
              <div className="space-y-6">
                {/* Progress */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-ui text-xs text-text-muted">Question {current + 1} of {questions.length}</span>
                  <span className="font-ui text-xs text-text-muted">{Math.round(((current) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-navy rounded-full transition-all duration-500"
                    style={{ width: `${((current) / questions.length) * 100}%` }}
                  />
                </div>

                <h3 className="font-ui text-base font-semibold text-text-dark leading-relaxed">
                  {questions[current].q}
                </h3>

                <div className="space-y-3">
                  {questions[current].options.map((option, i) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(questions[current].scores[i])}
                      className="w-full text-left px-5 py-3.5 rounded-lg border border-border-light font-ui text-sm text-text-dark hover:border-navy hover:bg-navy/5 transition-all duration-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Result */}
            {step === 'result' && (
              <div className="text-center space-y-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${isGood ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                  {isGood ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  ) : (
                    <AlertTriangle className="w-8 h-8 text-amber-600" />
                  )}
                </div>

                <div>
                  <h3 className="font-ui text-lg font-semibold text-text-dark mb-2">
                    {isGood
                      ? 'Your Hearing Seems Healthy'
                      : isMild
                        ? 'Mild Signs of Hearing Difficulty'
                        : 'We Recommend a Professional Assessment'}
                  </h3>
                  <p className="font-body text-sm text-text-muted max-w-sm mx-auto">
                    {isGood
                      ? 'Based on your responses, your hearing appears to be in good shape. We still recommend periodic check-ups to maintain your hearing health.'
                      : isMild
                        ? 'Your responses suggest some mild hearing challenges. A professional hearing test can help identify any underlying issues early.'
                        : 'Your responses indicate noticeable hearing difficulties. We strongly recommend booking a professional audiological assessment at your nearest Vision Care branch.'}
                  </p>
                </div>

                {/* Score indicator */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-8 rounded-full ${i < Math.ceil((totalScore / maxScore) * 5) ? (isGood ? 'bg-emerald-400' : isMild ? 'bg-amber-400' : 'bg-red-400') : 'bg-muted'}`}
                    />
                  ))}
                </div>

                <p className="font-body text-xs text-text-muted bg-muted rounded-lg px-4 py-3">
                  This screening is not a medical diagnosis. Please consult a qualified audiologist for a comprehensive hearing assessment.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-primary-foreground font-ui text-sm font-medium rounded-md hover:bg-medium-blue transition-colors"
                  >
                    Book a Hearing Test
                  </Link>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-navy text-navy font-ui text-sm font-medium rounded-md hover:bg-navy hover:text-primary-foreground transition-colors"
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
