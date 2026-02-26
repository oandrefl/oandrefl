"use client";

import { useState, useRef } from "react";
import { Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.subject) newErrors.subject = "Selecione um assunto";
    if (!formData.message.trim()) newErrors.message = "Escreva alguma coisa :)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/xgvzakje", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else throw new Error();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-zinc-900/50 border rounded-xl text-zinc-200 placeholder-zinc-700 focus:border-blue-500/50 focus:ring-0 outline-none transition-all text-sm ${
      errors[field] ? "border-red-500/50" : "border-zinc-800"
    }`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="max-w-2xl space-y-16">

        {/* HEADER — padrão de páginas secundárias */}
        <header className="space-y-4">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-blue-500">
            <Mail className="w-3.5 h-3.5" /> Fale comigo
          </div>
          {/* H1 páginas */}
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
            Contato<span className="text-zinc-600">.</span>
          </h1>
          <p className="text-base leading-relaxed text-zinc-400 max-w-xl">
            Tem um projeto, uma dúvida, ou só quer trocar uma ideia? Manda mensagem.
            Respondo assim que puder — normalmente no mesmo dia.
          </p>
        </header>

        {/* FORMULÁRIO */}
        <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-6 md:p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">Nome</label>
                <input name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Seu nome" className={inputClass("name")} />
                {errors.name && <p className="text-[10px] text-red-400 ml-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="exemplo@email.com" className={inputClass("email")} />
                {errors.email && <p className="text-[10px] text-red-400 ml-1">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">Assunto</label>
              <select name="subject" value={formData.subject} onChange={handleInputChange} className={`${inputClass("subject")} appearance-none`}>
                <option value="" className="bg-zinc-950">Selecione uma opção</option>
                <option value="projeto" className="bg-zinc-950">Novo Projeto</option>
                <option value="freelance" className="bg-zinc-950">Freelance</option>
                <option value="outros" className="bg-zinc-950">Outros</option>
              </select>
              {errors.subject && <p className="text-[10px] text-red-400 ml-1">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 ml-1">Mensagem</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="O que você tem em mente?" className={`${inputClass("message")} resize-none`} />
              {errors.message && <p className="text-[10px] text-red-400 ml-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-zinc-100 hover:bg-blue-600 text-zinc-950 hover:text-white font-bold rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 font-mono text-[11px] uppercase tracking-widest"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>Enviar Mensagem <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            {submitStatus && (
              <div className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2 ${
                submitStatus === "success"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}>
                {submitStatus === "success" ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                {submitStatus === "success" ? "Mensagem enviada! Responderei em breve." : "Ocorreu um erro. Tente novamente."}
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}