import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ children }) => (
  <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200">
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="font-bold text-xl mb-4 text-gray-800">{children}</div>
);

const CardContent = ({ children }) => <div className="p-2">{children}</div>;

const Button = ({ children, ...props }) => (
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
    {...props}
  >
    {children}
  </button>
);

const IncidentReport = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState("Duplicação");
  const [notes, setNotes] = useState("");
  const [actiontaken, setaction] = useState("");

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleConfirm = () => {
    // Handle confirm action
    console.log("Razão:", reason);
    console.log("Notas:", notes);
    alert("Incidente registrado com sucesso!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col justify-between">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">
            Marie Curie | 68 anos | Hipertensão arterial, Osteoartrite, Diabetes tipo 2
          </h2>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Ficha doente
          </Button>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Registar Incidente</h3>
          <div className="mt-4">
            <p className="font-medium text-gray-800">Lisinopril 20 mg comprimidos</p>
            <p className="text-gray-600">1 cp / dia | 2020/08/07 - Hoje</p>
          </div>
          <div className="mt-6">
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="reason">
              Razão
            </label>
            <select
              id="reason"
              value={reason}
              onChange={handleReasonChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option>Duplicação</option>
              <option>Sobredosagem</option>
              <option>Reação adversa</option>
              <option>Incompatibilidade</option>
              <option>Outros</option>
            </select>
          </div>
          <div className="mt-6">
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="actiontaken">
              Acção
            </label>
            <select
              id="actiontaken"
              value={actiontaken}
              onChange={handleReasonChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            >
              <option>Comunicação médico telefone</option>
              <option>Comunicação médico email</option>
              <option>Comunicação médico</option>
              <option>suspensão(?)</option>
              <option>Comunicação doente</option>

              <option>Outros(?)</option>
            </select>
          </div>
          <div className="mt-6">
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="notes">
              Notas
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={handleNotesChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows="4"
              placeholder="Adicione notas aqui..."
            ></textarea>
          </div>
          
        </CardContent>
        <div className="mt-6 flex justify-end">
        <Button onClick={handleConfirm}>Confirmar</Button>
      </div>
      </Card>
 
    </div>
  );
};

export default IncidentReport;
