import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaSearch,
  FaPlus,
  FaExclamationCircle,
  FaUser,
  FaHome,
  FaCogs,
  FaDatabase,
  FaFileAlt,
  FaTools,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

// Registrando os componentes necessários para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

// Componente de Ícone da Barra Lateral
const SidebarIcon = ({ icon, label, to }) => (
  <Link to={to} className="flex flex-col items-center mb-10 hover:text-white group">
    <div className="text-white text-2xl mb-2 group-hover:scale-110 group-hover:text-gray-800 transition-all duration-200 ease-in-out">
      {icon}
    </div>
    <p className="text-white text-xs group-hover:text-gray-800">{label}</p>
  </Link>
);

// Componente para Barra de Pesquisa
const SearchBar = () => (
  <div className="relative flex items-center w-full max-w-2xl mx-auto mt-3 bg-white border border-gray-400 rounded-lg shadow-md">
    <div className="absolute left-3">
      <FaSearch className="text-gray-400" />
    </div>
    <input
      type="text"
      placeholder="Buscar por itens de configuração..."
      className="w-full py-2 pl-10 pr-4 text-lg text-gray-700 rounded-lg focus:outline-none"
    />
  </div>
);

// Componente para gráficos
const CMDBCharts = ({ data }) => {
  // Preparando os dados para os gráficos
  const barData = {
    labels: data.map((ci) => ci.name),
    datasets: [
      {
        label: "Categorias por Item",
        data: data.map((ci) => (ci.category === "Software" ? 10 : 5)), // Exemplo de cálculo
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const lineData = {
    labels: data.map((ci) => ci.name),
    datasets: [
      {
        label: "ID por Item",
        data: data.map((ci) => parseInt(ci.id, 10)),
        borderColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráficos do CMDB",
      },
    },
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center">Gráficos do CMDB</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-lg font-medium text-center mb-4">Gráfico de Barras</h3>
          <Bar data={barData} options={options} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-center mb-4">Gráfico de Linhas</h3>
          <Line data={lineData} options={options} />
        </div>
      </div>
    </div>
  );
};

// Componente Principal
const CMDB = () => {
  const [ciData, setCiData] = useState([]);
  const sidebarIcons = [
    { icon: <FaHome />, label: "Home", to: "/tela" },
    { icon: <FaCogs />, label: "Software", to: "/software" },
    { icon: <FaDatabase />, label: "CMDB", to: "/cmdb" },
    { icon: <FaFileAlt />, label: "Contracts", to: "/contracts" },
    { icon: <FaTools />, label: "Settings", to: "/perfil" },
  ];

  useEffect(() => {
    // Simulando a obtenção de dados do CMDB
    const fetchData = async () => {
      const data = [
        { name: "CI A", details: "Item A", id: "201", category: "Serviço" },
        { name: "CI B", details: "Item B", id: "202", category: "Hardware" },
        { name: "CI C", details: "Item C", id: "203", category: "Software" },
        { name: "CI D", details: "Item D", id: "204", category: "Rede" },
      ];
      setCiData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="absolute w-20 h-full bg-gradient-to-b from-blue-800 to-blue-700 p-9">
        {sidebarIcons.map((icon, index) => (
          <SidebarIcon key={index} icon={icon.icon} label={icon.label} to={icon.to} />
        ))}
      </div>

      <div className="ml-24 pt-8 pb-16 px-6">
        <div className="flex items-center justify-center space-x-4">
          <SearchBar />
        </div>

        <CMDBCharts data={ciData} />
      </div>
    </div>
  );
};

export default CMDB;
