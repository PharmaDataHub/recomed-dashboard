import React, { useState } from "react";

const Card = ({ children }) => (
  <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200">
    {children}
  </div>
);
const CardContent = ({ children }) => <div className="p-2">{children}</div>;
const CardHeader = ({ children }) => <div className="font-bold text-xl mb-4 text-gray-800">{children}</div>;
const Button = ({ children, variant, ...props }) => (
  <button
    className={`${variant === "outline"
        ? "border border-blue-500 text-blue-500 bg-white hover:bg-blue-100"
        : "bg-blue-500 text-white hover:bg-blue-600"
      } px-4 py-2 rounded-lg transition-all duration-200`}
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
    dosage: "1 comprimido por dia",
    startDate: "07/08/2020",
    active: true,  // ATIVO
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
        ],
      },
    ],
  },
  {
    activePrinciple: "Diclofenac",
    strength: "50 mg",
    form: "Comprimidos",
    dosage: "2 comprimidos por dia",
    startDate: "07/12/2020",
    active: false, // INATIVO
    prescriptions: [
      {
        brandName: "Diclofenac",
        prescriber: {
          name: "Dr. Harry Potter",
          specialty: "Reumatologia",
          date: "19/12/2023",
        },
        dispenses: [{ date: "19/12/2023", details: "Diclofenac 50 mg 60 unidades" }],
      },
    ],
  },
  {
    activePrinciple: "Ácido Alendrónico",
    strength: "70 mg",
    form: "Comprimidos",
    dosage: "1 comprimido por semana",
    startDate: "14/10/2022",
    active: true,  // ATIVO
    prescriptions: [
      {
        brandName: "Ácido Alendrónico",
        prescriber: {
          name: "Dr. Minerva McGonagall",
          specialty: "Endocrinologista",
          date: "19/12/2023",
        },
        dispenses: [{ date: "19/12/2023", details: "Fosamax 70 mg 4 unidades" }],
      },
    ],
  },
  {
    activePrinciple: "Ertugliflozina + Metformina",
    strength: "2.5 mg + 1000 mg",
    form: "Comprimidos",
    dosage: "1 comprimido por dia",
    startDate: "07/08/2024",
    active: false, // INATIVO
    prescriptions: [
      {
        brandName: "Segluromet",
        prescriber: {
          name: "Dr. Severus Snape",
          specialty: "MGF",
          date: "19/12/2023",
        },
        dispenses: [{ date: "19/12/2023", details: "Segluromet 2.5 mg + 1000 mg 56 unidades" }],
      },
    ],
  },
];

const MedicationDashboard = () => {
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showInactive, setShowInactive] = useState(false);
  const [sortBy, setSortBy] = useState("startDate");

  const sortedMedications = [...medications].sort((a, b) => {
    if (sortBy === "startDate") {
      return new Date(a.startDate.split("/").reverse().join("-")) - new Date(b.startDate.split("/").reverse().join("-"));
    }
    return a[sortBy].localeCompare(b[sortBy]);
  });

  const toggleMedicationDetails = (medication) => {
    if (selectedMedication?.activePrinciple === medication.activePrinciple) {
      setSelectedMedication(null);
      setSelectedPrescription(null);
    } else {
      setSelectedMedication(medication);
      setSelectedPrescription(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Card className="mb-6">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">
            Marie Curie | 68 anos | Hipertensão arterial, Osteoartrite, Diabetes tipo 2
          </h2>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <Button variant="outline">Ficha doente</Button>
          </div>

          <ul>
            {sortedMedications
              .filter((med) => med.active || showInactive)
              .map((medication, index) => (
                <li key={index} className="mb-6">
                  <div
                    className={`p-6 border rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer ${
                      medication.active ? "" : "opacity-50"
                    }`}
                    onClick={() => toggleMedicationDetails(medication)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {medication.activePrinciple} {medication.strength} - {medication.form}
                        </p>
                        <p className="text-sm text-gray-600">Dosagem: {medication.dosage}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Data de Início: {medication.startDate}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          {!showInactive && medications.some((med) => !med.active) && (
            <Button className="mt-4" onClick={() => setShowInactive(true)}>
              Mostrar Medicação Inativa ({medications.filter((m) => !m.active).length})
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationDashboard;
