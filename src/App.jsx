import React, { useState } from "react";
const Card = ({ children }) => <div className="border rounded shadow p-4">{children}</div>;
const CardContent = ({ children }) => <div className="p-2">{children}</div>;
const CardHeader = ({ children }) => <div className="font-bold mb-2">{children}</div>;
const Button = ({ children, variant, ...props }) => (
  <button
    className={`${
      variant === "outline" ? "border border-gray-500" : ""
    } px-4 py-2 rounded`}
    {...props}
  >
    {children}
  </button>
);

const medications = [
  {
    activePrinciple: "Lisinopril",
    strength: "20 mg",
    form: "Comprimidos",
    prescriptions: [
      {
        brandName: "Lisinopril Aurovitas",
        prescriber: {
          name: "Dr. Albus Dumbledore",
          specialty: "Cardiologia",
          date: "19/01/2024",
        },
        dispenses: [
          { date: "13/01/2025", details: "Lisinopril Aurovitas 20 mg 60 unidades" },
          { date: "14/11/2024", details: "Lisinopril Aurovitas 20 mg 60 unidades" },
          { date: "20/09/2024", details: "Lisinopril Aurovitas 20 mg 60 unidades" },
        ],
      },
      {
        brandName: "Lisinopril",
        prescriber: {
          name: "Dr. Severus Snape",
          specialty: "MGF",
          date: "19/12/2023",
        },
        dispenses: [
          { date: "19/12/2023", details: "Lisinopril 20 mg 60 unidades" },
        ],
      },
    ],
  },
  {
    activePrinciple: "Diclofenac",
    strength: "50 mg",
    form: "Comprimidos",
    prescriptions: [],
  },
  {
    activePrinciple: "Ácido Alendrónico",
    strength: "70 mg",
    form: "Comprimidos",
    prescriptions: [],
  },
  {
    activePrinciple: "Ertugliflozina + Metformina",
    strength: "2.5 mg + 850 mg",
    form: "Comprimidos",
    prescriptions: [],
  },
];

const MedicationDashboard = () => {
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const toggleMedicationDetails = (medication) => {
    if (selectedMedication?.activePrinciple === medication.activePrinciple) {
      setSelectedMedication(null);
      setSelectedPrescription(null);
    } else {
      setSelectedMedication(medication);
      setSelectedPrescription(null);
    }
  };

  const togglePrescriptionDetails = (prescription) => {
    if (selectedPrescription === prescription) {
      setSelectedPrescription(null);
    } else {
      setSelectedPrescription(prescription);
    }
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">
            Marie Curie | 68 anos | Hipertensão arterial, Osteoartrite, Diabetes tipo 2
          </h2>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline">Ficha doente</Button>
            <select className="border p-2 rounded">
              <option>Ordenar por Grupo Terapêutico</option>
              <option>Ordenar por Nome</option>
            </select>
          </div>
          <ul>
            {medications.map((medication, index) => (
              <li key={index} className="mb-4">
                <div
                  className="p-4 border rounded cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleMedicationDetails(medication)}
                >
                  <p>
                    <strong>{medication.activePrinciple}</strong> {medication.strength} - {medication.form}
                  </p>
                </div>
                {selectedMedication?.activePrinciple === medication.activePrinciple && (
                  <div className="mt-2 p-4 border rounded bg-gray-50">
                    {selectedMedication.prescriptions.length > 0 ? (
                      selectedMedication.prescriptions.map((prescription, idx) => (
                        <Card key={idx} className="mb-4">
                          <CardContent>
                            <div
                              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                              onClick={() => togglePrescriptionDetails(prescription)}
                            >
                              <p>
                                <strong>Nome Comercial:</strong> {prescription.brandName}
                              </p>
                              <p>
                                <strong>Prescrito por:</strong> {prescription.prescriber.name}
                              </p>
                              <p>
                                <strong>Especialidade:</strong> {prescription.prescriber.specialty}
                              </p>
                              <p>
                                <strong>Data:</strong> {prescription.prescriber.date}
                              </p>
                            </div>
                            {selectedPrescription === prescription && (
                              <div className="mt-2 p-4 border rounded bg-gray-100">
                                <h4 className="font-semibold mb-2">Dispensas:</h4>
                                <ul>
                                  {prescription.dispenses.map((dispense, dIdx) => (
                                    <li key={dIdx} className="mb-2">
                                      <p>{dispense.date} - {dispense.details}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline">Validar</Button>
                              <Button variant="outline">Alertar Prescritor</Button>
                              <Button variant="outline">Registrar Incidente</Button>
                              <Button variant="outline">Reação Adversa</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p>Nenhuma prescrição encontrada.</p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationDashboard;
