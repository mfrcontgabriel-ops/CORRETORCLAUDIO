"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function LeadForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function enviarLead() {
    const { error } = await supabase.from("leads").insert([
      {
        nome,
        telefone,
        mensagem,
      },
    ]);

    if (error) {
      console.log(error);
      alert(JSON.stringify(error));
    } else {
      alert("Lead enviado com sucesso!");

      setNome("");
      setTelefone("");
      setMensagem("");
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <input
        className="border border-white/10 bg-black/40 p-3 rounded"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        className="border border-white/10 bg-black/40 p-3 rounded"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <textarea
        className="border border-white/10 bg-black/40 p-3 rounded"
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      <button
        onClick={enviarLead}
        className="btn-gold px-6 py-3"
      >
        Enviar Lead
      </button>
    </div>
  );
}