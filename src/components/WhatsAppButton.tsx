import { useState, useRef, useEffect } from 'react';
import { X, Send, ChevronRight, Bot, ChevronUp } from 'lucide-react';
import { services } from '@/lib/data';

type Message = {
  role: 'ai' | 'user';
  content: string;
  options?: string[];
  action?: 'book';
  selectedService?: string;
};

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: 'Hey there! 😎 I am the Vision Care AI Assistant. What service are you looking for today?',
      options: services.slice(0, 5).map(s => s.name)
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top visibility logic
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, { role: 'user', content: option }]);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: `Great! We can help you with ${option}. Would you like to check out our Booking Page to schedule an appointment?`,
        action: 'book',
        selectedService: option
      }]);
    }, 1000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');

    // Simulate AI typing delay and response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'ai',
        content: "I'm still learning! Please select a service from the options above or visit our Booking Page."
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Buttons Column */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/94770000000" // Placeholder
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-[28px] h-[28px] text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        </a>

        {/* AI Bot Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-[52px] h-[52px] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-navy to-medium-blue group"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* Scroll to Top Button */}
        <div className={`overflow-hidden transition-all duration-500 origin-top flex flex-col items-center justify-center ${showTopBtn ? 'h-[52px] opacity-100 scale-100' : 'h-0 opacity-0 scale-75'}`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-11 h-11 rounded-full shadow-md hover:shadow-xl transition-all duration-300 pointer-events-auto bg-card border-[2px] border-navy/20 hover:border-navy group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-navy group-hover:text-medium-blue transition-colors group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] bg-card border border-border-light rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ height: '550px', maxHeight: 'calc(100vh - 48px)' }}
      >
        {/* Chat Header */}
        <div className="bg-navy p-4 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-lg leading-none">😎</span>
            </div>
            <div>
              <h3 className="font-ui font-semibold text-sm tracking-wide">Vision Care AI</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <p className="text-[11px] text-white/80 uppercase tracking-widest font-ui">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-muted/40">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`max-w-[85%] p-3.5 text-sm leading-relaxed ${msg.role === 'user'
                  ? 'bg-navy text-white rounded-2xl rounded-tr-sm shadow-sm'
                  : 'bg-white border border-border-light text-text-dark rounded-2xl rounded-tl-sm shadow-soft'
                  }`}
              >
                {msg.content}
              </div>

              {/* Options List */}
              {msg.options && (
                <div className="flex flex-col gap-2 mt-3 w-[85%]">
                  {msg.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(opt)}
                      className="bg-white border border-border-light hover:border-navy hover:text-navy text-text-dark text-xs font-ui py-2.5 px-3 rounded-xl shadow-sm transition-all text-left flex justify-between items-center"
                    >
                      {opt} <ChevronRight className="w-3.5 h-3.5 opacity-50 relative top-px" />
                    </button>
                  ))}
                </div>
              )}

              {/* Call to Action Button */}
              {msg.action === 'book' && (
                <div className="mt-3 text-left">
                  <a href={`/book${msg.selectedService ? `?service=${encodeURIComponent(msg.selectedService)}` : ''}`} className="inline-block bg-navy text-primary-foreground text-xs font-medium font-ui tracking-wide py-2.5 px-4 rounded-lg hover:bg-medium-blue transition-colors shadow-sm">
                    Go to Booking Page
                  </a>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-border-light shrink-0">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full pl-5 pr-12 py-3.5 bg-muted/50 border border-border-light rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2.5 p-2 bg-navy text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-medium-blue transition-colors shadow-sm"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
