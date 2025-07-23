'use client'
import { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Novo estado para erros de validação
  const formRef = useRef<HTMLFormElement>(null); // Tipagem mais específica para formRef

  // Métodos de contato e links sociais permanecem os mesmos, já estão bem definidos.
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@oandrefl.com',
      href: 'mailto:andrefernandolara@hotmail.com',
      description: 'Resposta em até 24h'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (41) 98896-9770',
      href: 'tel:+5541988969770',
      description: 'Seg-Sex, 9h às 18h'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Curitiba, PR',
      href: '#',
      description: 'Disponível remotamente'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/seu-perfil',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/seu-usuario',
      color: 'hover:text-gray-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/5541988969770',
      color: 'hover:text-green-400'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa o erro ao começar a digitar/selecionar
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor, digite seu nome.';
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, digite seu email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, digite um email válido.';
    }
    if (!formData.subject) newErrors.subject = 'Por favor, selecione um assunto.';
    if (!formData.message.trim()) newErrors.message = 'Por favor, digite sua mensagem.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null); // Limpa status anterior antes de novo envio

    if (!validateForm()) {
      // Role a página para o primeiro erro se houver
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField && formRef.current) {
        const inputElement = formRef.current.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        inputElement?.focus(); // Foca no campo com erro para melhor UX
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xgvzakje", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa o formulário
        setErrors({}); // Limpa erros após sucesso
      } else {
        // Tentar obter mensagem de erro do Formspree, se disponível
        const errorData = await res.json();
        throw new Error(errorData.error || "Erro desconhecido ao enviar");
      }
    } catch (error: any) { // Usar 'any' para capturar o erro do tipo Error ou string
      console.error("Erro no envio do formulário:", error);
      setSubmitStatus("error");
      // Opcional: setar uma mensagem de erro mais detalhada para o usuário
      // setErrorMessage(error.message || "Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000); // Limpa o status após 5 segundos
    }
  };


  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-3 bg-zinc-900 rounded-full">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold text-white">
              Vamos <span className="text-blue-400">Conversar</span>
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Tem um projeto em mente? Uma ideia para discutir? Ou apenas quer dizer olá? Estou aqui para isso.
          </p>
        </div>

        <div className="">
          {/* grid grid-cols-1 lg:grid-cols-5 gap-12 */}
          {/* Contato lateral */}
          {/* <aside className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white mb-6">Como me encontrar</h2>
              {contactMethods.map((method, index) => (
                <a
                  key={method.label + index} // Melhorar key prop
                  href={method.href}
                  className="group flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all"
                  aria-label={`Entrar em contato via ${method.label}`} // Adicionar aria-label
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20">
                    <method.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-400">{method.label}</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {method.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{method.description}</p>
                  </div>
                </a>
              ))}
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label + index} // Melhorar key prop
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition ${social.color}`}
                    aria-label={`Acessar perfil no ${social.label}`} // Adicionar aria-label
                  >
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </section>

            <section className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium text-sm">
                  Disponível para novos projetos
                </span>
              </div>
            </section>
          </aside> */}

          {/* Formulário */}
          <section className="lg:col-span-3 items-center justify-center">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">Envie sua mensagem</h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate> 
                {/* Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Nome completo", type: "text", placeholder: "Seu nome", nameAttr: "name" },
                    { id: "email", label: "Email", type: "email", placeholder: "seu@email.com", nameAttr: "email" }
                  ].map(field => (
                    <div key={field.id} className="space-y-2">
                      <label htmlFor={field.id} className="text-sm font-medium text-zinc-400">{field.label}</label>
                      <input
                        id={field.id}
                        name={field.nameAttr} 
                        type={field.type}
                        value={formData[field.nameAttr as keyof typeof formData]} 
                        onChange={handleInputChange}
                        required
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 bg-zinc-800/50 border rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition
                          ${errors[field.nameAttr] ? 'border-red-500' : 'border-zinc-700'}`} 
                        aria-invalid={errors[field.nameAttr] ? "true" : "false"}
                        aria-describedby={`${field.id}-error`} 
                      />
                      {errors[field.nameAttr] && (
                        <p id={`${field.id}-error`} className="text-red-400 text-xs mt-1">{errors[field.nameAttr]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Assunto */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 bg-zinc-800/50 border rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition
                      ${errors.subject ? 'border-red-500' : 'border-zinc-700'}`}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby="subject-error"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="projeto">Novo Projeto</option>
                    <option value="freelance">Trabalho Freelance</option>
                    <option value="colaboracao">Colaboração</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-zinc-800/50 border rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none
                      ${errors.message ? 'border-red-500' : 'border-zinc-700'}`}
                    placeholder="Conte-me mais sobre seu projeto ou ideia..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="message-error"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Botão Enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-lg transition disabled:cursor-not-allowed"
                  aria-live="polite" // Acessibilidade: anuncia mudanças no botão (ex: "Enviando...")
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" role="status" aria-label="Enviando"></div> {/* Adicionado role e aria-label */}
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                {/* Mensagens de Status */}
                {submitStatus && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      submitStatus === 'success' ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
                    }`}
                    role="alert" // Acessibilidade: alerta o usuário sobre o status
                    aria-live="assertive" // Acessibilidade: Garante que o leitor de tela anuncie a mensagem imediatamente
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    )}
                    <p className={`font-medium ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {submitStatus === 'success' ? 'Mensagem enviada com sucesso! Responderei em breve.' : 'Erro ao enviar mensagem. Por favor, tente novamente.'}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}