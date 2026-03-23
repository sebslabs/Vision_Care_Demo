import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Calendar, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import CTABanner from '@/components/CTABanner';
import StructuredData from '@/components/StructuredData';

type Message = { role: 'user' | 'assistant'; content: string };

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Welcome to Vision Care! 👋 I'm here to help you book an eye care appointment. What service are you looking for today? We offer Eye Testing, Spectacles, Contact Lenses, Glaucoma Assessment, Paediatric Eye Care, and more.",
};

export default function BookingPage() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<Record<string, string> | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    let assistantContent = '';

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/booking-agent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          }),
        }
      );

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to get response');
      }

      if (!resp.body) throw new Error('No response body');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIdx: number;
        while ((newlineIdx = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIdx);
          buffer = buffer.slice(newlineIdx + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;
          try {
            const parsed = JSON.parse(jsonStr);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              assistantContent += delta;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === 'assistant' && prev.length > 1 && prev[prev.length - 2]?.role === 'user') {
                  return [...prev.slice(0, -1), { role: 'assistant', content: assistantContent }];
                }
                return [...prev, { role: 'assistant', content: assistantContent }];
              });
            }
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }

      // Check for booking confirmation
      const confirmMatch = assistantContent.match(/BOOKING_CONFIRMED:\s*(\{.*\})/);
      if (confirmMatch) {
        try {
          const booking = JSON.parse(confirmMatch[1]);
          setBookingConfirmed(booking);
          toast.success('Your appointment has been booked successfully!');
        } catch { /* ignore parse errors */ }
      }
    } catch (e: any) {
      console.error(e);
      toast.error(e.message || 'Something went wrong. Please try again.');
      if (!assistantContent) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or call us at +94 11 234 5678." },
        ]);
      }
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderContent = (content: string) => {
    // Hide the BOOKING_CONFIRMED JSON from display
    return content.replace(/BOOKING_CONFIRMED:\s*\{.*\}/, '').trim();
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visioncare.lk" },
      { "@type": "ListItem", "position": 2, "name": "Book Appointment", "item": "https://visioncare.lk/book" }
    ]
  };

  return (
    <div className="pt-28">
      <StructuredData data={breadcrumbSchema} />
      <section className="bg-navy pt-16 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-blue via-navy to-navy"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-ui text-sm font-bold tracking-widest uppercase text-sky-blue mb-6">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = '/'}>Home</span> / Book Appointment
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-sky-blue/20 flex items-center justify-center backdrop-blur-md">
              <Bot className="w-6 h-6 text-sky-blue" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book Your Appointment
            </h1>
          </div>
          <p className="font-body text-lg opacity-80 max-w-xl mx-auto leading-relaxed">
            Chat with our AI assistant to instantly schedule your visit at any Vision Care branch.
          </p>
        </div>
      </section>

      <section className="pb-8 lg:pb-12">
        <div className="container mx-auto px-2 md:px-4 max-w-4xl -translate-y-6 md:-translate-y-12 relative z-20">
          <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-border-light shadow-2xl overflow-hidden flex flex-col" style={{ height: 'min(700px, 80vh)' }}>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 bg-cream/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 md:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'assistant' ? 'bg-navy' : 'bg-sky-blue'
                    }`}>
                    {msg.role === 'assistant' ? (
                      <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    )}
                  </div>
                  <div className={`max-w-[85%] md:max-w-[75%] px-4 py-3 md:px-6 md:py-4 font-body text-sm md:text-base leading-relaxed shadow-sm ${msg.role === 'assistant'
                    ? 'bg-white border border-border-light text-text-dark rounded-[20px] md:rounded-[24px] rounded-tl-sm'
                    : 'bg-navy text-white rounded-[20px] md:rounded-[24px] rounded-tr-sm'
                    }`}>
                    {renderContent(msg.content)}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-navy flex items-center justify-center shrink-0 shadow-sm">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="bg-white border border-border-light rounded-[20px] md:rounded-[24px] rounded-tl-sm px-4 py-3 md:px-6 md:py-4 shadow-sm flex items-center">
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin text-sky-blue" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Booking Confirmation Card */}
            {bookingConfirmed && (
              <div className="mx-4 mb-4 md:mx-8 p-4 md:p-6 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-4 border-b border-emerald-100 pb-3">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span className="font-display text-base md:text-lg font-bold text-emerald-800">Appointment Confirmed</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm font-body text-emerald-700">
                  <div><span className="font-bold block text-emerald-900/60 text-[10px] uppercase tracking-wider mb-1">Name</span> {bookingConfirmed.name}</div>
                  <div><span className="font-bold block text-emerald-900/60 text-[10px] uppercase tracking-wider mb-1">Phone</span> {bookingConfirmed.phone}</div>
                  <div><span className="font-bold block text-emerald-900/60 text-[10px] uppercase tracking-wider mb-1">Branch</span> {bookingConfirmed.branch}</div>
                  <div><span className="font-bold block text-emerald-900/60 text-[10px] uppercase tracking-wider mb-1">Service</span> {bookingConfirmed.service}</div>
                  <div><span className="font-bold block text-emerald-900/60 text-[10px] uppercase tracking-wider mb-1">Date</span> {bookingConfirmed.date}</div>
                  <div><span className="font-bold block text-emerald-900/60 text-[10px] uppercase tracking-wider mb-1">Time</span> {bookingConfirmed.time}</div>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-border-light p-3 md:p-6 bg-white shrink-0">
              <div className="flex gap-2 md:gap-3 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 md:px-6 md:py-4 rounded-full border-2 border-border-light bg-cream font-body text-sm md:text-base focus:outline-none focus:ring-0 focus:border-sky-blue transition-colors shadow-inner w-full"
                  disabled={isLoading}
                  maxLength={500}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy text-white flex items-center justify-center hover:bg-sky-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg shrink-0"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 -ml-1 md:-ml-0" />
                </button>
              </div>
              <p className="text-center font-ui font-bold text-[8px] md:text-[10px] tracking-widest uppercase text-text-muted mt-3 md:mt-4">
                Or book via{' '}
                <a href="https://wa.me/94112345678" target="_blank" rel="noopener noreferrer" className="text-sky-blue hover:text-navy transition-colors">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
