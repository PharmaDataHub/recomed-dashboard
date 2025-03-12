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
      "activePrinciple": "Ibuprofeno",
      "strength": "400 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Ibuprofeno Ratiopharm 400 mg Comprimidos Revestidos",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "06/02/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Tricalma EF",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/12/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Dimidon",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "09/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "20/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "28/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "24/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Nurofen 400",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "11/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/12/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Generis 600 mg Comprimidos Revestidos",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "09/10/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Roxitromicina",
      "strength": "300 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Inferoxin",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "03/03/2009"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Nimesulida",
      "strength": "100 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Nimesulida Almus",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "03/03/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Nimed",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Bloco Hospitalar",
                  "date": "09/06/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Domperidona",
      "strength": "10 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Domperidona Mylan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "03/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Azitromicina",
      "strength": "500 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Azitromicina Basi",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "27/12/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Amoxicilina + \u00c1cido clavul\u00e2nico",
      "strength": "875 mg + 125 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Tarmix",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "18/06/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Actavis",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "03/05/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Bloco Hospitalar",
                  "date": "09/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Pentafarma",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "20/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "07/01/2011"
              },
              "dispenses": []
          },
          {
              "brandName": "Clavamox DT",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Lorazepam",
      "strength": "2.5 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lorazepam Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "23/06/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Ansilor",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/08/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/05/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/03/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/09/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "25/10/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Ansilor",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "06/01/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ansilor",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/03/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/04/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/04/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/06/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/10/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/05/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/12/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lorazepam Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "08/01/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tramadol",
      "strength": "150 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Tramal retard",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "31/07/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Paracetamol",
      "strength": "1000 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Paracetamol GP",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "12/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Supofen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "16/08/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Ben-U-Ron",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "06/02/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Supofen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Bloco Hospitalar",
                  "date": "28/11/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "20/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Supofen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "27/07/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "28/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Ratiopharm",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/12/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "09/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ben-U-Ron",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol GP",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "28/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Ratiopharm",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "29/04/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Ratiopharm",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "11/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "18/06/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Ben-U-Ron",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "07/01/2011"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol GP",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "30/12/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Venlafaxina",
      "strength": "150 mg",
      "form": "C\u00e1psula de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "18/03/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/03/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/04/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "25/11/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/05/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Ciclum",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "14/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/09/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/09/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/04/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/06/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/10/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/05/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Venlafaxina",
      "strength": "37.5 mg",
      "form": "C\u00e1psula de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/03/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/04/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "25/11/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/05/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Ciclum",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "14/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/09/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/09/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/04/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/06/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/10/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/05/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Metoclopramida",
      "strength": "10 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Metoclopramida Medinfar",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "09/11/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Metoclopramida Medinfar",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "31/07/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Metoclopramida Labesfal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "06/12/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Primperan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "11/01/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Loflazepato de etilo",
      "strength": "2 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Victan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Victan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Victan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Victan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Venlafaxina",
      "strength": "75 mg",
      "form": "C\u00e1psula de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/03/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/04/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "25/11/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/05/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Ciclum",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "14/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/09/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/09/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/04/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/06/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/10/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/05/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Pantoprazol",
      "strength": "20 mg",
      "form": "Comprimido gastrorresistente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Pantoprazol Tecnigen",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "16/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Pantoprazol Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Pantoprazol Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Pantoprazol Braiter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Pantoprazol Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Diclofenac",
      "strength": "50 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Diclofenac Sandoz 50 mg Comprimidos revestidos",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "11/10/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Voltaren Rapid",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "25/01/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Alprazolam",
      "strength": "0.5 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o modificada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Alprazolam Mylan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "27/03/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Alprazolam Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Alprazolam Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/10/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Etoricoxib",
      "strength": "90 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Etoricoxib Teva",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "09/09/2019"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Amissulprida",
      "strength": "50 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Amissulprida Aurovitas",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "12/08/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Amissulprida Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/08/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Amissulprida Generis",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "26/09/2019"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Fentanilo",
      "strength": "12 \u00b5g/h",
      "form": "Sistema transd\u00e9rmico",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Durogesic",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "16/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Fentanilo Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Fentanilo Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Macrogol",
      "strength": "10000 mg",
      "form": "P\u00f3 para solu\u00e7\u00e3o oral",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Forlax 10 g",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Forlax 10 g",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "15/01/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Bisacodilo + Sene",
      "strength": "5 mg + 105 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Bekunis",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Bekunis",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "31/07/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "\u00c1cido ibandr\u00f3nico",
      "strength": "150 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "\u00c1cido Ibandr\u00f3nico Bluefish",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "03/12/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "\u00c1cido Ibandr\u00f3nico Aurobindo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/02/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "\u00c1cido Ibandr\u00f3nico Bluefish",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Alprazolam",
      "strength": "0.25 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Alprazolam Pazolam 0,25 mg Comprimidos",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Alprazolam Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Alprazolam Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/10/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tramadol + Paracetamol",
      "strength": "75 mg + 650 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Zilpen",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "15/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Zaldiar",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Zilpen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tapentadol",
      "strength": "100 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Palexia retard",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "15/01/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Sulfato ferroso",
      "strength": "329.7 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Ferro-Gradumet",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "31/03/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Gabapentina",
      "strength": "100 mg",
      "form": "C\u00e1psula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Gabapentina Germed",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "24/10/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Valeriana (ra\u00edz)",
      "strength": "500 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Livetan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Livetan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/05/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Quetiapina",
      "strength": "25 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Quetiapina Fair-Med",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "14/12/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Domperidona",
      "strength": "10 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Domperidona Labesfal",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Atorvastatina",
      "strength": "10 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "12/02/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/09/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/04/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "09/08/2019"
              },
              "dispenses": []
          },
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "20/11/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Atorvastatina Tecnigen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "28/03/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Valeriana",
      "strength": "45 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Valdispert",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "03/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tramadol + Paracetamol",
      "strength": "37.5 mg + 325 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Tramadol + Paracetamol Bluepharma",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "23/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Zaldiar",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Zilpen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Paracetamol + Tiocolquicosido",
      "strength": "500 mg + 2 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Adalgur N",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "25/01/2012"
              },
              "dispenses": []
          },
          {
              "brandName": "Adalgur N",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Adalgur N",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "31/07/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Adalgur N",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "31/12/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Cetoprofeno",
      "strength": "20 mg",
      "form": "Emplastro medicamentoso",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Keplat",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "25/09/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Venlafaxina",
      "strength": "75 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "14/11/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/05/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "22/11/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/10/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Ciclum",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "14/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/09/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/09/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/04/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/06/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/10/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/05/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Zolpidem",
      "strength": "10 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Zolpidem Teva",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "24/09/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Zolpidem Teva",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "14/11/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Furosemida",
      "strength": "40 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lasix",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "31/03/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Esomeprazol",
      "strength": "20 mg",
      "form": "Comprimido gastrorresistente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Esomeprazol GP",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "09/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Esomeprazol Pentafarma",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/07/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Esomeprazol toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Esomeprazol toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "20/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Esomeprazol Pentafarma",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "18/06/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Azitromicina",
      "strength": "500 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Azitromicina Krka",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "17/12/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Lamotrigina",
      "strength": "25 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "27/09/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "20/11/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "08/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tapentadol",
      "strength": "50 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Palexia retard",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "09/09/2019"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Prednisolona",
      "strength": "20 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Prednisolona Labesfal",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Lepicortinolo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Lepicortinolo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Lepicortinolo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Metamizol magn\u00e9sico",
      "strength": "575 mg",
      "form": "C\u00e1psula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Metamizol Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "29/04/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Metamizol Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "28/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Metamizol Vit\u00f3ria",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Bloco Hospitalar",
                  "date": "28/11/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Bacitracina",
      "strength": "500 U.I./g",
      "form": "Pomada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Bacitracina Labesfal",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "09/06/2017"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Carbonato de c\u00e1lcio + Colecalciferol",
      "strength": "1500 mg + 400 U.I.",
      "form": "Comprimido efervescente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Calcium D Sandoz",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "16/07/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Calcium D Sandoz",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/02/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Calcium D Sandoz",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "03/12/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Olanzapina",
      "strength": "2.5 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Olanzapina Alter",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "03/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Olanzapina Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Omeprazol",
      "strength": "10 mg",
      "form": "C\u00e1psula gastrorresistente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Omeprazol Generis",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "06/02/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Omeprazol Aurobindo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "18/11/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Pidolato de magn\u00e9sio",
      "strength": "1500 mg/10 ml",
      "form": "Solu\u00e7\u00e3o oral",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Magnesona",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "14/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Magnesona",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "06/07/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Ibuprofeno",
      "strength": "600 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Ibuprofeno Generis 600 mg Comprimidos Revestidos",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "18/06/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "24/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Nurofen 400",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "11/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/12/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Generis 600 mg Comprimidos Revestidos",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "09/10/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Venlafaxina",
      "strength": "150 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "23/06/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "13/04/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "30/08/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/09/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/09/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/04/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/06/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/04/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/07/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/10/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina TAD",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "29/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "10/08/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "08/02/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "17/08/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Mepha",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina toLife",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/05/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Venlafaxina Bluefish XR",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Quetiapina",
      "strength": "50 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o prolongada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Quetiapina Teva",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "12/04/2017"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Amoxicilina + \u00c1cido clavul\u00e2nico",
      "strength": "875 mg + 125 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Pentafarma",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "09/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "03/05/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Bloco Hospitalar",
                  "date": "09/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Pentafarma",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "20/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "07/01/2011"
              },
              "dispenses": []
          },
          {
              "brandName": "Clavamox DT",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Vacina contra a gripe",
      "strength": "Associa\u00e7\u00e3o",
      "form": "Suspens\u00e3o injet\u00e1vel em seringa pr\u00e9-cheia",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Istivac",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "30/11/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Influvac Tetra",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/10/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Vitaminas do complexo B + C\u00e1lcio",
      "strength": "Associa\u00e7\u00e3o",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Dagravit B Complex Forte",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tramadol + Paracetamol",
      "strength": "37.5 mg + 325 mg",
      "form": "Comprimido efervescente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Zaldiar Efe",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/12/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Zaldiar",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Zilpen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Cianocobalamina + Piridoxina + Tiamina",
      "strength": "0.2 mg + 200 mg + 100 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Neurobion",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "27/09/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Neurobion",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "21/11/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tramadol + Paracetamol",
      "strength": "37.5 mg + 325 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Tramadol + Paracetamol Aristo",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "11/10/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Zaldiar",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Zilpen",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Amoxicilina + \u00c1cido clavul\u00e2nico",
      "strength": "875 mg + 125 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "10/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Tarmix",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "03/05/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Bloco Hospitalar",
                  "date": "09/06/2016"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido Clavul\u00e2nico Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Pentafarma",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "20/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Amoxicilina + \u00c1cido clavul\u00e2nico Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "07/01/2011"
              },
              "dispenses": []
          },
          {
              "brandName": "Clavamox DT",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Fentanilo",
      "strength": "50 \u00b5g/h",
      "form": "Sistema transd\u00e9rmico",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Fentanilo Mylan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Fentanilo Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Fentanilo Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tramadol + Dexcetoprofeno",
      "strength": "75 mg + 25 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Skudexa",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "11/01/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Paracetamol",
      "strength": "1000 mg",
      "form": "Granulado efervescente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Xumadol 1g",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "03/03/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "28/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Ratiopharm",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "27/12/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "09/06/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ben-U-Ron",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "04/02/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol GP",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "28/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Ratiopharm",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "29/04/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Ratiopharm",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "11/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "18/06/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Ben-U-Ron",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "07/01/2011"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol GP",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "30/12/2020"
              },
              "dispenses": []
          },
          {
              "brandName": "Paracetamol Alter",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Fenticonazol",
      "strength": "200 mg",
      "form": "\u00d3vulo",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lomexin",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "30/10/2009"
              },
              "dispenses": []
          },
          {
              "brandName": "Lomexin",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "03/07/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Aspartato de arginina",
      "strength": "5000 mg/10 ml",
      "form": "Solu\u00e7\u00e3o oral",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Asparten 5",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "02/09/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Asparten 5",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "14/10/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Ibuprofeno",
      "strength": "400 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Nurofen 400",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "12/11/2014"
              },
              "dispenses": []
          },
          {
              "brandName": "Nurofen 400",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Internamento Hospitalar",
                  "date": "11/10/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Mylan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/12/2017"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Generis 600 mg Comprimidos Revestidos",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "04/01/2021"
              },
              "dispenses": []
          },
          {
              "brandName": "Ibuprofeno Aurovitas",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "09/10/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Pregabalina",
      "strength": "25 mg",
      "form": "C\u00e1psula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lyrica",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "14/07/2017"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Lamotrigina",
      "strength": "50 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "18/07/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "28/03/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "12/12/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "24/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Hospital",
                  "date": "23/05/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "08/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Flurbiprofeno",
      "strength": "16.2 mg/ml",
      "form": "Solu\u00e7\u00e3o para pulveriza\u00e7\u00e3o bucal",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Strepfen Spray",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "23/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "\u00c1cido f\u00f3lico",
      "strength": "5 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "\u00c1cido F\u00f3lico Farmoz",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "05/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Etodolac",
      "strength": "300 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Dualgan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "23/05/2012"
              },
              "dispenses": []
          },
          {
              "brandName": "Dualgan",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "22/12/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "\u00c1cido aminocapr\u00f3ico",
      "strength": "3000 mg",
      "form": "P\u00f3 para solu\u00e7\u00e3o oral",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Epsicaprom",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "12/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Morfina",
      "strength": "20 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Sevredol",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Internamento Hospitalar",
                  "date": "17/03/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Cianocobalamina",
      "strength": "1 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Permadoze Oral",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "05/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tiocolquicosido",
      "strength": "4 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Tiocolquicosido Generis",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Hospitalar",
                  "date": "23/05/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Omeprazol",
      "strength": "40 mg",
      "form": "C\u00e1psula gastrorresistente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Mepraz 40 mg C\u00e1psulas Duras Gastrorresistentes",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "06/12/2013"
              },
              "dispenses": []
          },
          {
              "brandName": "Omeprazol Aurobindo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "18/11/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Simeticone",
      "strength": "42 mg",
      "form": "Comprimido para mastigar",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Aero-Om",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "09/11/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Omeprazol",
      "strength": "20 mg",
      "form": "C\u00e1psula gastrorresistente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Omeprazol Omezolan 20 mg C\u00e1psulas Gastrorresistentes",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "02/12/2015"
              },
              "dispenses": []
          },
          {
              "brandName": "Omeprazol Aurobindo",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "18/11/2015"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Bisacodilo",
      "strength": "5 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Dulcolax",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "10/03/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Morfina",
      "strength": "10 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Sevredol",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "02/03/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Fentanilo",
      "strength": "25 \u00b5g/h",
      "form": "Sistema transd\u00e9rmico",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Fentanilo Mylan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Hospital",
                  "date": "25/02/2021"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Vareniclina",
      "strength": "0.5 mg + 1 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Champix",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "14/09/2011"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Lamotrigina",
      "strength": "100 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "08/01/2018"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          },
          {
              "brandName": "Lamictal",
              "prescriber": {
                  "name": "Dr. Albus Dumbledore",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Tizanidina",
      "strength": "2 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Sirdalud",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "30/12/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Econazol",
      "strength": "(10 mg/g) + (150 mg)",
      "form": "Creme vaginal + \u00d3vulo",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Gyno-Pevaryl Combipack",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "28/07/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Mirtazapina",
      "strength": "15 mg",
      "form": "Comprimido orodispers\u00edvel",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Mirtazapina Bluefish",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "15/05/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Cassia angustifolia (fruto) + Ispagula (mucilagem) + Plantago ovata (sementes)",
      "strength": "Associa\u00e7\u00e3o",
      "form": "Granulado",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Agiolax",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "08/01/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Clonixina",
      "strength": "300 mg",
      "form": "C\u00e1psula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Clonix",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "03/04/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Fluconazol",
      "strength": "150 mg",
      "form": "C\u00e1psula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Diflucan 150",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "03/07/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Cetirizina",
      "strength": "10 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Cetirizina Germed 10 mg comprimidos revestidos",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "14/03/2016"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Benzilpenicilina benzat\u00ednica + Benzilpenicilina pot\u00e1ssica + Benzilpenicilina proca\u00ednica",
      "strength": "Associa\u00e7\u00e3o",
      "form": "P\u00f3 e ve\u00edculo para suspens\u00e3o injet\u00e1vel",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Lentocilin 6.3.3",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "05/03/2009"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Escina",
      "strength": "50 mg",
      "form": "Comprimido de liberta\u00e7\u00e3o modificada",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Venotop",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "29/07/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Diazepam",
      "strength": "10 mg",
      "form": "Comprimido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Diazepam Pharmakern",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "22/12/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Saccharomyces boulardii",
      "strength": "250 mg",
      "form": "C\u00e1psula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "UL-250",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "02/11/2009"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Trazodona",
      "strength": "100 mg",
      "form": "Comprimido revestido por pel\u00edcula",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Triticum",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "20/01/2014"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Aceglumato de deanol + Heptaminol",
      "strength": "230 mg/10 ml + 180 mg/10 ml",
      "form": "Solu\u00e7\u00e3o oral",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Forticol",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "29/07/2013"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Butirato de hidrocortisona",
      "strength": "1 mg/g",
      "form": "Creme",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Locoid Lipocreme",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "31/01/2012"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Econazol",
      "strength": "10 mg/g",
      "form": "Creme",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Pevaryl",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "03/07/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Sucralfato",
      "strength": "1000 mg/5 ml",
      "form": "Suspens\u00e3o oral",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Sucralfato Mylan",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "03/04/2020"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Esomeprazol",
      "strength": "20 mg",
      "form": "C\u00e1psula gastrorresistente",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Esomeprazol Emozul",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "26/02/2018"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Cloreto de tr\u00f3spio",
      "strength": "20 mg",
      "form": "Comprimido revestido",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Spasmoplex",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Urg\u00eancia Centro sa\u00fade",
                  "date": "08/08/2008"
              },
              "dispenses": []
          }
      ]
  },
  {
      "activePrinciple": "Difenidramina + Calamina + C\u00e2nfora",
      "strength": "10 mg/g + 80 mg/g + 1 mg/g",
      "form": "Creme",
      "dosage": "",
      "startDate": "",
      "prescriptions": [
          {
              "brandName": "Caladryl",
              "prescriber": {
                  "name": "Dr. Severus Snape",
                  "specialty": "Consulta Centro sa\u00fade",
                  "date": "14/03/2016"
              },
              "dispenses": []
          }
      ]
  }
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
            <Button variant="outline">Atualizar dados</Button>         <Button variant="outline">Ficha doente</Button>

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