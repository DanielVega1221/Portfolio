import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, AlertTriangle } from 'lucide-react';

const REASONS = [
  'Tengo un problema complejo',
  'Quiero conversar sobre producto',
  'Quiero sumar tu criterio a un equipo',
  'Solo quería saludar',
];

export default function Contact() {
  const [contactName, setContactName] = useState('');
  const [contactReason, setContactReason] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contactReason) {
      setFeedback({ type: 'error', text: 'Seleccioná un motivo para escribir.' });
      return;
    }
    setIsSubmitting(true);
    setFeedback(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          reason: contactReason,
          message: contactMessage,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Error al enviar');
      }
      setFeedback({ type: 'success', text: 'Mensaje enviado correctamente. ¡Gracias por escribir!' });
      setContactName('');
      setContactReason('');
      setContactEmail('');
      setContactMessage('');
    } catch (err) {
      setFeedback({ type: 'error', text: err instanceof Error ? err.message : 'Error al enviar el mensaje. Intentá de nuevo.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFeedback(null), 6000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto px-6 py-12 md:py-16"
    >
      <div id="contact-view" className="max-w-xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a84432] font-bold">CAPÍTULO V — DIÁLOGO HONESTO</p>
          <h2 className="text-serif text-3xl md:text-4xl font-light text-[#1a1a1a] tracking-tight leading-tight">
            Establezcamos una conversación
          </h2>
          <p className="text-[#1a1a1a]/70 font-light text-sm md:text-base leading-relaxed">
            Si tenés una idea, un problema complejo de negocio, o simplemente una forma parecida de ver el desarrollo de producto, escribime. Leo todo personalmente.
          </p>
        </div>

        <div className="bg-[#fffef0] border border-[#e5e2de] p-8 md:p-12 rounded-sm shadow-xs relative">
          {feedback && (
            <div className={`mb-6 p-4 rounded-sm text-xs font-mono flex items-center gap-2 ${
              feedback.type === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              {feedback.type === 'success' ? <Check size={14} /> : <AlertTriangle size={14} />}
              {feedback.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="font-mono text-xs text-[#1a1a1a]/50 uppercase tracking-wider block">Quiero escribir porque:</label>
              <div className="flex flex-wrap gap-2">
                {REASONS.map((reason) => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setContactReason(reason)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-mono border tracking-wide transition-all cursor-pointer ${
                      contactReason === reason
                        ? 'bg-[#a84432] border-[#a84432] text-[#f9f7f2]'
                        : 'bg-[#fffef0] border-[#e5e2de] text-[#1a1a1a]/60 hover:border-[#a84432]/40'
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-name" className="font-mono text-xs text-[#1a1a1a]/50 uppercase tracking-wider block">Tu nombre</label>
              <input
                type="text"
                id="contact-name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Juan Pérez"
                className="w-full bg-[#f9f7f2] border border-[#e5e2de] px-4 py-2.5 text-xs font-mono rounded-sm focus:outline-none focus:border-[#a84432] text-[#1a1a1a] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="font-mono text-xs text-[#1a1a1a]/50 uppercase tracking-wider block">Tu correo de contacto</label>
              <input
                type="email"
                id="contact-email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="nombre@ejemplo.com"
                className="w-full bg-[#f9f7f2] border border-[#e5e2de] px-4 py-2.5 text-xs font-mono rounded-sm focus:outline-none focus:border-[#a84432] text-[#1a1a1a] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="font-mono text-xs text-[#1a1a1a]/50 uppercase tracking-wider block">¿Cuál es el problema, contexto o idea?</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Descríbeme qué quieres resolver, cómo funciona actualmente o sobre qué quieres intercambiar opiniones..."
                className="w-full bg-[#f9f7f2] border border-[#e5e2de] px-4 py-2.5 text-sm font-light rounded-sm focus:outline-none focus:border-[#a84432] text-[#1a1a1a] transition-colors leading-relaxed"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#a84432] text-[#f9f7f2] font-mono text-xs uppercase tracking-widest py-3 hover:bg-[#a84432]/90 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center space-y-4 pt-8 border-t border-[#1a1a1a]/10">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-[#a84432] tracking-tight">
            Si llegaste hasta acá
          </h3>
          <div className="space-y-2">
            <p className="font-sans text-sm text-[#1a1a1a]/70 leading-relaxed">
              Capaz tenemos una forma parecida de pensar.
            </p>
            <p className="font-sans text-sm text-[#1a1a1a]/70 leading-relaxed">
              O capaz no, pero igual estaría bueno hablar.
            </p>
            <p className="font-sans text-sm text-[#1a1a1a]/70 leading-relaxed pt-2">
              Si tenés una idea, un problema, o simplemente querés intercambiar cómo vemos las cosas, podemos charlar.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
