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
    dosage: "2 comprimidos por dia",
    startDate: "07/12/2020",
    prescriptions: [ {
      brandName: "Diclofenac",
      prescriber: {
        name: "Dr. Harry Potter",
        specialty: "Reumatologia",
        date: "19/12/2023",
      },
      dispenses: [
        { date: "19/12/2023", details: "Diclofenac 50 mg 60 unidades" },
      ],
    },],
  },
  {
    activePrinciple: "Ácido Alendrónico",
    strength: "70 mg",
    form: "Comprimidos",
    dosage: "1 comprimido por semana",
    startDate: "14/10/2022",
    prescriptions: [ {
      brandName: "Ácido Alendrónico",
      prescriber: {
        name: "Dr. Minerva McGonagall",
        specialty: "Endocrinologista",
        date: "19/12/2023",
      },
      dispenses: [
        { date: "19/12/2023", details: "Fosamax 70 mg 4 unidades" },
        { date: "19/12/2023", details: "Fosamax 70 mg 4 unidades" },
        { date: "19/12/2023", details: "Fosamax 70 mg 4 unidades" },

      ],
    },],
  },
  {
    activePrinciple: "Ertugliflozina + Metformina",
    strength: "2.5 mg + 1000 mg",
    form: "Comprimidos",
    dosage: "1 comprimido por dia",
    startDate: "07/08/2024",
    prescriptions: [ {
      brandName: "Ertugliflozina + Metformina",
      prescriber: {
        name: "Dr. Severus Snape",
        specialty: "MGF",
        date: "19/12/2023",
      },
      dispenses: [
        { date: "19/12/2023", details: "Segluromet 2.5 mg + 1000 mg 56 unidades" },
      ],
    },],
  },
];

const MedicationDashboard = () => {
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
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
            <div className="flex gap-4 ml-auto">

              <select
                className="border border-gray-300 p-2 rounded-lg"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="startDate" >Ordenar por Data</option>
                <option value="activePrinciple">Ordenar por Nome</option>
              </select>
              <select
                className="border border-gray-300 p-2 rounded-lg"           >
                <option value="activePrinciple" >Agrupar por princípio Ativo </option>
                <option value="prescriber">Agrupar por prescritor</option>
                <option value="therapeuticGroup">Agrupar por Grupo Terapêutico</option>

              </select>
            </div>

          </div>


          <ul>
            {sortedMedications.map((medication, index) => (
              <li key={index} className="mb-6">
                <div
                  className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
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
                  <div className="mt-4 text-right">
                    <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => window.open("https://www.drugs.com/lisinopril.html", "_blank")}>Link Externo</Button>
                  </div>
                </div>
                {selectedMedication?.activePrinciple === medication.activePrinciple && (
                  <div className="mt-4 p-6 bg-gray-50 border rounded-lg">
                    {selectedMedication.prescriptions.length > 0 ? (
                      selectedMedication.prescriptions.map((prescription, idx) => (
                        <Card key={idx} className="mb-4">
                          <CardContent>
                            <div
                              className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
                              onClick={() =>
                                setSelectedPrescription(
                                  selectedPrescription === prescription ? null : prescription
                                )
                              }
                            >
                              <p className="font-medium text-gray-800">
                                <strong>Nome Comercial:</strong> {prescription.brandName}
                              </p>
                              <p className="text-sm text-gray-600">
                                <strong>Prescrito por:</strong> {prescription.prescriber.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                <strong>Especialidade:</strong> {prescription.prescriber.specialty}
                              </p>
                              <p className="text-sm text-gray-600">
                                <strong>Data:</strong> {prescription.prescriber.date}
                              </p>
                            </div>
                            {selectedPrescription === prescription && (
                              <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                                <h4 className="font-semibold mb-2 text-gray-800">Dispensas:</h4>
                                <ul>
                                  {prescription.dispenses.map((dispense, dIdx) => (
                                    <li key={dIdx} className="mb-2 text-sm text-gray-600">
                                      <p>
                                        {dispense.date} - {dispense.details}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex gap-2 mt-4">
                              <Button variant="outline">Manter</Button>
                              <Button variant="outline">Alertar Médico</Button>
                              <Button variant="outline" onClick={() => navigation.navigate("#/incident-report")}>Registar Discrepância</Button>

                              <Button variant="outline">Reação Adversa</Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-gray-600">Nenhuma prescrição encontrada.</p>
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